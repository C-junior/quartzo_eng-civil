<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :aria-busy="loading"
    :aria-describedby="loading ? `${$attrs.id}-loading` : undefined"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <!-- Loading Spinner -->
    <span v-if="loading" class="mr-2 flex items-center" :id="`${$attrs.id}-loading`">
      <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
    
    <!-- Icon Slot -->
    <span v-if="$slots.icon && !loading" class="flex items-center" :class="$slots.default ? 'mr-2' : ''">
      <slot name="icon"></slot>
    </span>
    
    <!-- Default Content -->
    <span class="flex items-center justify-center">
      <slot></slot>
    </span>
    
    <!-- Right Icon Slot -->
    <span v-if="$slots.iconRight && !loading" class="flex items-center" :class="$slots.default ? 'ml-2' : ''">
      <slot name="iconRight"></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'success', 'warning', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: String,
      default: 'xl',
      validator: (value) => ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'].includes(value)
    },
    shadow: {
      type: Boolean,
      default: true
    }
  },
  emits: ['click'],
  computed: {
    buttonClasses() {
      const base = [
        'inline-flex',
        'items-center',
        'justify-center',
        'font-semibold',
        'transition-all',
        'duration-300',
        'focus:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-offset-2',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed',
        'disabled:transform-none',
        'active:scale-95',
        'select-none',
        'will-change-transform'
      ]
      
      // Full width
      if (this.fullWidth) {
        base.push('w-full')
      }
      
      // Border radius
      const roundedClasses = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full'
      }
      base.push(roundedClasses[this.rounded])
      
      // Size variants with better scaling
      const sizeClasses = {
        xs: ['px-2', 'py-1', 'text-xs', 'min-h-[24px]'],
        sm: ['px-3', 'py-1.5', 'text-sm', 'min-h-[32px]'],
        md: ['px-4', 'py-2', 'text-base', 'min-h-[40px]'],
        lg: ['px-6', 'py-3', 'text-lg', 'min-h-[48px]'],
        xl: ['px-8', 'py-4', 'text-xl', 'min-h-[56px]']
      }
      
      // Enhanced color variants with gradients and hover effects
      const variantClasses = {
        primary: [
          'bg-gradient-to-r',
          'from-wine-900',
          'to-wine-800',
          'text-white',
          'hover:from-wine-800',
          'hover:to-wine-700',
          'focus-visible:ring-wine-500',
          'hover:scale-105',
          'transition-transform',
          'duration-200',
          ...(this.shadow ? ['shadow-md', 'hover:shadow-lg'] : [])
        ],
        secondary: [
          'bg-gradient-to-r',
          'from-primary-500',
          'to-primary-600',
          'text-white',
          'hover:from-primary-600',
          'hover:to-primary-700',
          'focus-visible:ring-primary-400',
          'hover:scale-105',
          'transition-transform',
          'duration-200',
          ...(this.shadow ? ['shadow-md', 'hover:shadow-lg'] : [])
        ],
        outline: [
          'border-2',
          'border-wine-900',
          'text-wine-900',
          'bg-transparent',
          'hover:bg-wine-900',
          'hover:text-white',
          'focus-visible:ring-wine-500',
          'hover:scale-105',
          'transition-transform',
          'duration-200',
          ...(this.shadow ? ['hover:shadow-md'] : [])
        ],
        ghost: [
          'text-wine-900',
          'bg-transparent',
          'hover:bg-wine-50',
          'focus-visible:ring-wine-300',
          'hover:scale-105',
          'transition-transform',
          'duration-200'
        ],
        success: [
          'bg-gradient-to-r',
          'from-green-600',
          'to-green-700',
          'text-white',
          'hover:from-green-700',
          'hover:to-green-800',
          'focus-visible:ring-green-500',
          'hover:scale-105',
          'transition-transform',
          'duration-200',
          ...(this.shadow ? ['shadow-md', 'hover:shadow-lg'] : [])
        ],
        warning: [
          'bg-gradient-to-r',
          'from-amber-500',
          'to-amber-600',
          'text-white',
          'hover:from-amber-600',
          'hover:to-amber-700',
          'focus-visible:ring-amber-400',
          'hover:scale-105',
          'transition-transform',
          'duration-200',
          ...(this.shadow ? ['shadow-md', 'hover:shadow-lg'] : [])
        ],
        danger: [
          'bg-gradient-to-r',
          'from-red-600',
          'to-red-700',
          'text-white',
          'hover:from-red-700',
          'hover:to-red-800',
          'focus-visible:ring-red-500',
          'hover:scale-105',
          'transition-transform',
          'duration-200',
          ...(this.shadow ? ['shadow-md', 'hover:shadow-lg'] : [])
        ]
      }
      
      return [
        ...base,
        ...sizeClasses[this.size],
        ...variantClasses[this.variant]
      ]
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled && !this.loading) {
        // Add haptic feedback for modern browsers
        if ('vibrate' in navigator) {
          navigator.vibrate(10)
        }
        
        this.$emit('click', event)
      }
    }
  }
}
</script>
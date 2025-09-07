<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="loading" class="mr-2">
      <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    type: {
      type: String,
      default: 'button'
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
        'rounded-lg',
        'transition-all',
        'duration-200',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-offset-2',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed'
      ]
      
      if (this.fullWidth) {
        base.push('w-full')
      }
      
      // Size variants
      const sizeClasses = {
        sm: ['px-3', 'py-1.5', 'text-sm'],
        md: ['px-4', 'py-2', 'text-base'],
        lg: ['px-6', 'py-3', 'text-lg']
      }
      
      // Color variants
      const variantClasses = {
        primary: [
          'bg-wine-900',
          'text-white',
          'hover:bg-wine-800',
          'focus:ring-wine-700'
        ],
        secondary: [
          'bg-primary-500',
          'text-white',
          'hover:bg-primary-600',
          'focus:ring-primary-400'
        ],
        outline: [
          'border-2',
          'border-wine-900',
          'text-wine-900',
          'bg-transparent',
          'hover:bg-wine-900',
          'hover:text-white',
          'focus:ring-wine-700'
        ],
        ghost: [
          'text-wine-900',
          'bg-transparent',
          'hover:bg-gray-100',
          'focus:ring-gray-300'
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
        this.$emit('click', event)
      }
    }
  }
}
</script>
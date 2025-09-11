<template>
  <div :class="cardClasses">
    <!-- Header Slot -->
    <div v-if="$slots.header" :class="headerClasses">
      <slot name="header"></slot>
    </div>
    
    <!-- Main Content -->
    <div :class="bodyClasses">
      <slot></slot>
    </div>
    
    <!-- Footer Slot -->
    <div v-if="$slots.footer" :class="footerClasses">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'elevated', 'outlined', 'flat', 'glass', 'gradient'].includes(value)
    },
    hover: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: 'default',
      validator: (value) => ['none', 'xs', 'sm', 'default', 'lg', 'xl'].includes(value)
    },
    rounded: {
      type: String,
      default: 'xl',
      validator: (value) => ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value)
    },
    interactive: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    cardClasses() {
      const base = ['flex', 'flex-col', 'h-full', 'transition-all', 'duration-300', 'ease-out']
      
      // Border radius
      const roundedClasses = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl'
      }
      base.push(roundedClasses[this.rounded])
      
      // Variant styles with modern effects
      const variants = {
        default: [
          'bg-white',
          'shadow-soft',
          ...(this.border ? ['border', 'border-gray-100'] : [])
        ],
        elevated: [
          'bg-white',
          'shadow-large',
          ...(this.border ? ['border', 'border-gray-100'] : [])
        ],
        outlined: [
          'bg-white',
          'border-2',
          'border-gray-200',
          'shadow-soft'
        ],
        flat: [
          'bg-white',
          'shadow-none',
          ...(this.border ? ['border', 'border-gray-100'] : [])
        ],
        glass: [
          'bg-white/80',
          'backdrop-blur-md',
          'shadow-glass',
          'border',
          'border-white/20'
        ],
        gradient: [
          'bg-gradient-to-br',
          'from-white',
          'to-gray-50',
          'shadow-medium',
          ...(this.border ? ['border', 'border-gray-100'] : [])
        ]
      }
      
      // Hover effects
      const hoverClasses = []
      if (this.hover || this.interactive) {
        hoverClasses.push(
          'hover:shadow-large',
          'hover:-translate-y-2',
          'cursor-pointer'
        )
        
        if (this.variant === 'glass') {
          hoverClasses.push('hover:bg-white/90')
        }
      }
      
      // Interactive states
      if (this.interactive) {
        hoverClasses.push(
          'active:scale-98',
          'focus:outline-none',
          'focus-visible:ring-2',
          'focus-visible:ring-wine-500',
          'focus-visible:ring-offset-2'
        )
      }
      
      return [
        ...base,
        ...variants[this.variant],
        ...hoverClasses
      ]
    },
    
    bodyClasses() {
      const paddingClasses = {
        none: ['flex-grow'],
        xs: ['p-2', 'flex-grow'],
        sm: ['p-4', 'flex-grow'],
        default: ['p-6', 'flex-grow'],
        lg: ['p-8', 'flex-grow'],
        xl: ['p-10', 'flex-grow']
      }
      
      return paddingClasses[this.padding]
    },
    
    headerClasses() {
      const basePadding = this.padding === 'none' ? 'px-6 py-4' : 
                         this.padding === 'xs' ? 'px-2 pt-2 pb-1' :
                         this.padding === 'sm' ? 'px-4 py-3' :
                         this.padding === 'default' ? 'px-6 py-4' :
                         this.padding === 'lg' ? 'px-8 py-5' :
                         'px-10 py-6'
      
      return [
        basePadding,
        'border-b',
        'border-gray-200/60',
        'backdrop-blur-sm'
      ]
    },
    
    footerClasses() {
      const basePadding = this.padding === 'none' ? 'px-6 py-4' : 
                         this.padding === 'xs' ? 'px-2 pt-1 pb-2' :
                         this.padding === 'sm' ? 'px-4 py-3' :
                         this.padding === 'default' ? 'px-6 py-4' :
                         this.padding === 'lg' ? 'px-8 py-5' :
                         'px-10 py-6'
      
      return [
        basePadding,
        'border-t',
        'border-gray-200/60',
        'bg-gray-50/50',
        'backdrop-blur-sm'
      ]
    }
  }
}
</script>
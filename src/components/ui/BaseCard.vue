<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="px-6 py-4 border-b border-gray-200">
      <slot name="header"></slot>
    </div>
    
    <div :class="bodyClasses">
      <slot></slot>
    </div>
    
    <div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200 bg-gray-50">
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
      validator: (value) => ['default', 'elevated', 'outlined', 'flat'].includes(value)
    },
    hover: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: 'default',
      validator: (value) => ['none', 'sm', 'default', 'lg'].includes(value)
    }
  },
  computed: {
    cardClasses() {
      const base = ['bg-white', 'rounded-xl', 'transition-all', 'duration-300']
      
      const variants = {
        default: ['shadow-lg', 'border', 'border-gray-100'],
        elevated: ['shadow-xl', 'border', 'border-gray-100'],
        outlined: ['border-2', 'border-gray-200', 'shadow-sm'],
        flat: ['shadow-none', 'border', 'border-gray-100']
      }
      
      const hoverClasses = this.hover ? ['hover:shadow-xl', 'hover:-translate-y-1'] : []
      
      return [
        ...base,
        ...variants[this.variant],
        ...hoverClasses
      ]
    },
    
    bodyClasses() {
      const paddingClasses = {
        none: [],
        sm: ['p-4'],
        default: ['p-6'],
        lg: ['p-8']
      }
      
      return paddingClasses[this.padding]
    }
  }
}
</script>
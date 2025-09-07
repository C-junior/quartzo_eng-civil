<template>
  <Teleport to="body">
    <Transition
      name="modal-backdrop"
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        ref="modalOverlay"
        class="fixed inset-0 z-50 overflow-y-auto"
        :class="backdropClasses"
        @click="handleOverlayClick"
        @keydown="handleKeydown"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="title ? 'modal-title' : undefined"
        :aria-describedby="description ? 'modal-description' : undefined"
      >
        <!-- Enhanced Backdrop with better blur -->
        <div :class="backdropStyles"></div>
        
        <!-- Modal Container -->
        <div :class="containerClasses">
          <Transition
            name="modal-content"
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 scale-95 translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-4"
          >
            <div
              v-if="isOpen"
              ref="modalContent"
              :class="modalClasses"
              @click.stop
              tabindex="-1"
            >
              <!-- Header -->
              <div v-if="$slots.header || title" :class="headerClasses">
                <div class="flex-1">
                  <slot name="header">
                    <h3 id="modal-title" :class="titleClasses">{{ title }}</h3>
                    <p v-if="description" id="modal-description" class="mt-1 text-sm text-gray-500">{{ description }}</p>
                  </slot>
                </div>
                
                <button
                  v-if="closable"
                  ref="closeButton"
                  @click="close"
                  :class="closeButtonClasses"
                  aria-label="Fechar modal"
                >
                  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <!-- Body -->
              <div :class="bodyClasses">
                <slot></slot>
              </div>
              
              <!-- Footer -->
              <div v-if="$slots.footer" :class="footerClasses">
                <slot name="footer"></slot>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(value)
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeOnOverlay: {
      type: Boolean,
      default: true
    },
    closeOnEscape: {
      type: Boolean,
      default: true
    },
    padding: {
      type: String,
      default: 'default',
      validator: (value) => ['none', 'xs', 'sm', 'default', 'lg', 'xl'].includes(value)
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'glass', 'elevated'].includes(value)
    },
    persistent: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: String,
      default: '2xl',
      validator: (value) => ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value)
    }
  },
  emits: ['close', 'update:isOpen', 'opened', 'closed'],
  data() {
    return {
      previousActiveElement: null,
      focusableElements: []
    }
  },
  computed: {
    backdropClasses() {
      return [
        'flex',
        'items-center',
        'justify-center',
        'min-h-screen',
        'p-4',
        'text-center',
        'sm:p-0'
      ]
    },
    
    backdropStyles() {
      const base = ['fixed', 'inset-0', 'transition-all', 'duration-300']
      
      if (this.variant === 'glass') {
        return [...base, 'bg-black/20', 'backdrop-blur-md']
      }
      
      return [...base, 'bg-black/50', 'backdrop-blur-sm']
    },
    
    containerClasses() {
      return [
        'relative',
        'flex',
        'items-center',
        'justify-center',
        'min-h-screen',
        'p-4',
        'text-center',
        'sm:p-0'
      ]
    },
    
    modalClasses() {
      const base = [
        'relative',
        'inline-block',
        'w-full',
        'text-left',
        'align-bottom',
        'transition-all',
        'transform',
        'shadow-2xl',
        'sm:align-middle'
      ]
      
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
      
      // Variant styles
      const variantClasses = {
        default: ['bg-white'],
        glass: ['bg-white/95', 'backdrop-blur-xl', 'border', 'border-white/20'],
        elevated: ['bg-white', 'ring-1', 'ring-black/5']
      }
      base.push(...variantClasses[this.variant])
      
      // Size classes
      const sizeClasses = {
        xs: ['max-w-xs', 'sm:max-w-xs'],
        sm: ['max-w-sm', 'sm:max-w-sm'],
        md: ['max-w-md', 'sm:max-w-md'],
        lg: ['max-w-lg', 'sm:max-w-lg'],
        xl: ['max-w-xl', 'sm:max-w-xl'],
        '2xl': ['max-w-2xl', 'sm:max-w-2xl'],
        full: ['max-w-full', 'm-4', 'sm:m-6']
      }
      
      return [
        ...base,
        ...sizeClasses[this.size]
      ]
    },
    
    headerClasses() {
      const basePadding = this.padding === 'none' ? 'px-4 py-3' : 
                         this.padding === 'xs' ? 'px-3 py-2' :
                         this.padding === 'sm' ? 'px-4 py-3' :
                         this.padding === 'default' ? 'px-6 py-4' :
                         this.padding === 'lg' ? 'px-8 py-5' :
                         'px-10 py-6'
      
      return [
        'flex',
        'items-start',
        'justify-between',
        basePadding,
        'border-b',
        'border-gray-200/60',
        'backdrop-blur-sm'
      ]
    },
    
    titleClasses() {
      return [
        'text-lg',
        'font-semibold',
        'leading-6',
        'text-gray-900',
        'sm:text-xl'
      ]
    },
    
    closeButtonClasses() {
      return [
        'rounded-lg',
        'text-gray-400',
        'hover:text-gray-500',
        'focus:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-wine-500',
        'focus-visible:ring-offset-2',
        'transition-colors',
        'duration-200',
        'p-1',
        'hover:bg-gray-100'
      ]
    },
    
    bodyClasses() {
      const paddingClasses = {
        none: [],
        xs: ['p-3'],
        sm: ['p-4'],
        default: ['p-6'],
        lg: ['p-8'],
        xl: ['p-10']
      }
      
      return [
        ...paddingClasses[this.padding],
        'overflow-y-auto',
        'max-h-96'
      ]
    },
    
    footerClasses() {
      const basePadding = this.padding === 'none' ? 'px-4 py-3' : 
                         this.padding === 'xs' ? 'px-3 py-2' :
                         this.padding === 'sm' ? 'px-4 py-3' :
                         this.padding === 'default' ? 'px-6 py-4' :
                         this.padding === 'lg' ? 'px-8 py-5' :
                         'px-10 py-6'
      
      return [
        'flex',
        'flex-col-reverse',
        'sm:flex-row',
        'sm:justify-end',
        'sm:space-x-3',
        'space-y-3',
        'space-y-reverse',
        'sm:space-y-0',
        basePadding,
        'bg-gray-50/50',
        'border-t',
        'border-gray-200/60',
        'backdrop-blur-sm'
      ]
    }
  },
  watch: {
    isOpen: {
      handler(newVal) {
        if (newVal) {
          this.open()
        } else {
          this.closeModal()
        }
      },
      immediate: true
    }
  },
  
  beforeUnmount() {
    this.cleanup()
  },
  
  methods: {
    open() {
      this.previousActiveElement = document.activeElement
      document.body.style.overflow = 'hidden'
      
      this.$nextTick(() => {
        this.setupFocusTrap()
        this.focusModal()
        this.$emit('opened')
      })
    },
    
    close() {
      if (this.persistent) return
      
      this.$emit('close')
      this.$emit('update:isOpen', false)
    },
    
    closeModal() {
      this.cleanup()
      this.$emit('closed')
    },
    
    cleanup() {
      document.body.style.overflow = ''
      
      if (this.previousActiveElement && this.previousActiveElement.focus) {
        this.previousActiveElement.focus()
      }
    },
    
    handleOverlayClick(event) {
      if (this.closeOnOverlay && event.target === this.$refs.modalOverlay) {
        this.close()
      }
    },
    
    handleKeydown(event) {
      if (event.key === 'Escape' && this.closeOnEscape && this.closable) {
        this.close()
      } else if (event.key === 'Tab') {
        this.handleTabKey(event)
      }
    },
    
    setupFocusTrap() {
      const modal = this.$refs.modalContent
      if (!modal) return
      
      this.focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    },
    
    focusModal() {
      const modal = this.$refs.modalContent
      const closeButton = this.$refs.closeButton
      
      if (closeButton) {
        closeButton.focus()
      } else if (this.focusableElements.length > 0) {
        this.focusableElements[0].focus()
      } else if (modal) {
        modal.focus()
      }
    },
    
    handleTabKey(event) {
      if (this.focusableElements.length === 0) return
      
      const firstElement = this.focusableElements[0]
      const lastElement = this.focusableElements[this.focusableElements.length - 1]
      
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }
  }
}
</script>
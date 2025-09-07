<template>
  <Teleport to="body">
    <Transition
      name="modal"
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 overflow-y-auto"
        @click="handleOverlayClick"
      >
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        
        <!-- Modal Container -->
        <div class="relative min-h-screen flex items-center justify-center p-4">
          <Transition
            name="modal-content"
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="isOpen"
              :class="modalClasses"
              @click.stop
            >
              <!-- Header -->
              <div v-if="$slots.header || title" class="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <slot name="header">
                    <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
                  </slot>
                </div>
                
                <button
                  v-if="closable"
                  @click="close"
                  class="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150"
                >
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <!-- Body -->
              <div :class="bodyClasses">
                <slot></slot>
              </div>
              
              <!-- Footer -->
              <div v-if="$slots.footer" class="flex items-center justify-end px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
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
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value)
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeOnOverlay: {
      type: Boolean,
      default: true
    },
    padding: {
      type: String,
      default: 'default',
      validator: (value) => ['none', 'sm', 'default', 'lg'].includes(value)
    }
  },
  emits: ['close', 'update:isOpen'],
  computed: {
    modalClasses() {
      const base = [
        'relative',
        'bg-white',
        'rounded-lg',
        'shadow-xl',
        'transform',
        'transition-all',
        'w-full'
      ]
      
      const sizeClasses = {
        sm: ['max-w-sm'],
        md: ['max-w-md'],
        lg: ['max-w-lg'],
        xl: ['max-w-xl'],
        full: ['max-w-full', 'm-4']
      }
      
      return [
        ...base,
        ...sizeClasses[this.size]
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
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  },
  methods: {
    close() {
      this.$emit('close')
      this.$emit('update:isOpen', false)
    },
    
    handleOverlayClick() {
      if (this.closeOnOverlay) {
        this.close()
      }
    },
    
    handleEscape(event) {
      if (event.key === 'Escape' && this.isOpen && this.closable) {
        this.close()
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleEscape)
  },
  
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEscape)
  }
}
</script>
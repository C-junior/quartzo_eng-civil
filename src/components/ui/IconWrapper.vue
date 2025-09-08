<template>
  <div :class="iconClasses" :aria-label="ariaLabel" :role="role">
    <component
      v-if="iconComponent"
      :is="iconComponent"
      :size="iconSize"
      :stroke-width="strokeWidth"
      :class="iconColorClasses"
      :aria-hidden="decorative"
    />
    <span v-else-if="fallbackIcon" :class="iconColorClasses">
      {{ fallbackIcon }}
    </span>
    <div v-else :class="iconColorClasses">
      <!-- Loading placeholder -->
      <div class="animate-pulse bg-current opacity-20 rounded" :style="{ width: iconSize + 'px', height: iconSize + 'px' }"></div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'IconWrapper',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'primary', 'secondary', 'muted', 'accent', 'white'].includes(value)
    },
    strokeWidth: {
      type: [String, Number],
      default: 2
    },
    ariaLabel: {
      type: String,
      default: null
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fallback: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      iconComponent: null,
      isLoading: false,
      loadError: false
    }
  },
  computed: {
    iconClasses() {
      const base = ['inline-flex', 'items-center', 'justify-center']
      const sizeClasses = {
        xs: ['w-3', 'h-3'],
        sm: ['w-4', 'h-4'],
        md: ['w-5', 'h-5'],
        lg: ['w-6', 'h-6'],
        xl: ['w-8', 'h-8'],
        '2xl': ['w-12', 'h-12']
      }
      
      return [...base, ...sizeClasses[this.size]]
    },
    
    iconColorClasses() {
      const variantClasses = {
        default: ['text-current'],
        primary: ['text-wine-900'],
        secondary: ['text-primary-500'],
        muted: ['text-gray-600'],
        accent: ['text-wine-600'],
        white: ['text-white']
      }
      
      return variantClasses[this.variant]
    },
    
    iconSize() {
      const sizes = {
        xs: 12,
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
        '2xl': 48
      }
      
      return sizes[this.size]
    },
    
    role() {
      return this.decorative ? 'img' : null
    },
    
    fallbackIcon() {
      if (this.loadError && this.fallback) {
        return this.fallback
      }
      return null
    }
  },
  async mounted() {
    await this.loadIconComponent()
  },
  watch: {
    name: {
      handler: 'loadIconComponent',
      immediate: false
    }
  },
  methods: {
    async loadIconComponent() {
      if (!this.name) return
      
      this.isLoading = true
      this.loadError = false
      
      try {
        const iconComponent = await this.getIconComponent(this.name)
        this.iconComponent = iconComponent
      } catch (error) {
        console.warn(`Failed to load icon: ${this.name}`, error)
        this.loadError = true
        this.iconComponent = null
      } finally {
        this.isLoading = false
      }
    },
    
    async getIconComponent(iconName) {
      // Dynamic icon imports with mapping
      const iconMap = {
        // Contact & Communication
        'message-circle': () => import('lucide-vue-next').then(m => m.MessageCircle),
        'phone': () => import('lucide-vue-next').then(m => m.Phone),
        'mail': () => import('lucide-vue-next').then(m => m.Mail),
        'send': () => import('lucide-vue-next').then(m => m.Send),
        
        // Achievement & Quality
        'award': () => import('lucide-vue-next').then(m => m.Award),
        'check-circle': () => import('lucide-vue-next').then(m => m.CheckCircle),
        'alert-circle': () => import('lucide-vue-next').then(m => m.AlertCircle),
        'target': () => import('lucide-vue-next').then(m => m.Target),
        'eye': () => import('lucide-vue-next').then(m => m.Eye),
        'gem': () => import('lucide-vue-next').then(m => m.Gem),
        
        // Professional & Safety
        'shield': () => import('lucide-vue-next').then(m => m.Shield),
        'clipboard-list': () => import('lucide-vue-next').then(m => m.ClipboardList),
        'lock': () => import('lucide-vue-next').then(m => m.Lock),
        'user': () => import('lucide-vue-next').then(m => m.User),
        'zap': () => import('lucide-vue-next').then(m => m.Zap),
        
        // Projects & Construction
        'building': () => import('lucide-vue-next').then(m => m.Building),
        'home': () => import('lucide-vue-next').then(m => m.Home),
        'building-2': () => import('lucide-vue-next').then(m => m.Building2),
        'factory': () => import('lucide-vue-next').then(m => m.Factory),
        'bridge': () => import('lucide-vue-next').then(m => m.Bridge),
        
        // Location & Misc
        'map-pin': () => import('lucide-vue-next').then(m => m.MapPin),
        'map': () => import('lucide-vue-next').then(m => m.Map),
        'leaf': () => import('lucide-vue-next').then(m => m.Leaf),
        'camera': () => import('lucide-vue-next').then(m => m.Camera),
        'briefcase': () => import('lucide-vue-next').then(m => m.Briefcase),
        'star': () => import('lucide-vue-next').then(m => m.Star),
        'rocket': () => import('lucide-vue-next').then(m => m.Rocket),
        'chart-bar': () => import('lucide-vue-next').then(m => m.BarChart),
        'help-circle': () => import('lucide-vue-next').then(m => m.HelpCircle)
      }
      
      const loader = iconMap[iconName]
      if (!loader) {
        throw new Error(`Icon "${iconName}" not found in icon map`)
      }
      
      const IconComponent = await loader()
      return defineAsyncComponent(() => Promise.resolve(IconComponent))
    }
  }
}
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style>
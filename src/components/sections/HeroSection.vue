<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Hero Banner Image with Overlay -->
    <div class="absolute inset-0">
      <!-- Background Image positioned to the right -->
      <div class="absolute inset-0 bg-cover bg-right bg-no-repeat" 
           :style="heroBannerStyle"></div>
      <!-- Red Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-wine-900/95 via-wine-800/10 to-wine-700/2"></div>
    </div>
    
    <!-- Modern Gradient Background (as fallback) -->
    <div class="absolute inset-0 wine-gradient opacity-80"></div>
    
    <!-- Geometric Background Elements -->
    <div class="absolute inset-0 wine-geometric-bg"></div>
    
    <!-- Floating Geometric Shapes -->
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-wine-500/20 to-primary-500/20 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary-500/20 to-wine-600/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    
    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="space-y-8 animate-slide-in-left">
          <!-- Modern Startup Badge -->
          <div class="hero-badge border border-white ">
            <span class="text-transparent bg-gradient-to-r from-wine-500 to-primary-500 bg-clip-text font-semibold ">
              Soluções de Engenharia de Nova Geração
            </span>
          </div>
          
          <!-- Modern Headlines -->
          <div class="space-y-6">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight">
              <span class="text-white block animate-slide-up">Engenharia</span>
              <span class="text-transparent bg-gradient-to-r from-primary-500 via-wine-600 to-wine-900 bg-clip-text block animate-slide-up" style="animation-delay: 0.2s;">
                do Futuro
              </span>
              <span class="text-white/90 block animate-slide-up" style="animation-delay: 0.4s;">Hoje</span>
            </h1>
            
            <p class="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl animate-fade-in" style="animation-delay: 0.6s;">
              Onde a inovação encontra a infraestrutura. Combinando excelência em engenharia com agilidade startup para soluções modernas e sustentáveis.
            </p>
          </div>
          
          <!-- Modern Features Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in" style="animation-delay: 0.8s;">
            <div v-for="(feature, index) in modernFeatures" :key="feature" 
                 class="flex items-center space-x-3 group"
                 :style="{ animationDelay: `${1 + index * 0.1}s` }">
              <div class="w-6 h-6 bg-gradient-to-r from-wine-600 to-primary-500 text-white rounded-full flex items-center justify-center text-sm micro-interaction">
                ✓
              </div>
              <span class="text-white/90 font-medium group-hover:text-white transition-colors">{{ feature }}</span>
            </div>
          </div>
          
          <!-- Modern CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 animate-fade-in" style="animation-delay: 1.2s;">
            <BaseButton
              variant="primary"
              size="lg"
              @click="scrollToSection('contact')"
              class="group bg-white text-gray-900 hover:bg-white/90 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-startup"
            >
              <span>Começar Agora</span>
              <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </BaseButton>
            
            <BaseButton
              variant="outline"
              size="lg"
              @click="scrollToSection('projects')"
              class="group border-2 border-white/30 bg-white border-white text-wine-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Ver Projetos
            </BaseButton>
          </div>
          
          <!-- Modern Stats Bar -->
          <div class="startup-stats p-6 animate-fade-in" style="animation-delay: 1.4s;">
            <div class="grid grid-cols-3 gap-8">
              <div v-for="(stat, index) in startupStats" :key="stat.label" 
                   class="text-center group cursor-pointer"
                   :style="{ animationDelay: `${1.6 + index * 0.1}s` }">
                <div class="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-wine-600 to-primary-500 bg-clip-text group-hover:scale-110 transition-transform">
                  {{ stat.value }}
                </div>
                <div class="text-sm text-gray-700 mt-1 font-medium">{{ stat.label }}</div>
                <div class="text-xl mt-1 group-hover:animate-bounce">{{ stat.icon }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Modern Visual Content -->
        <div class="relative animate-slide-in-right">
          <!-- Main Visual Container -->
          <div class="relative">
            <!-- Central Hero Graphic -->
            <div class="aspect-w-4 aspect-h-5 relative">

            </div>
            
            <!-- Floating Achievement Cards -->
            <div class="absolute -top-6 -right-6 floating-card p-6 max-w-64 hidden lg:block animate-float">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-wine-600 to-primary-500 text-white rounded-xl flex items-center justify-center text-xl">
                  <IconWrapper 
                    name="zap" 
                    size="lg" 
                    variant="white"
                    :aria-label="'Suporte 24/7'"
                  />
                </div>
                <div>
                  <div class="font-bold text-gray-900">Suporte 24/7</div>
                  <div class="text-sm text-gray-600">Sempre Disponível</div>
                </div>
              </div>
            </div>
            
            <div class="absolute -bottom-6 -left-6 floating-card p-6 max-w-64 hidden lg:block animate-float" style="animation-delay: 1s;">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-wine-800 text-white rounded-xl flex items-center justify-center text-xl">
                  <IconWrapper 
                    name="target" 
                    size="lg" 
                    variant="white"
                    :aria-label="'Taxa de Sucesso'"
                  />
                </div>
                <div>
                  <div class="font-bold text-gray-900">Taxa de Sucesso 98%</div>
                  <div class="text-sm text-gray-600">Resultados Comprovados</div>
                </div>
              </div>
            </div>
            
            <!-- Additional Floating Elements -->
            <div class="absolute top-1/4 -left-8 floating-card p-4 hidden xl:block animate-float" style="animation-delay: 2s;">
              <div class="text-center">
                <IconWrapper 
                  name="award" 
                  size="lg" 
                  variant="muted"
                  :aria-label="'Premiado'"
                />
                <div class="text-xs font-medium text-gray-700 mt-1">Premiado</div>
              </div>
            </div>
            
            <div class="absolute bottom-1/4 -right-8 floating-card p-4 hidden xl:block animate-float" style="animation-delay: 3s;">
              <div class="text-center">
                <IconWrapper 
                  name="leaf" 
                  size="lg" 
                  variant="muted"
                  :aria-label="'Sustentável'"
                />
                <div class="text-xs font-medium text-gray-700 mt-1">Sustentável</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modern Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
      <button
        @click="scrollToSection('services')"
        class="group w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Scroll to services"
      >
        <svg class="w-5 h-5 text-white group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import IconWrapper from '@/components/ui/IconWrapper.vue'
import heroBannerImage from '@/assets/images/hero-banner.jpg'

export default {
  name: 'HeroSection',
  components: {
    BaseButton,
    IconWrapper
  },
  data() {
    return {
      isVisible: false,
      animationComplete: false,
      statsVisible: false,
      modernFeatures: [
        'Design Assistido por IA',
        'Colaboração Digital', 
        'Monitoramento em Tempo Real',
        'Soluções Sustentáveis'
      ],
      startupStats: [
        { value: '50+', label: 'Projetos Entregues', icon: 'rocket' },
        { value: '98%', label: 'Satisfação do Cliente', icon: 'star' },
        { value: '24/7', label: 'Suporte Disponível', icon: 'message-circle' }
      ]
    }
  },
  computed: {
    heroBannerStyle() {
      return {
        backgroundImage: `url(${heroBannerImage})`
      }
    }
  },
  mounted() {
    this.setupIntersectionObserver()
    this.setupStatsAnimation()
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 80
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    },
    
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
      
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.isVisible) {
            this.isVisible = true
            this.triggerAnimations()
          }
        })
      }, options)
      
      this.observer.observe(this.$el)
    },
    
    setupStatsAnimation() {
      // Intersection observer for stats section
      const statsElement = this.$el.querySelector('.startup-stats')
      if (statsElement) {
        const statsObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !this.statsVisible) {
              this.statsVisible = true
              this.animateStats()
            }
          })
        }, { threshold: 0.5 })
        
        statsObserver.observe(statsElement)
      }
    },
    
    triggerAnimations() {
      // Add staggered animation classes
      const elements = this.$el.querySelectorAll('[data-animate]')
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-fade-in')
        }, index * 100)
      })
    },
    
    animateStats() {
      // Animate stat counters
      const statElements = this.$el.querySelectorAll('.startup-stats .text-3xl')
      statElements.forEach((element, index) => {
        const finalValue = this.startupStats[index].value
        const isNumeric = !isNaN(parseInt(finalValue))
        
        if (isNumeric) {
          this.animateCounter(element, parseInt(finalValue), finalValue.includes('%'))
        }
      })
    },
    
    animateCounter(element, target, isPercentage = false) {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        
        const displayValue = Math.floor(current) + (isPercentage ? '%' : '+')
        element.textContent = displayValue
      }, duration / steps)
    }
  }
}
</script>

<style scoped>
/* Ensure animations run smoothly */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Photo Container and Circular Photo Styles */
.photo-container {
  @apply text-center space-y-6 p-8;
}

.photo-frame {
  @apply relative inline-block;
}

.photo-frame::before {
  content: '';
  @apply absolute -inset-2 bg-gradient-to-r from-accent-violet via-accent-emerald to-wine-500 rounded-full animate-pulse;
  z-index: -1;
}

.photo-image {
  @apply w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover;
  @apply border-4 border-white/20 shadow-startup;
  @apply transition-all duration-500 hover:scale-105 animate-float;
  filter: brightness(1.1) contrast(1.1);
}

.photo-decoration {
  @apply relative z-10;
}

/* Custom gradient animation for background */
.startup-gradient {
  background-size: 200% 200%;
}

/* Wine-themed gradient background */
.wine-gradient {
  background: linear-gradient(135deg, #7B1E26 0%, #C62828 50%, #8d2f37 100%);
  background-size: 200% 200%;
  animation: gradientShift 8s ease-in-out infinite;
}

/* Wine-themed geometric background */
.wine-geometric-bg {
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(123, 30, 38, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(198, 40, 40, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(141, 47, 55, 0.05) 0%, transparent 50%);
}

/* Hero Banner Background */
.hero-banner-bg {
  background-image: url('@/assets/images/hero-banner.jpg');
}

/* Enhanced micro-interactions */
.micro-interaction:hover {
  transform: scale(1.1);
}

.micro-interaction:active {
  transform: scale(0.95);
}

/* Floating card hover effects */
.floating-card:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Stats animation enhancement */
.startup-stats:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

/* Button enhancements for better interaction */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\:translate-y-1 {
  transform: translateY(0.25rem);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:animate-bounce {
  animation: bounce 1s infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .floating-card {
    display: none;
  }
  
  .geometric-bg {
    opacity: 0.5;
  }
}
</style>
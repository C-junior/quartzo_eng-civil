<template>
  <header :class="headerClasses">
    <div class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-wine-900 to-primary-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">Q</span>
            </div>
            <div class="hidden sm:block">
              <h1 class="text-2xl font-bold">
                <span class="company-name">Quartzo</span>
                <span class="text-gray-900 ml-1">Engenharia</span>
              </h1>
            </div>
          </router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <a
            v-for="item in navigationItems"
            :key="item.name"
            :href="item.href"
            class="text-gray-700 hover:text-wine-900 font-medium transition-colors duration-200"
            @click="handleNavClick"
          >
            {{ item.name }}
          </a>
        </nav>
        
        <!-- CTA Button & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <BaseButton
            variant="primary"
            size="md"
            class="hidden sm:inline-flex"
            @click="scrollToSection('contact')"
          >
            Orçamento Grátis
          </BaseButton>
          
          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-md text-gray-700 hover:text-wine-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-wine-500 focus:ring-inset"
            aria-label="Toggle mobile menu"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50"
      >
        <div class="px-4 py-6 space-y-4">
          <a
            v-for="item in navigationItems"
            :key="item.name"
            :href="item.href"
            class="block text-gray-700 hover:text-wine-900 font-medium py-2 transition-colors duration-200"
            @click="handleMobileNavClick"
          >
            {{ item.name }}
          </a>
          
          <BaseButton
            variant="primary"
            size="md"
            full-width
            class="mt-4"
            @click="handleMobileNavClick('#contact')"
          >
            Orçamento Grátis
          </BaseButton>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script>
import { useMainStore } from '@/stores/main'
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'HeaderSection',
  components: {
    BaseButton
  },
  props: {
    isFixed: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      navigationItems: [
        { name: 'Início', href: '#hero' },
        { name: 'Serviços', href: '#services' },
        { name: 'Sobre', href: '#about' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Contato', href: '#contact' }
      ]
    }
  },
  computed: {
    headerClasses() {
      const base = [
        'bg-white',
        'shadow-md',
        'transition-all',
        'duration-300',
        'z-40'
      ]
      
      const positionClasses = this.isFixed ? ['fixed', 'top-0', 'left-0', 'right-0'] : ['relative']
      
      return [...base, ...positionClasses]
    },
    
    isMobileMenuOpen() {
      return useMainStore().isMobileMenuOpen
    }
  },
  methods: {
    toggleMobileMenu() {
      useMainStore().toggleMobileMenu()
    },
    
    closeMobileMenu() {
      useMainStore().closeMobileMenu()
    },
    
    handleNavClick(event) {
      // Handle smooth scrolling for anchor links
      this.handleSmoothScroll(event)
    },
    
    handleMobileNavClick(href) {
      this.closeMobileMenu()
      if (href) {
        this.scrollToSection(href.replace('#', ''))
      }
    },
    
    handleSmoothScroll(event) {
      const href = event.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        event.preventDefault()
        this.scrollToSection(href.replace('#', ''))
      }
    },
    
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = this.isFixed ? 80 : 0
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }
  },
  
  mounted() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (this.isMobileMenuOpen && !this.$el.contains(event.target)) {
        this.closeMobileMenu()
      }
    })
    
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        this.closeMobileMenu()
      }
    })
  }
}
</script>
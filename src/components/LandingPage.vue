<template>
  <div id="landing-page" class="min-h-screen">
    <!-- Header -->
    <HeaderSection :is-fixed="true" />
    
    <!-- Main Content -->
    <main class="pt-20">
      <!-- Hero Section -->
      <HeroSection />
      
      <!-- Services Section -->
      <ServicesSection />
      
      <!-- About Section -->
      <AboutSection />
      
      <!-- Projects Section -->
      <ProjectsSection />
      
      <!-- Contact Section -->
      <ContactSection />
    </main>
    
    <!-- Footer -->
    <FooterSection />
    
    <!-- Scroll to Top Button -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <button
        v-if="showScrollToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 w-12 h-12 bg-wine-900 text-white rounded-full shadow-lg hover:bg-wine-800 focus:outline-none focus:ring-2 focus:ring-wine-700 focus:ring-offset-2 transition-all duration-200 z-30"
        aria-label="Scroll to top"
      >
        <svg class="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </Transition>
    
    <!-- Loading Overlay -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isLoading"
        class="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div class="text-center space-y-4">
          <div class="w-16 h-16 border-4 border-wine-200 border-t-wine-900 rounded-full animate-spin mx-auto"></div>
          <p class="text-wine-900 font-medium">Processando...</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { useMainStore } from '@/stores/main'
import HeaderSection from '@/components/layout/HeaderSection.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

export default {
  name: 'LandingPage',
  components: {
    HeaderSection,
    FooterSection,
    HeroSection,
    ServicesSection,
    AboutSection,
    ProjectsSection,
    ContactSection
  },
  data() {
    return {
      showScrollToTop: false,
      scrollPosition: 0
    }
  },
  computed: {
    store() {
      return useMainStore()
    },
    
    isLoading() {
      return this.store.isLoading
    }
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY
      this.showScrollToTop = this.scrollPosition > 300
      
      // Close mobile menu on scroll
      if (this.store.isMobileMenuOpen && this.scrollPosition > 100) {
        this.store.closeMobileMenu()
      }
    },
    
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    
    // Add smooth scrolling behavior for all internal links
    handleInternalLinks() {
      document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href^="#"]')
        if (link) {
          event.preventDefault()
          const targetId = link.getAttribute('href').substring(1)
          const targetElement = document.getElementById(targetId)
          
          if (targetElement) {
            const headerHeight = 80
            const elementPosition = targetElement.offsetTop - headerHeight
            
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          }
        }
      })
    },
    
    // Optimize images loading
    lazyLoadImages() {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.removeAttribute('data-src')
            observer.unobserve(img)
          }
        })
      })
      
      images.forEach(img => imageObserver.observe(img))
    },
    
    // Handle keyboard navigation
    handleKeyboardNavigation() {
      document.addEventListener('keydown', (event) => {
        // ESC key to close mobile menu
        if (event.key === 'Escape' && this.store.isMobileMenuOpen) {
          this.store.closeMobileMenu()
        }
        
        // Arrow keys for section navigation
        if (event.altKey) {
          const sections = ['hero', 'services', 'about', 'projects', 'contact']
          let currentIndex = -1
          
          // Find current section based on scroll position
          sections.forEach((sectionId, index) => {
            const element = document.getElementById(sectionId)
            if (element && window.scrollY >= element.offsetTop - 100) {
              currentIndex = index
            }
          })
          
          if (event.key === 'ArrowDown' && currentIndex < sections.length - 1) {
            event.preventDefault()
            this.scrollToSection(sections[currentIndex + 1])
          } else if (event.key === 'ArrowUp' && currentIndex > 0) {
            event.preventDefault()
            this.scrollToSection(sections[currentIndex - 1])
          }
        }
      })
    },
    
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
    
    // SEO and performance optimizations
    optimizeForSEO() {
      // Add structured data for business
      const businessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Quartzo Engenharia",
        "description": "Empresa especializada em projetos estruturais, consultoria técnica e gerenciamento de obras",
        "url": window.location.origin,
        "telephone": "+55-11-99999-9999",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua da Engenharia, 123",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "postalCode": "01000-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-23.5505",
          "longitude": "-46.6333"
        },
        "openingHours": [
          "Mo-Fr 08:00-18:00",
          "Sa 08:00-12:00"
        ],
        "priceRange": "$$",
        "image": `${window.location.origin}/images/quartzo-logo.png`
      }
      
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(businessData)
      document.head.appendChild(script)
    },
    
    // Analytics tracking (placeholder)
    initializeAnalytics() {
      // Google Analytics, Facebook Pixel, etc. would be initialized here
      console.log('Analytics initialized')
    }
  },
  
  mounted() {
    // Set up event listeners
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    
    // Initialize features
    this.handleInternalLinks()
    this.lazyLoadImages()
    this.handleKeyboardNavigation()
    this.optimizeForSEO()
    this.initializeAnalytics()
    
    // Add smooth scrolling to existing page if hash is present
    if (window.location.hash) {
      this.$nextTick(() => {
        const targetId = window.location.hash.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          setTimeout(() => {
            const headerHeight = 80
            const elementPosition = targetElement.offsetTop - headerHeight
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          }, 100)
        }
      })
    }
  },
  
  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('scroll', this.handleScroll)
  },
  
  // Meta tags for SEO
  head() {
    return {
      title: 'Quartzo Engenharia - Projetos Estruturais e Consultoria Técnica',
      meta: [
        {
          name: 'description',
          content: 'Empresa especializada em projetos estruturais, consultoria técnica e gerenciamento de obras. Mais de 10 anos de experiência em engenharia civil. Solicite seu orçamento gratuito.'
        },
        {
          name: 'keywords',
          content: 'engenharia civil, projeto estrutural, consultoria técnica, São Paulo, CREA, construção civil, estruturas, concreto armado'
        },
        {
          name: 'author',
          content: 'Quartzo Engenharia'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          property: 'og:title',
          content: 'Quartzo Engenharia - Projetos Estruturais de Qualidade'
        },
        {
          property: 'og:description',
          content: 'Especialistas em projetos estruturais, consultoria técnica e soluções completas para engenharia civil. Orçamento gratuito.'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: window?.location?.href || ''
        },
        {
          property: 'og:image',
          content: '/images/quartzo-og-image.jpg'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Quartzo Engenharia - Projetos Estruturais'
        },
        {
          name: 'twitter:description',
          content: 'Especialistas em engenharia civil com mais de 10 anos de experiência. Projetos estruturais seguros e funcionais.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #7B1E26;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #5d1419;
}

/* Smooth scrolling for browsers that don't support scroll-behavior */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
</style>
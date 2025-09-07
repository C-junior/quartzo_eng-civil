<template>
  <section id="hero" class="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-pattern"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 bg-wine-100 text-wine-900 rounded-full text-sm font-medium">
            <span class="w-2 h-2 bg-wine-500 rounded-full mr-2"></span>
            Engenharia Civil de Excelência
          </div>
          
          <!-- Main Title -->
          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              <span class="text-wine-900">Projetos</span>
              <span class="text-gradient block">Estruturais</span>
              <span class="text-gray-900">de Qualidade</span>
            </h1>
            
            <p class="text-xl text-gray-700 leading-relaxed max-w-2xl">
              Soluções completas em engenharia civil com mais de 10 anos de experiência. 
              Projetos estruturais, consultoria técnica e acompanhamento de obras com 
              total segurança e qualidade.
            </p>
          </div>
          
          <!-- Features List -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="feature in features" :key="feature" class="flex items-center space-x-3">
              <div class="w-5 h-5 bg-accent-green text-white rounded-full flex items-center justify-center text-xs">
                ✓
              </div>
              <span class="text-gray-700 font-medium">{{ feature }}</span>
            </div>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <BaseButton
              variant="primary"
              size="lg"
              @click="scrollToSection('contact')"
              class="group"
            >
              <span>Solicitar Orçamento</span>
              <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </BaseButton>
            
            <BaseButton
              variant="outline"
              size="lg"
              @click="scrollToSection('projects')"
            >
              Ver Projetos
            </BaseButton>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-wine-900">{{ stat.value }}</div>
              <div class="text-sm text-gray-600 mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        
        <!-- Visual Content -->
        <div class="relative">
          <!-- Main Image Container -->
          <div class="relative">
            <div class="aspect-w-4 aspect-h-5 bg-gradient-to-br from-wine-900 to-primary-500 rounded-2xl overflow-hidden shadow-2xl">
              <!-- Placeholder for engineering image -->
              <div class="flex items-center justify-center text-white">
                <div class="text-center space-y-4">
                  <div class="text-6xl">🏗️</div>
                  <div class="text-lg font-medium">Engenharia de Excelência</div>
                  <div class="text-sm opacity-75">Projetos Estruturais Seguros</div>
                </div>
              </div>
            </div>
            
            <!-- Floating Cards -->
            <div class="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 max-w-48 hidden lg:block">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-accent-green text-white rounded-lg flex items-center justify-center">
                  📋
                </div>
                <div>
                  <div class="font-semibold text-sm">CREA Ativo</div>
                  <div class="text-xs text-gray-600">Certificação Profissional</div>
                </div>
              </div>
            </div>
            
            <div class="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 max-w-48 hidden lg:block">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-primary-500 text-white rounded-lg flex items-center justify-center">
                  ⭐
                </div>
                <div>
                  <div class="font-semibold text-sm">ISO 9001</div>
                  <div class="text-xs text-gray-600">Qualidade Certificada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <button
        @click="scrollToSection('services')"
        class="w-8 h-8 border-2 border-wine-900 rounded-full flex items-center justify-center hover:bg-wine-900 hover:text-white transition-colors duration-200"
        aria-label="Scroll to services"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'HeroSection',
  components: {
    BaseButton
  },
  data() {
    return {
      features: [
        'Projetos Aprovados',
        'Equipe Especializada',
        'Prazo Garantido',
        'Suporte Completo'
      ],
      stats: [
        { value: '500+', label: 'Projetos Entregues' },
        { value: '10+', label: 'Anos de Experiência' },
        { value: '100%', label: 'Projetos Aprovados' }
      ]
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
    }
  }
}
</script>

<style scoped>
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Crect width='11' height='11' x='0' y='0'/%3E%3Crect width='11' height='11' x='20' y='20'/%3E%3Crect width='11' height='11' x='40' y='40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
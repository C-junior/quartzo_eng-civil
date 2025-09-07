<template>
  <section id="projects" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-wine-100 text-wine-900 rounded-full text-sm font-medium mb-6">
          <span class="w-2 h-2 bg-wine-500 rounded-full mr-2"></span>
          Nossos Projetos
        </div>
        
        <h2 class="heading-lg mb-6">
          Portfólio de 
          <span class="text-gradient">Projetos Realizados</span>
        </h2>
        
        <p class="body-lg text-gray-600">
          Conheça alguns dos projetos que desenvolvemos ao longo de nossa trajetória. 
          Cada um representa nosso compromisso com a excelência técnica e a inovação em engenharia civil.
        </p>
      </div>
      
      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="filterByCategory(category)"
          :class="[
            'px-6 py-2 rounded-full font-medium transition-all duration-200',
            selectedCategory === category
              ? 'bg-wine-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          ]"
        >
          {{ category }}
        </button>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @view-details="handleViewDetails"
        />
      </div>
      
      <!-- Load More Button -->
      <div v-if="hasMoreProjects" class="text-center">
        <BaseButton
          variant="outline"
          size="lg"
          @click="loadMoreProjects"
          :loading="isLoading"
        >
          {{ isLoading ? 'Carregando...' : 'Ver Mais Projetos' }}
        </BaseButton>
      </div>
      
      <!-- Call to Action -->
      <div class="bg-gradient-to-br from-wine-900 to-primary-500 rounded-2xl p-8 lg:p-12 text-center text-white mt-16">
        <div class="max-w-2xl mx-auto space-y-6">
          <h3 class="text-3xl font-bold">Pronto para Começar Seu Projeto?</h3>
          <p class="text-xl opacity-90">
            Entre em contato conosco e descubra como podemos transformar suas ideias em realidade 
            com projetos seguros, funcionais e inovadores.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <BaseButton
              variant="secondary"
              size="lg"
              @click="scrollToContact"
              class="bg-white text-wine-900 hover:bg-gray-100"
            >
              Solicitar Orçamento
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-white text-white hover:bg-white hover:text-wine-900"
              @click="openWhatsApp"
            >
              WhatsApp
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Project Details Modal -->
    <BaseModal
      v-model:is-open="isModalOpen"
      :title="selectedProject?.title"
      size="lg"
    >
      <div v-if="selectedProject" class="space-y-6">
        <!-- Project Image -->
        <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-wine-900 to-primary-500 rounded-lg overflow-hidden">
          <div class="flex items-center justify-center text-white">
            <div class="text-center space-y-4">
              <div class="text-6xl">{{ getCategoryIcon(selectedProject.category) }}</div>
              <div class="text-lg font-medium">{{ selectedProject.category }}</div>
            </div>
          </div>
        </div>
        
        <!-- Project Details -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h4 class="font-semibold text-gray-900 mb-2">Descrição do Projeto</h4>
            <p class="text-gray-600">{{ selectedProject.description }}</p>
            
            <div v-if="selectedProject.details" class="space-y-2">
              <h5 class="font-medium text-gray-900">Detalhes Técnicos:</h5>
              <ul class="space-y-1 text-sm text-gray-600">
                <li v-for="detail in selectedProject.details" :key="detail">• {{ detail }}</li>
              </ul>
            </div>
          </div>
          
          <div class="space-y-4">
            <h4 class="font-semibold text-gray-900 mb-2">Informações</h4>
            <div class="space-y-3">
              <div class="flex items-center text-sm">
                <span class="w-5 h-5 mr-3 text-wine-900">📍</span>
                <span class="font-medium mr-2">Local:</span>
                <span class="text-gray-600">{{ selectedProject.location }}</span>
              </div>
              
              <div v-if="selectedProject.area" class="flex items-center text-sm">
                <span class="w-5 h-5 mr-3 text-wine-900">📐</span>
                <span class="font-medium mr-2">Área:</span>
                <span class="text-gray-600">{{ selectedProject.area }}</span>
              </div>
              
              <div v-if="selectedProject.year" class="flex items-center text-sm">
                <span class="w-5 h-5 mr-3 text-wine-900">📅</span>
                <span class="font-medium mr-2">Ano:</span>
                <span class="text-gray-600">{{ selectedProject.year }}</span>
              </div>
              
              <div v-if="selectedProject.status" class="flex items-center text-sm">
                <span class="w-5 h-5 mr-3 text-wine-900">✅</span>
                <span class="font-medium mr-2">Status:</span>
                <span class="text-gray-600">{{ selectedProject.status }}</span>
              </div>
            </div>
            
            <div v-if="selectedProject.tags && selectedProject.tags.length" class="pt-4">
              <h5 class="font-medium text-gray-900 mb-2">Tags:</h5>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in selectedProject.tags"
                  :key="tag"
                  class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <template #footer>
        <div class="flex justify-end space-x-3">
          <BaseButton variant="ghost" @click="isModalOpen = false">
            Fechar
          </BaseButton>
          <BaseButton variant="primary" @click="contactAboutProject">
            Projeto Similar
          </BaseButton>
        </div>
      </template>
    </BaseModal>
  </section>
</template>

<script>
import { useMainStore } from '@/stores/main'
import ProjectCard from './ProjectCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'

export default {
  name: 'ProjectsSection',
  components: {
    ProjectCard,
    BaseButton,
    BaseModal
  },
  data() {
    return {
      selectedCategory: 'Todos',
      displayedProjects: 6,
      isLoading: false,
      isModalOpen: false,
      selectedProject: null,
      
      // Extended projects data
      allProjects: [
        {
          id: 'residencial-alto-padrao',
          title: 'Casa Residencial Alto Padrão',
          description: 'Projeto estrutural completo para residência de alto padrão com piscina, área gourmet e subsolo',
          category: 'Residencial',
          location: 'Alphaville, SP',
          area: '450m²',
          year: '2023',
          status: 'Concluído',
          tags: ['Concreto Armado', 'Piscina', 'Subsolo', 'Área Gourmet'],
          details: [
            'Estrutura em concreto armado',
            'Fundação em sapatas isoladas',
            'Laje nervurada para grandes vãos',
            'Sistema de impermeabilização para piscina'
          ]
        },
        {
          id: 'edificio-comercial',
          title: 'Edifício Comercial 15 Andares',
          description: 'Estrutura em concreto armado para edifício comercial no centro empresarial da cidade',
          category: 'Comercial',
          location: 'Centro, São Paulo - SP',
          area: '8.500m²',
          year: '2023',
          status: 'Em Execução',
          tags: ['Concreto Armado', 'Grandes Vãos', 'Comercial', 'Centro'],
          details: [
            'Estrutura em concreto armado com 15 pavimentos',
            'Fundação em estacas pré-moldadas',
            'Lajes protendidas para redução de espessura',
            'Sistema de contraventamento para estabilidade'
          ]
        },
        {
          id: 'galpao-industrial',
          title: 'Galpão Industrial 5.000m²',
          description: 'Estrutura metálica para galpão industrial com ponte rolante e sistema de ventilação',
          category: 'Industrial',
          location: 'Campinas, SP',
          area: '5.000m²',
          year: '2022',
          status: 'Concluído',
          tags: ['Estrutura Metálica', 'Ponte Rolante', 'Industrial', 'Grande Vão'],
          details: [
            'Estrutura metálica em aço galvanizado',
            'Fundação em blocos de concreto armado',
            'Cobertura em telhas termoacústicas',
            'Sistema para ponte rolante de 10 toneladas'
          ]
        },
        {
          id: 'ponte-rodoviaria',
          title: 'Ponte Rodoviária 150m',
          description: 'Projeto estrutural de ponte rodoviária sobre rio com 150 metros de extensão',
          category: 'Infraestrutura',
          location: 'Interior de SP',
          area: '150m extensão',
          year: '2022',
          status: 'Concluído',
          tags: ['Concreto Protendido', 'Ponte', 'Infraestrutura', 'Vigas Pré-moldadas'],
          details: [
            'Estrutura em concreto protendido',
            'Vigas pré-moldadas protendidas',
            'Aparelhos de apoio em elastômero',
            'Sistema de drenagem integrado'
          ]
        },
        {
          id: 'escola-tecnica',
          title: 'Escola Técnica 3 Pavimentos',
          description: 'Complexo educacional com laboratórios, salas de aula e área administrativa',
          category: 'Educacional',
          location: 'Santos, SP',
          area: '2.800m²',
          year: '2023',
          status: 'Em Projeto',
          tags: ['Educacional', 'Laboratórios', 'Concreto Armado', 'Sustentável'],
          details: [
            'Estrutura em concreto armado convencional',
            'Fundação em sapatas corridas',
            'Lajes maciças para cargas de laboratório',
            'Sistema de coleta de água da chuva'
          ]
        },
        {
          id: 'hospital-regional',
          title: 'Hospital Regional 200 Leitos',
          description: 'Centro médico com tecnologia avançada, UTIs e centro cirúrgico',
          category: 'Hospitalar',
          location: 'Ribeirão Preto, SP',
          area: '12.000m²',
          year: '2024',
          status: 'Em Projeto',
          tags: ['Hospitalar', 'UTI', 'Centro Cirúrgico', 'Tecnologia Médica'],
          details: [
            'Estrutura com requisitos sísmicos especiais',
            'Fundação profunda em estacas escavadas',
            'Lajes com sistemas de isolamento de vibrações',
            'Infraestrutura para equipamentos médicos pesados'
          ]
        }
      ]
    }
  },
  computed: {
    store() {
      return useMainStore()
    },
    
    categories() {
      const uniqueCategories = [...new Set(this.allProjects.map(p => p.category))]
      return ['Todos', ...uniqueCategories]
    },
    
    filteredProjects() {
      let projects = this.selectedCategory === 'Todos' 
        ? this.allProjects 
        : this.allProjects.filter(p => p.category === this.selectedCategory)
      
      return projects.slice(0, this.displayedProjects)
    },
    
    hasMoreProjects() {
      const totalFiltered = this.selectedCategory === 'Todos' 
        ? this.allProjects.length 
        : this.allProjects.filter(p => p.category === this.selectedCategory).length
      
      return this.displayedProjects < totalFiltered
    }
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category
      this.displayedProjects = 6 // Reset pagination
    },
    
    async loadMoreProjects() {
      this.isLoading = true
      
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      this.displayedProjects += 6
      this.isLoading = false
    },
    
    handleViewDetails(project) {
      this.selectedProject = project
      this.isModalOpen = true
    },
    
    getCategoryIcon(category) {
      const icons = {
        'Residencial': '🏠',
        'Comercial': '🏢',
        'Industrial': '🏭',
        'Infraestrutura': '🌉',
        'Educacional': '🏫',
        'Hospitalar': '🏥',
        'Esportivo': '🏟️'
      }
      return icons[category] || '🏗️'
    },
    
    contactAboutProject() {
      this.isModalOpen = false
      this.scrollToContact()
      
      // Pre-fill contact form with project interest
      const message = `Olá! Tenho interesse em um projeto similar ao "${this.selectedProject.title}". Gostaria de mais informações.`
      this.store.updateContactForm('message', message)
    },
    
    scrollToContact() {
      const element = document.getElementById('contact')
      if (element) {
        const headerHeight = 80
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    },
    
    openWhatsApp() {
      const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os projetos de engenharia.')
      window.open(`https://wa.me/5511999999999?text=${message}`, '_blank')
    }
  }
}
</script>
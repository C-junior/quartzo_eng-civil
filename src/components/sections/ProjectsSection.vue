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
              class="bg-white text-white hover:bg-gray-100"
            >
              Solicitar Orçamento
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="group border-2 border-white/30 bg-white border-white text-wine-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
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
      
      // Extended projects data for Pará region
      allProjects: [
        {
          id: 'residencial-canaa',
          title: 'Residencial Familiar - Canaã',
          description: 'Projeto residencial unifamiliar com estrutura otimizada para o clima amazônico e fundações adaptadas ao solo regional',
          category: 'Residencial',
          location: 'Canaã dos Carajás, PA',
          area: '180m²',
          year: '2024',
          status: 'Concluído',
          tags: ['Concreto Armado', 'Clima Amazônico', 'Solo Regional', 'Sustentável'],
          details: [
            'Estrutura em concreto armado adaptada ao clima tropical',
            'Fundação em radier devido às características do solo',
            'Sistema de drenagem reforçado para chuvas intensas',
            'Cobertura com isolamento térmico para conforto climático'
          ]
        },
        {
          id: 'galpao-mineracao',
          title: 'Galpão de Apoio à Mineração',
          description: 'Estrutura industrial para apoio às operações de mineração com capacidade para equipamentos pesados e estocagem',
          category: 'Industrial',
          location: 'Parauapebas, PA',
          area: '3.500m²',
          year: '2024',
          status: 'Em Execução',
          tags: ['Estrutura Metálica', 'Mineração', 'Equipamentos Pesados', 'Grande Vão'],
          details: [
            'Estrutura metálica galvanizada resistente à corrosão',
            'Fundação em blocos para cargas de equipamentos pesados',
            'Pé-direito de 12 metros para movimentação de cargas',
            'Sistema de ventilação natural adequado ao clima'
          ]
        },
        {
          id: 'escola-municipal',
          title: 'Escola Municipal CRAS',
          description: 'Complexo educacional municipal com salas de aula, laboratório de informática e área administrativa',
          category: 'Educacional',
          location: 'Canaã dos Carajás, PA',
          area: '1.200m²',
          year: '2024',
          status: 'Concluído',
          tags: ['Obra Pública', 'Educacional', 'Concreto Armado', 'Acessibilidade'],
          details: [
            'Estrutura em concreto armado convencional',
            'Fundação em sapatas isoladas',
            'Cobertura em telhas termoacústicas',
            'Rampas de acessibilidade e banheiros adaptados'
          ]
        },
        {
          id: 'ponte-rural',
          title: 'Ponte Rural - Acesso Mineração',
          description: 'Ponte de concreto para acesso rural e apoio às operações de transporte da região de mineração',
          category: 'Infraestrutura',
          location: 'Região de Carajás, PA',
          area: '45m extensão',
          year: '2023',
          status: 'Concluído',
          tags: ['Concreto Armado', 'Ponte', 'Transporte Rural', 'Mineração'],
          details: [
            'Estrutura em concreto armado moldado in loco',
            'Fundação em estacas pré-moldadas',
            'Guarda-corpo em concreto armado',
            'Drenagem integrada para período chuvoso'
          ]
        },
        {
          id: 'centro-comercial',
          title: 'Centro Comercial Carajás',
          description: 'Complexo comercial com lojas, restaurantes e área de serviços para atender o crescimento urbano',
          category: 'Comercial',
          location: 'Canaã dos Carajás, PA',
          area: '2.800m²',
          year: '2024',
          status: 'Em Projeto',
          tags: ['Comercial', 'Concreto Armado', 'Multi-uso', 'Urbano'],
          details: [
            'Estrutura em concreto armado de 2 pavimentos',
            'Fundação em sapatas isoladas',
            'Lajes maciças para flexibilidade de layout',
            'Sistema de combate a incêndio e segurança'
          ]
        },
        {
          id: 'habitacao-social',
          title: 'Conjunto Habitacional Social',
          description: 'Projeto habitacional social para atender famílias de baixa renda com parceria da Secretaria Municipal',
          category: 'Habitacional',
          location: 'Canaã dos Carajás, PA',
          area: '4.500m² (50 casas)',
          year: '2024',
          status: 'Em Projeto',
          tags: ['Habitação Social', 'Parceria Municipal', 'Sustentável', 'Baixo Custo'],
          details: [
            'Casas de 45m² com estrutura em alvenaria estrutural',
            'Fundação em radier econômico',
            'Cobertura em telhas cerâmicas regionais',
            'Sistema de aproveitamento de água de chuva'
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
        'Habitacional': '🏘️',
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
      const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os projetos de engenharia na região de Canaã dos Carajás.')
      window.open(`https://wa.me/5594999999999?text=${message}`, '_blank')
    }
  }
}
</script>
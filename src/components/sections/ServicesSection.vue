<template>
  <section id="services" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
          <span class="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
          Nossos Serviços
        </div>
        
        <h2 class="heading-lg mb-6">
          Soluções Completas em 
          <span class="text-gradient">Engenharia Civil</span>
        </h2>
        
        <p class="body-lg text-gray-600">
          Oferecemos uma gama completa de serviços especializados em engenharia civil, 
          desde projetos estruturais até consultoria técnica, sempre com foco na qualidade, 
          segurança e inovação.
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
          @request-quote="handleQuoteRequest"
        />
      </div>
      
      <!-- Additional Information -->
      <div class="bg-gray-50 rounded-2xl p-8 lg:p-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div class="space-y-6">
            <h3 class="heading-md">
              Por que escolher a 
              <span class="company-name">Quartzo Engenharia</span>?
            </h3>
            
            <div class="space-y-4">
              <div v-for="advantage in advantages" :key="advantage.title" class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-wine-900 text-white rounded-lg flex items-center justify-center text-sm mt-1">
                  <IconWrapper 
                    :name="advantage.icon" 
                    size="sm" 
                    variant="white"
                    :aria-label="advantage.title"
                  />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ advantage.title }}</h4>
                  <p class="text-gray-600 text-sm">{{ advantage.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <!-- Process Steps -->
            <h4 class="heading-sm">Nosso Processo</h4>
            
            <div class="space-y-4">
              <div v-for="(step, index) in processSteps" :key="index" class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {{ index + 1 }}
                </div>
                <span class="font-medium text-gray-900">{{ step }}</span>
              </div>
            </div>
            
            <div class="pt-6">
              <BaseButton
                variant="primary"
                size="lg"
                @click="scrollToContact"
                class="group"
              >
                <span>Começar Projeto</span>
                <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Certifications -->
      <div class="mt-16 text-center">
        <h4 class="heading-sm mb-8">Certificações e Qualificações</h4>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="cert in certifications" :key="cert.name" class="flex flex-col items-center space-y-3">
            <div class="w-16 h-16 bg-gradient-to-br from-wine-900 to-primary-500 rounded-xl flex items-center justify-center text-white text-2xl">
              <IconWrapper 
                :name="cert.icon" 
                size="lg" 
                variant="white"
                :aria-label="cert.name"
              />
            </div>
            <div class="text-center">
              <div class="font-semibold text-gray-900 text-sm">{{ cert.name }}</div>
              <div class="text-xs text-gray-600">{{ cert.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useMainStore } from '@/stores/main'
import ServiceCard from './ServiceCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconWrapper from '@/components/ui/IconWrapper.vue'

export default {
  name: 'ServicesSection',
  components: {
    ServiceCard,
    BaseButton,
    IconWrapper
  },
  data() {
    return {
      advantages: [
        {
          icon: 'target',
          title: 'Expertise Técnica',
          description: 'Mais de 10 anos de experiência em projetos estruturais complexos'
        },
        {
          icon: 'zap',
          title: 'Agilidade na Entrega',
          description: 'Cumprimento rigoroso de prazos sem comprometer a qualidade'
        },
        {
          icon: 'shield',
          title: 'Segurança Garantida',
          description: 'Todos os projetos seguem as normas técnicas e de segurança'
        },
        {
          icon: 'gem',
          title: 'Qualidade Premium',
          description: 'Padrão de excelência em cada detalhe do projeto'
        }
      ],
      
      processSteps: [
        'Análise inicial e briefing',
        'Desenvolvimento do projeto',
        'Revisão e aprovação',
        'Entrega e acompanhamento'
      ],
      
      certifications: [
        {
          icon: 'clipboard-list',
          name: 'CREA-PA',
          description: 'Registro Ativo'
        },
        {
          icon: 'award',
          name: 'ISO 9001',
          description: 'Qualidade Certificada'
        },
        {
          icon: 'check-circle',
          name: 'CAU',
          description: 'Habilitação Técnica'
        },
        {
          icon: 'shield',
          name: 'Segurança',
          description: 'NR-18 Certificada'
        }
      ]
    }
  },
  computed: {
    services() {
      return useMainStore().services
    }
  },
  methods: {
    handleQuoteRequest(service) {
      // Store the selected service for pre-filling the contact form
      this.scrollToContact()
      
      // Optional: Pre-fill the service field in the contact form
      const store = useMainStore()
      store.updateContactForm('service', service.title)
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
    }
  }
}
</script>
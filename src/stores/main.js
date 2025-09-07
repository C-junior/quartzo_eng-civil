import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    // UI State
    isMobileMenuOpen: false,
    isLoading: false,
    
    // Contact Form
    contactForm: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    },
    
    // Form submission state
    isSubmitting: false,
    submitted: false,
    
    // Content Data
    services: [
      {
        id: 'projeto-estrutural',
        title: 'Projeto Estrutural',
        description: 'Cálculo e dimensionamento de estruturas em concreto armado, aço e madeira',
        icon: '🏗️',
        features: ['Fundações', 'Pilares e Vigas', 'Lajes', 'Escadas']
      },
      {
        id: 'consultoria-tecnica',
        title: 'Consultoria Técnica',
        description: 'Assessoria especializada para obras e projetos de engenharia',
        icon: '📋',
        features: ['Análise de Projetos', 'Laudos Técnicos', 'Perícias', 'Vistorias']
      },
      {
        id: 'gerenciamento-obras',
        title: 'Gerenciamento de Obras',
        description: 'Acompanhamento completo desde o planejamento até a entrega',
        icon: '⚙️',
        features: ['Cronograma', 'Orçamento', 'Fiscalização', 'Controle de Qualidade']
      },
      {
        id: 'regularizacao',
        title: 'Regularização',
        description: 'Documentação e aprovação de projetos junto aos órgãos competentes',
        icon: '📄',
        features: ['Alvará de Construção', 'Habite-se', 'AVCB', 'Documentação Municipal']
      }
    ],
    
    projects: [
      {
        id: 'projeto-residencial-1',
        title: 'Casa Residencial Alto Padrão',
        description: 'Projeto estrutural completo para residência de 400m² com piscina',
        image: '/images/projeto-residencial-1.jpg',
        category: 'Residencial',
        location: 'São Paulo, SP'
      },
      {
        id: 'projeto-comercial-1',
        title: 'Edifício Comercial 15 Andares',
        description: 'Estrutura em concreto armado para edifício comercial no centro da cidade',
        image: '/images/projeto-comercial-1.jpg',
        category: 'Comercial',
        location: 'Rio de Janeiro, RJ'
      },
      {
        id: 'projeto-industrial-1',
        title: 'Galpão Industrial 5.000m²',
        description: 'Estrutura metálica para galpão industrial com ponte rolante',
        image: '/images/projeto-industrial-1.jpg',
        category: 'Industrial',
        location: 'Campinas, SP'
      }
    ],
    
    testimonials: [
      {
        id: 'testimonial-1',
        name: 'Maria Silva',
        position: 'Arquiteta',
        company: 'Silva Arquitetura',
        content: 'Excelente trabalho! Muito profissionalismo e qualidade técnica.',
        rating: 5
      },
      {
        id: 'testimonial-2',
        name: 'João Santos',
        position: 'Proprietário',
        company: '',
        content: 'Projeto entregue no prazo e dentro do orçamento. Recomendo!',
        rating: 5
      }
    ]
  }),
  
  getters: {
    getServiceById: (state) => (id) => {
      return state.services.find(service => service.id === id)
    },
    
    getProjectById: (state) => (id) => {
      return state.projects.find(project => project.id === id)
    },
    
    getProjectsByCategory: (state) => (category) => {
      return state.projects.filter(project => project.category === category)
    }
  },
  
  actions: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    
    updateContactForm(field, value) {
      this.contactForm[field] = value
    },
    
    async submitContactForm(formData) {
      this.isSubmitting = true
      this.isLoading = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // In a real application, you would send the data to your backend
        console.log('Form submitted:', formData)
        
        this.submitted = true
        this.resetContactForm()
        
        return { success: true, message: 'Mensagem enviada com sucesso!' }
      } catch (error) {
        console.error('Error submitting form:', error)
        return { success: false, message: 'Erro ao enviar mensagem. Tente novamente.' }
      } finally {
        this.isSubmitting = false
        this.isLoading = false
      }
    },
    
    resetContactForm() {
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      }
    },
    
    resetSubmissionState() {
      this.submitted = false
      this.isSubmitting = false
    }
  }
})
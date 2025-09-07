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
      message: '',
      location: 'Canaã dos Carajás, PA'
    },
    
    // Form submission state
    isSubmitting: false,
    submitted: false,
    
    // Content Data
    services: [
      {
        id: 'projeto-estrutural',
        title: 'Projeto Estrutural',
        description: 'Dimensionamento e cálculo de estruturas para obras residenciais e comerciais',
        icon: '🏗️',
        features: ['Fundações', 'Pilares e Vigas', 'Lajes', 'Estruturas de Concreto']
      },
      {
        id: 'consultoria-tecnica',
        title: 'Consultoria Técnica',
        description: 'Assessoria especializada em projetos de engenharia civil e orçamentos',
        icon: '📊',
        features: ['Análise de Projetos', 'Elaboração de Orçamentos', 'Vistorias Técnicas', 'Pareceres']
      },
      {
        id: 'obras-publicas',
        title: 'Obras Públicas',
        description: 'Experiência em projetos municipais e habitação social',
        icon: '🏢',
        features: ['Secretaria de Habitação', 'Escolas', 'CRAS', 'Projetos Municipais']
      },
      {
        id: 'projetos-comerciais',
        title: 'Projetos Comerciais',
        description: 'Galpões comerciais e projetos residenciais personalizados',
        icon: '🏢',
        features: ['Galpões Comerciais', 'Residenciais', 'Reforma e Ampliação', 'Licenciamento']
      }
    ],
    
    projects: [
      {
        id: 'projeto-habitacao-1',
        title: 'Projeto Secretaria Municipal de Habitação',
        description: 'Desenvolvimento de projetos habitacionais para programas municipais',
        image: '/images/projeto-habitacao-1.jpg',
        category: 'Público',
        location: 'Canaã dos Carajás, PA'
      },
      {
        id: 'projeto-comercial-1',
        title: 'Galpão Comercial 800m²',
        description: 'Estrutura para galpão comercial com área de escritórios integrada',
        image: '/images/projeto-comercial-1.jpg',
        category: 'Comercial',
        location: 'Canaã dos Carajás, PA'
      },
      {
        id: 'projeto-residencial-1',
        title: 'Residência Unifamiliar 180m²',
        description: 'Projeto estrutural completo para residência com 3 quartos e área de lazer',
        image: '/images/projeto-residencial-1.jpg',
        category: 'Residencial',
        location: 'Canaã dos Carajás, PA'
      }
    ],
    
    testimonials: [
      {
        id: 'testimonial-1',
        name: 'Secretaria Municipal',
        position: 'Gestor Público',
        company: 'Prefeitura de Canaã dos Carajás',
        content: 'Excelente qualidade técnica nos projetos habitacionais. Muito profissionalismo e pontualidade.',
        rating: 5
      },
      {
        id: 'testimonial-2',
        name: 'Carlos Mendes',
        position: 'Proprietário',
        company: 'Galpão Comercial',
        content: 'Projeto entregue no prazo e dentro do orçamento. Ótimo atendimento e suporte técnico!',
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
        message: '',
        location: 'Canaã dos Carajás, PA'
      }
    },
    
    resetSubmissionState() {
      this.submitted = false
      this.isSubmitting = false
    }
  }
})
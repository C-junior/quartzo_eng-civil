class ApiService {
  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
  }
  
  async submitContact(data) {
    try {
      const response = await fetch(`${this.baseURL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
          timestamp: new Date().toISOString()
        })
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error submitting contact form:', error)
      throw new Error('Erro ao enviar formulário. Tente novamente.')
    }
  }
  
  async getProjects() {
    try {
      const response = await fetch(`${this.baseURL}/projects`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error fetching projects:', error)
      throw new Error('Erro ao carregar projetos.')
    }
  }
  
  async getServices() {
    try {
      const response = await fetch(`${this.baseURL}/services`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error fetching services:', error)
      throw new Error('Erro ao carregar serviços.')
    }
  }
  
  async getTestimonials() {
    try {
      const response = await fetch(`${this.baseURL}/testimonials`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error fetching testimonials:', error)
      throw new Error('Erro ao carregar depoimentos.')
    }
  }
  
  // Method to simulate sending email
  async sendEmail(emailData) {
    try {
      // In a real application, this would integrate with an email service
      // like SendGrid, Mailgun, or AWS SES
      console.log('Sending email:', emailData)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      return {
        success: true,
        message: 'Email enviado com sucesso!'
      }
    } catch (error) {
      console.error('Error sending email:', error)
      throw new Error('Erro ao enviar email.')
    }
  }
}

export default new ApiService()
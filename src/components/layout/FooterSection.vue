<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 rounded-lg overflow-hidden">
              <img 
                src="@/assets/images/quartzo-logo.png" 
                alt="Quartzo Engenharia Logo" 
                class="w-full h-full object-contain bg-white p-1 rounded-lg"
              />
            </div>
            <div>
              <h3 class="text-2xl font-bold">
                <span class="text-primary-500">Quartzo</span>
                <span class="text-white ml-1">Engenharia</span>
              </h3>
            </div>
          </div>
          
          <p class="text-gray-300 mb-6 max-w-md">
            Especialistas em projetos estruturais, consultoria técnica e soluções completas para engenharia civil em Canaã dos Carajás, Pará. 
            Qualidade, segurança e inovação em cada projeto.
          </p>
          
          <!-- Social Media -->
          <div class="flex space-x-4">
            <a
              v-for="social in socialMedia"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-wine-900 transition-colors duration-200"
            >
              <IconWrapper 
                :name="social.icon" 
                size="sm" 
                variant="white"
                :aria-label="social.name"
              />
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Links Rápidos</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-gray-300 hover:text-white transition-colors duration-200"
                @click="handleLinkClick"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Serviços</h4>
          <ul class="space-y-3">
            <li v-for="service in footerServices" :key="service">
              <span class="text-gray-300">{{ service }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Contact Info Section -->
      <div class="border-t border-gray-800 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Address -->
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 text-primary-500 mt-1">
              <IconWrapper 
                name="map-pin" 
                size="sm" 
                variant="secondary"
                :aria-label="'Endereço'"
              />
            </div>
            <div>
              <h5 class="font-semibold mb-1">Endereço</h5>
              <p class="text-gray-300 text-sm">
                Avenida Eliezer Batista, 456<br>
                Centro, Canaã dos Carajás - PA<br>
                CEP: 68537-000
              </p>
            </div>
          </div>
          
          <!-- Phone -->
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 text-primary-500 mt-1">
              <IconWrapper 
                name="phone" 
                size="sm" 
                variant="secondary"
                :aria-label="'Telefone'"
              />
            </div>
            <div>
              <h5 class="font-semibold mb-1">Telefone</h5>
              <p class="text-gray-300 text-sm">
                <a href="tel:+559499999999" class="hover:text-white transition-colors">
                  (94) 99999-9999
                </a>
              </p>
              <p class="text-gray-300 text-sm">
                <a href="tel:+559433334444" class="hover:text-white transition-colors">
                  (94) 3333-4444
                </a>
              </p>
            </div>
          </div>
          
          <!-- Email -->
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 text-primary-500 mt-1">
              <IconWrapper 
                name="mail" 
                size="sm" 
                variant="secondary"
                :aria-label="'E-mail'"
              />
            </div>
            <div>
              <h5 class="font-semibold mb-1">E-mail</h5>
              <p class="text-gray-300 text-sm">
                <a href="mailto:contato@quartzoeng.com.br" class="hover:text-white transition-colors">
                  contato@quartzoeng.com.br
                </a>
              </p>
              <p class="text-gray-300 text-sm">
                <a href="mailto:projetos@quartzoeng.com.br" class="hover:text-white transition-colors">
                  projetos@quartzoeng.com.br
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Professional Info -->
      <div class="border-t border-gray-800 py-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div class="text-sm text-gray-300">
            <p><strong>CREA-PA:</strong> Registro em processo</p>
            <p><strong>Engenheiro Responsável:</strong> Erick Antonio, Eng. Civil</p>
          </div>
          
          <div class="flex space-x-6 text-sm text-gray-300">
            <span class="flex items-center space-x-1">
              <IconWrapper 
                name="award" 
                size="xs" 
                variant="secondary"
                :aria-label="'Certificação'"
              />
              <span>Certificação ISO 9001</span>
            </span>
            <span class="flex items-center space-x-1">
              <IconWrapper 
                name="check-circle" 
                size="xs" 
                variant="secondary"
                :aria-label="'Registro'"
              />
              <span>Registro CREA</span>
            </span>
            <span class="flex items-center space-x-1">
              <IconWrapper 
                name="clipboard-list" 
                size="xs" 
                variant="secondary"
                :aria-label="'CAU'"
              />
              <span>CAU Ativo</span>
            </span>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-gray-800 py-6 text-center">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} Quartzo Engenharia. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import IconWrapper from '@/components/ui/IconWrapper.vue'

export default {
  name: 'FooterSection',
  components: {
    IconWrapper
  },
  data() {
    return {
      socialMedia: [
        { name: 'LinkedIn', icon: 'briefcase', href: '#' },
        { name: 'Instagram', icon: 'camera', href: '#' },
        { name: 'Facebook', icon: 'briefcase', href: '#' },
        { name: 'WhatsApp', icon: 'message-circle', href: 'https://wa.me/5594999999999' }
      ],
      quickLinks: [
        { name: 'Início', href: '#hero' },
        { name: 'Sobre Nós', href: '#about' },
        { name: 'Serviços', href: '#services' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Contato', href: '#contact' }
      ],
      footerServices: [
        'Projeto Estrutural',
        'Consultoria Técnica',
        'Gerenciamento de Obras',
        'Regularização'
      ]
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    handleLinkClick(event) {
      const href = event.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        event.preventDefault()
        this.scrollToSection(href.replace('#', ''))
      }
    },
    
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 80 // Account for fixed header
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
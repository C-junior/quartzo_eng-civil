<template>
  <section id="contact" class="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
          <span class="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
          Entre em Contato
        </div>
        
        <h2 class="heading-lg mb-6">
          Vamos Realizar Seu 
          <span class="text-gradient">Projeto Juntos</span>
        </h2>
        
        <p class="body-lg text-gray-600">
          Nossa equipe está pronta para transformar suas ideias em realidade. 
          Entre em contato e receba um orçamento personalizado para seu projeto.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Contact Information -->
        <div class="lg:col-span-1 space-y-8">
          <!-- Contact Cards -->
          <div class="space-y-6">
            <!-- Phone -->
            <BaseCard padding="lg" class="hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-wine-900 to-primary-500 rounded-xl flex items-center justify-center text-white text-xl">
                  <IconWrapper 
                    name="phone" 
                    size="lg" 
                    variant="white"
                    :aria-label="'Telefone'"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900 mb-2">Telefone</h3>
                  <div class="space-y-1">
                    <p class="text-gray-600">
                      <a href="tel:+559499999999" class="hover:text-wine-900 transition-colors">
                        (94) 99999-9999
                      </a>
                    </p>
                    <p class="text-gray-600">
                      <a href="tel:+559433334444" class="hover:text-wine-900 transition-colors">
                        (94) 3333-4444
                      </a>
                    </p>
                  </div>
                  <p class="text-sm text-gray-500 mt-2">Seg a Sex: 8h às 18h</p>
                </div>
              </div>
            </BaseCard>
            
            <!-- Email -->
            <BaseCard padding="lg" class="hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-wine-900 to-primary-500 rounded-xl flex items-center justify-center text-white text-xl">
                  <IconWrapper 
                    name="mail" 
                    size="lg" 
                    variant="white"
                    :aria-label="'E-mail'"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900 mb-2">E-mail</h3>
                  <div class="space-y-1">
                    <p class="text-gray-600">
                      <a href="mailto:contato@quartzoeng.com.br" class="hover:text-wine-900 transition-colors">
                        contato@quartzoeng.com.br
                      </a>
                    </p>
                    <p class="text-gray-600">
                      <a href="mailto:projetos@quartzoeng.com.br" class="hover:text-wine-900 transition-colors">
                        projetos@quartzoeng.com.br
                      </a>
                    </p>
                  </div>
                  <p class="text-sm text-gray-500 mt-2">Resposta em até 24h</p>
                </div>
              </div>
            </BaseCard>
            
            <!-- Address -->
            <BaseCard padding="lg" class="hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-wine-900 to-primary-500 rounded-xl flex items-center justify-center text-white text-xl">
                  <IconWrapper 
                    name="map-pin" 
                    size="lg" 
                    variant="white"
                    :aria-label="'Endereço'"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900 mb-2">Endereço</h3>
                  <div class="text-gray-600">
                    <p>Avenida Eliezer Batista, 456</p>
                    <p>Centro, Canaã dos Carajás - PA</p>
                    <p>CEP: 68537-000</p>
                  </div>
                  <p class="text-sm text-gray-500 mt-2">Atendimento presencial</p>
                </div>
              </div>
            </BaseCard>
            
            <!-- WhatsApp -->
            <BaseCard padding="lg" class="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-accent-green to-green-600 text-white">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-white text-xl">
                  <IconWrapper 
                    name="message-circle" 
                    size="lg" 
                    variant="white"
                    :aria-label="'WhatsApp'"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold mb-2">WhatsApp</h3>
                  <p class="opacity-90 mb-3">Atendimento rápido e direto</p>
                  <BaseButton
                    variant="secondary"
                    size="sm"
                    @click="openWhatsApp"
                    class="bg-white text-accent-green hover:bg-gray-100"
                  >
                    Chamar no WhatsApp
                  </BaseButton>
                </div>
              </div>
            </BaseCard>
          </div>
          
          <!-- Business Hours -->
          <BaseCard padding="lg">
            <h3 class="font-semibold text-gray-900 mb-4">Horário de Funcionamento</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Segunda a Sexta</span>
                <span class="font-medium text-wine-900">8h às 18h</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Sábado</span>
                <span class="font-medium text-wine-900">8h às 12h</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Domingo</span>
                <span class="text-gray-500">Fechado</span>
              </div>
            </div>
          </BaseCard>
        </div>
        
        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <BaseCard padding="lg" class="h-fit">
            <div class="mb-6">
              <h3 class="heading-sm mb-2">Solicitar Orçamento</h3>
              <p class="text-gray-600">
                Preencha o formulário abaixo e nossa equipe entrará em contato para 
                discutir seu projeto em detalhes.
              </p>
            </div>
            
            <ContactForm />
          </BaseCard>
        </div>
      </div>
      
      <!-- Map Section -->
      <div class="mt-16">
        <BaseCard padding="none" class="overflow-hidden">
          <div class="bg-gradient-to-br from-wine-900 to-primary-500 h-64 lg:h-80 flex items-center justify-center text-white">
            <div class="text-center space-y-4">
              <IconWrapper 
                name="map" 
                size="2xl" 
                variant="white"
                :aria-label="'Localização'"
              />
              <div class="text-xl font-medium">Localização</div>
              <div class="text-sm opacity-75">Avenida Eliezer Batista, 456</div>
              <div class="text-sm opacity-75">Centro, Canaã dos Carajás - Pará</div>
              <BaseButton
                variant="secondary"
                size="md"
                @click="openMaps"
                class="bg-white text-wine-900 hover:bg-gray-100"
              >
                Ver no Google Maps
              </BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
      
      <!-- FAQ Section -->
      <div class="mt-16">
        <div class="text-center mb-12">
          <h3 class="heading-md mb-4">Perguntas Frequentes</h3>
          <p class="body-md text-gray-600 max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre nossos serviços e processos.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BaseCard v-for="faq in faqs" :key="faq.question" padding="lg">
            <h4 class="font-semibold text-gray-900 mb-3">{{ faq.question }}</h4>
            <p class="text-gray-600 text-sm">{{ faq.answer }}</p>
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ContactForm from '@/components/forms/ContactForm.vue'
import IconWrapper from '@/components/ui/IconWrapper.vue'

export default {
  name: 'ContactSection',
  components: {
    BaseCard,
    BaseButton,
    ContactForm,
    IconWrapper
  },
  data() {
    return {
      faqs: [
        {
          question: 'Quanto tempo leva para desenvolver um projeto estrutural?',
          answer: 'O prazo varia conforme a complexidade do projeto. Projetos residenciais simples levam de 15 a 30 dias, enquanto projetos comerciais podem levar de 30 a 60 dias.'
        },
        {
          question: 'Vocês fazem acompanhamento da obra?',
          answer: 'Sim! Oferecemos serviços de acompanhamento e fiscalização de obras para garantir que o projeto seja executado conforme especificado.'
        },
        {
          question: 'O projeto inclui aprovação nos órgãos competentes?',
          answer: 'Oferecemos o serviço de aprovação como adicional. Cuidamos de toda a documentação necessária para aprovação na prefeitura e outros órgãos.'
        },
        {
          question: 'Atendem projetos em outras cidades da região?',
          answer: 'Sim! Atendemos projetos em todo o estado do Pará e regiões próximas. Para outras localidades, consulte nossa disponibilidade.'
        },
        {
          question: 'Qual é a forma de pagamento?',
          answer: 'Trabalhamos com parcelamento do projeto conforme cronograma de desenvolvimento. Aceitamos PIX, transferência bancária e boleto.'
        },
        {
          question: 'Fornecem ART (Anotação de Responsabilidade Técnica)?',
          answer: 'Sim! Todos os nossos projetos incluem ART devidamente registrada no CREA, garantindo a responsabilidade técnica da obra.'
        }
      ]
    }
  },
  methods: {
    openWhatsApp() {
      const message = encodeURIComponent(
        'Olá! Vim através do site da Quartzo Engenharia e gostaria de mais informações sobre os serviços de engenharia civil.'
      )
      window.open(`https://wa.me/5594999999999?text=${message}`, '_blank')
    },
    
    openMaps() {
      const address = encodeURIComponent('Avenida Eliezer Batista, 456, Centro, Canaã dos Carajás, Pará')
      window.open(`https://www.google.com/maps/search/${address}`, '_blank')
    }
  }
}
</script>
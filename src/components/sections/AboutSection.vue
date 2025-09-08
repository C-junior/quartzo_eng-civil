<template>
  <section id="about" class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Main About Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Content -->
        <div class="space-y-8">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-wine-100 text-wine-900 rounded-full text-sm font-medium mb-6">
              <span class="w-2 h-2 bg-wine-500 rounded-full mr-2"></span>
              Sobre a Empresa
            </div>
            
            <h2 class="heading-lg mb-6">
              Tradição e Inovação em 
              <span class="text-gradient">Engenharia Civil</span>
            </h2>
            
            <div class="space-y-4 body-md text-gray-600">
              <p>
                A <strong class="company-name">Quartzo Engenharia</strong> foi fundada em 15 de janeiro de 2024 
                pelo engenheiro civil Erick Antonio em Canaã dos Carajás, Pará. Nossa empresa nasceu 
                da experiência acumulada em obras públicas, incluindo escolas, unidades do CRAS e outros 
                projetos municipais desenvolvidos ao longo da carreira profissional.
              </p>
              
              <p>
                Com formação em engenharia civil concluída em 2021 no estado do Tocantins, nosso fundador 
                trouxe para o Pará a expertise em construção, consultoria e elaboração de orçamentos, 
                estabelecendo a empresa como uma referência regional em soluções de engenharia civil 
                com foco na qualidade, segurança e plena satisfação dos clientes.
              </p>
              
              <p>
                Atualmente, desenvolvemos projetos para a Secretaria Municipal de Habitação, 
                galpões comerciais e projetos residenciais, sempre com o compromisso de entregar 
                soluções técnicas inovadoras que atendam às necessidades específicas de cada cliente 
                e às particularidades da região Norte do Brasil.
              </p>
            </div>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div v-for="stat in companyStats" :key="stat.label" class="text-center">
              <div class="text-3xl font-bold text-wine-900 mb-2">{{ stat.value }}</div>
              <div class="text-sm text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        
        <!-- Visual Content -->
        <div class="space-y-6">
          <!-- Main Image -->
          <div class="relative">
            <div class="aspect-w-4 aspect-h-3 bg-gradient-to-br from-wine-900 to-primary-500 rounded-2xl overflow-hidden">
              <div class="flex items-center justify-center text-white">
                <div class="text-center space-y-4">
                  <div class="text-6xl">👷‍♂️</div>
                  <div class="text-lg font-medium">Equipe Especializada</div>
                  <div class="text-sm opacity-75">Engenheiros Certificados</div>
                </div>
              </div>
            </div>
            
            <!-- Achievement Badge -->
            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-accent-green text-white rounded-lg flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <div class="font-bold text-wine-900">1+ Ano</div>
                  <div class="text-xs text-gray-600">em Canaã dos Carajás</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mission, Vision, Values -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <BaseCard v-for="pillar in companyPillars" :key="pillar.title" padding="lg" class="text-center">
          <div class="space-y-4">
            <div class="w-16 h-16 bg-gradient-to-br from-wine-900 to-primary-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto">
              <IconWrapper 
                :name="pillar.icon" 
                size="xl" 
                variant="white"
                :aria-label="pillar.title"
              />
            </div>
            <h3 class="heading-sm">{{ pillar.title }}</h3>
            <p class="body-md text-gray-600">{{ pillar.description }}</p>
          </div>
        </BaseCard>
      </div>
      
      <!-- Team Section -->
      <div class="text-center mb-16">
        <h3 class="heading-md mb-12">Nossa Equipe</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in teamMembers" :key="member.name" class="text-center">
            <div class="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden">
              <img 
                v-if="member.photo" 
                :src="member.photo" 
                :alt="member.name"
                class="w-full h-full object-cover"
              />
              <div 
                v-else 
                class="bg-gradient-to-br from-wine-900 to-primary-500 rounded-2xl w-full h-full flex items-center justify-center text-white text-4xl"
              >
                <IconWrapper 
                  :name="member.avatar" 
                  size="2xl" 
                  variant="white"
                  :aria-label="member.name"
                />
              </div>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">{{ member.name }}</h4>
            <p class="text-primary-600 font-medium text-sm mb-2">{{ member.role }}</p>
            <p class="text-gray-600 text-sm">{{ member.description }}</p>
          </div>
        </div>
      </div>
      
      <!-- Certifications & Awards -->
      <div class="bg-white rounded-2xl p-8 lg:p-12">
        <div class="text-center mb-12">
          <h3 class="heading-md mb-4">Certificações e Reconhecimentos</h3>
          <p class="body-md text-gray-600 max-w-2xl mx-auto">
            Nossa expertise é reconhecida pelos principais órgãos reguladores e 
            associações do setor de engenharia civil.
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="certification in certifications" :key="certification.name" class="text-center">
            <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
              <IconWrapper 
                :name="certification.icon" 
                size="xl" 
                variant="muted"
                :aria-label="certification.name"
              />
            </div>
            <h4 class="font-semibold text-gray-900 text-sm mb-1">{{ certification.name }}</h4>
            <p class="text-gray-600 text-xs">{{ certification.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import IconWrapper from '@/components/ui/IconWrapper.vue'

export default {
  name: 'AboutSection',
  components: {
    BaseCard,
    IconWrapper
  },
  data() {
    return {
      companyStats: [
        { value: '1+', label: 'Ano de Atuação' },
        { value: '15+', label: 'Projetos Entregues' },
        { value: '100%', label: 'Aprovação Técnica' }
      ],
      
      companyPillars: [
        {
          icon: 'target',
          title: 'Missão',
          description: 'Oferecer soluções em engenharia civil com excelência técnica, transparência e comprometimento, atuando na construção, consultoria e elaboração de orçamentos com foco na qualidade, segurança e plena satisfação dos clientes.'
        },
        {
          icon: 'eye',
          title: 'Visão',
          description: 'Ser referência regional em engenharia civil e consultoria técnica, reconhecida pela confiabilidade, inovação e impacto positivo nas obras que realizamos e nos projetos que orientamos.'
        },
        {
          icon: 'gem',
          title: 'Valores',
          description: 'Ética e transparência: atuamos com integridade em todas as etapas do processo. Comprometimento com o cliente: buscamos sempre superar expectativas com soluções personalizadas. Qualidade técnica: utilizamos as melhores práticas da engenharia, com precisão e responsabilidade. Inovação e melhoria contínua: estamos sempre em evolução, acompanhando novas tecnologias e normas. Sustentabilidade: valorizamos o uso racional de recursos e práticas conscientes nas obras. Colaboração e respeito: valorizamos a equipe, os parceiros e todos os envolvidos em cada projeto.'
        }
      ],
      
      teamMembers: [
        {
          name: 'Erick Antonio',
          role: 'Engenheiro Civil - Fundador',
          description: 'Especialista em obras públicas e residenciais, graduado em 2021 no Tocantins com experiência em projetos municipais',
          avatar: 'user',
          photo: '/src/assets/images/erick.png'
        }
      ],
      
      certifications: [
        {
          icon: 'clipboard-list',
          name: 'CREA-PA',
          description: 'Registro Ativo e Regularizado'
        },
        {
          icon: 'award',
          name: 'ISO 9001:2015',
          description: 'Sistema de Gestão da Qualidade'
        },
        {
          icon: 'check-circle',
          name: 'CAU',
          description: 'Conselho de Arquitetura e Urbanismo'
        },
        {
          icon: 'shield',
          name: 'ABNT',
          description: 'Normas Técnicas Brasileiras'
        },
        {
          icon: 'leaf',
          name: 'LEED',
          description: 'Construção Sustentável'
        },
        {
          icon: 'lock',
          name: 'NR-18',
          description: 'Segurança no Trabalho'
        },
        {
          icon: 'star',
          name: 'SINDUSCON',
          description: 'Sindicato da Construção Civil'
        },
        {
          icon: 'briefcase',
          name: 'CONFEA',
          description: 'Conselho Federal de Engenharia'
        }
      ]
    }
  }
}
</script>
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
                A <strong class="company-name">Quartzo Engenharia</strong> nasceu da paixão pela engenharia civil 
                e do compromisso com a excelência técnica. Fundada em 2013, nossa empresa se consolidou 
                como referência em projetos estruturais, consultoria técnica e soluções inovadoras 
                para o setor da construção civil.
              </p>
              
              <p>
                Com uma equipe multidisciplinar de engenheiros especializados, desenvolvemos projetos 
                que aliam segurança, funcionalidade e sustentabilidade. Nossa abordagem técnica 
                rigorosa e o atendimento personalizado garantem resultados que superam as expectativas 
                de nossos clientes.
              </p>
              
              <p>
                Acreditamos que cada projeto é único e merece atenção especial. Por isso, 
                trabalhamos em estreita colaboração com arquitetos, construtores e proprietários 
                para entregar soluções sob medida que atendam às necessidades específicas de cada empreendimento.
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
                  <div class="font-bold text-wine-900">10+ Anos</div>
                  <div class="text-xs text-gray-600">de Experiência</div>
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
              {{ pillar.icon }}
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
            <div class="bg-gradient-to-br from-wine-900 to-primary-500 rounded-2xl w-32 h-32 mx-auto mb-4 flex items-center justify-center text-white text-4xl">
              {{ member.avatar }}
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
              {{ certification.icon }}
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

export default {
  name: 'AboutSection',
  components: {
    BaseCard
  },
  data() {
    return {
      companyStats: [
        { value: '500+', label: 'Projetos Entregues' },
        { value: '50+', label: 'Clientes Ativos' },
        { value: '100%', label: 'Aprovação CREA' }
      ],
      
      companyPillars: [
        {
          icon: '🎯',
          title: 'Missão',
          description: 'Desenvolver projetos de engenharia civil com excelência técnica, inovação e responsabilidade, contribuindo para construções seguras e sustentáveis.'
        },
        {
          icon: '👁️',
          title: 'Visão',
          description: 'Ser reconhecida como a principal referência em projetos estruturais na região, conhecida pela qualidade, inovação e compromisso com nossos clientes.'
        },
        {
          icon: '💎',
          title: 'Valores',
          description: 'Ética profissional, qualidade técnica, inovação constante, responsabilidade social e compromisso com a segurança em todos os projetos.'
        }
      ],
      
      teamMembers: [
        {
          name: 'João Silva',
          role: 'Engenheiro Civil - CREA 123456',
          description: 'Especialista em estruturas de concreto armado com 15 anos de experiência',
          avatar: '👨‍💼'
        },
        {
          name: 'Maria Santos',
          role: 'Engenheira Estrutural - CREA 789012',
          description: 'Especialista em estruturas metálicas e projetos industriais',
          avatar: '👩‍💼'
        },
        {
          name: 'Carlos Oliveira',
          role: 'Engenheiro de Segurança - CREA 345678',
          description: 'Especialista em análise de riscos e segurança estrutural',
          avatar: '👨‍🔬'
        }
      ],
      
      certifications: [
        {
          icon: '📋',
          name: 'CREA-SP',
          description: 'Registro Ativo e Regularizado'
        },
        {
          icon: '🏆',
          name: 'ISO 9001:2015',
          description: 'Sistema de Gestão da Qualidade'
        },
        {
          icon: '✅',
          name: 'CAU',
          description: 'Conselho de Arquitetura e Urbanismo'
        },
        {
          icon: '🛡️',
          name: 'ABNT',
          description: 'Normas Técnicas Brasileiras'
        },
        {
          icon: '🌱',
          name: 'LEED',
          description: 'Construção Sustentável'
        },
        {
          icon: '🔒',
          name: 'NR-18',
          description: 'Segurança no Trabalho'
        },
        {
          icon: '⭐',
          name: 'SINDUSCON',
          description: 'Sindicato da Construção Civil'
        },
        {
          icon: '🎖️',
          name: 'CONFEA',
          description: 'Conselho Federal de Engenharia'
        }
      ]
    }
  }
}
</script>
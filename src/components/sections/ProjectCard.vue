<template>
  <BaseCard :hover="true" class="h-full overflow-hidden group">
    <!-- Project Image -->
    <div class="relative h-48 bg-gradient-to-br from-wine-900 to-primary-500 overflow-hidden">
      <!-- Placeholder for project image -->
      <div class="w-full h-full flex items-center justify-center text-white">
        <div class="text-center space-y-2">
          <IconWrapper 
            :name="getCategoryIcon(project.category)" 
            size="2xl" 
            variant="white"
            :aria-label="project.category"
          />
          <div class="text-sm opacity-75">{{ project.category }}</div>
        </div>
      </div>
      
      <!-- Overlay on hover -->
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
        <BaseButton
          variant="secondary"
          size="sm"
          class="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          @click="viewDetails"
        >
          Ver Detalhes
        </BaseButton>
      </div>
      
      <!-- Category Badge -->
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 bg-white bg-opacity-90 text-wine-900 text-xs font-semibold rounded-full">
          {{ project.category }}
        </span>
      </div>
    </div>
    
    <!-- Project Content -->
    <div class="p-6 space-y-4">
      <div>
        <h3 class="heading-sm mb-2">{{ project.title }}</h3>
        <p class="body-sm text-gray-600">{{ project.description }}</p>
      </div>
      
      <!-- Project Info -->
      <div class="space-y-2">
        <div class="flex items-center text-sm text-gray-500">
          <span class="w-4 h-4 mr-2">📍</span>
          {{ project.location }}
        </div>
        
        <div v-if="project.area" class="flex items-center text-sm text-gray-500">
          <span class="w-4 h-4 mr-2">📐</span>
          {{ project.area }}
        </div>
        
        <div v-if="project.year" class="flex items-center text-sm text-gray-500">
          <span class="w-4 h-4 mr-2">📅</span>
          {{ project.year }}
        </div>
      </div>
      
      <!-- Project Tags -->
      <div v-if="project.tags && project.tags.length" class="flex flex-wrap gap-2 pt-2">
        <span
          v-for="tag in project.tags.slice(0, 3)"
          :key="tag"
          class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
        >
          {{ tag }}
        </span>
        <span
          v-if="project.tags.length > 3"
          class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
        >
          +{{ project.tags.length - 3 }}
        </span>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconWrapper from '@/components/ui/IconWrapper.vue'

export default {
  name: 'ProjectCard',
  components: {
    BaseCard,
    BaseButton,
    IconWrapper
  },
  props: {
    project: {
      type: Object,
      required: true,
      validator: (project) => {
        return project.id && project.title && project.description && project.category
      }
    }
  },
  emits: ['view-details'],
  methods: {
    getCategoryIcon(category) {
      const icons = {
        'Residencial': 'home',
        'Comercial': 'building-2',
        'Industrial': 'factory',
        'Infraestrutura': 'bridge',
        'Educacional': 'building',
        'Hospitalar': 'building',
        'Esportivo': 'building'
      }
      return icons[category] || 'building'
    },
    
    viewDetails() {
      this.$emit('view-details', this.project)
    }
  }
}
</script>
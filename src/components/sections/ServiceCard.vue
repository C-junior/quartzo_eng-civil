<template>
  <BaseCard :hover="true" class="h-full">
    <template #header>
      <div class="flex items-center space-x-4">
        <div class="w-12 h-12 bg-gradient-to-br from-wine-900 to-primary-500 rounded-xl flex items-center justify-center text-white text-2xl">
          {{ service.icon }}
        </div>
        <h3 class="heading-sm">{{ service.title }}</h3>
      </div>
    </template>
    
    <div class="space-y-4">
      <p class="body-md text-gray-600">
        {{ service.description }}
      </p>
      
      <div class="space-y-2">
        <h4 class="font-semibold text-gray-900 mb-3">Inclui:</h4>
        <ul class="space-y-2">
          <li
            v-for="feature in service.features"
            :key="feature"
            class="flex items-center text-sm text-gray-700"
          >
            <div class="w-4 h-4 bg-accent-green text-white rounded-full flex items-center justify-center text-xs mr-3">
              ✓
            </div>
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
    
    <template #footer>
      <BaseButton
        variant="outline"
        size="sm"
        full-width
        @click="requestQuote"
      >
        Solicitar Orçamento
      </BaseButton>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'ServiceCard',
  components: {
    BaseCard,
    BaseButton
  },
  props: {
    service: {
      type: Object,
      required: true,
      validator: (service) => {
        return service.id && service.title && service.description && service.icon && Array.isArray(service.features)
      }
    }
  },
  emits: ['request-quote'],
  methods: {
    requestQuote() {
      this.$emit('request-quote', this.service)
    }
  }
}
</script>
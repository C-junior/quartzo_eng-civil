<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Success Message -->
    <div
      v-if="submitted && !hasErrors"
      class="bg-accent-green bg-opacity-10 border border-accent-green text-accent-green px-4 py-3 rounded-lg"
    >
      <div class="flex items-center">
        <IconWrapper 
          name="check-circle" 
          size="md" 
          variant="default"
          :aria-label="'Sucesso'"
          class="mr-3 text-green-600"
        />
        <div>
          <p class="font-medium">Mensagem enviada com sucesso!</p>
          <p class="text-sm opacity-75">Entraremos em contato em breve.</p>
        </div>
      </div>
    </div>
    
    <!-- Error Message -->
    <div
      v-if="hasErrors"
      class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
    >
      <div class="flex items-center">
        <IconWrapper 
          name="alert-circle" 
          size="md" 
          variant="default"
          :aria-label="'Erro'"
          class="mr-3 text-red-600"
        />
        <div>
          <p class="font-medium">Erro ao enviar mensagem</p>
          <p class="text-sm opacity-75">Verifique os dados e tente novamente.</p>
        </div>
      </div>
    </div>
    
    <!-- Form Fields -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Name -->
      <BaseInput
        v-model="form.name"
        label="Nome Completo"
        name="name"
        placeholder="Seu nome completo"
        required
        :error="errors.name"
      />
      
      <!-- Email -->
      <BaseInput
        v-model="form.email"
        label="E-mail"
        name="email"
        type="email"
        placeholder="seu@email.com"
        required
        :error="errors.email"
      />
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Phone -->
      <BaseInput
        v-model="form.phone"
        label="Telefone"
        name="phone"
        type="tel"
        placeholder="(11) 99999-9999"
        required
        :error="errors.phone"
      />
      
      <!-- Service -->
      <div class="form-group">
        <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
          Serviço de Interesse
          <span class="text-red-500 ml-1">*</span>
        </label>
        <select
          id="service"
          v-model="form.service"
          name="service"
          required
          class="block w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-wine-500 focus:border-wine-500 transition-colors duration-200"
          :class="{ 'border-red-300 focus:border-red-500 focus:ring-red-500': errors.service }"
        >
          <option value="">Selecione um serviço</option>
          <option v-for="service in services" :key="service.id" :value="service.title">
            {{ service.title }}
          </option>
          <option value="Outros">Outros</option>
        </select>
        <p v-if="errors.service" class="mt-2 text-sm text-red-600">{{ errors.service }}</p>
      </div>
    </div>
    
    <!-- Message -->
    <BaseInput
      v-model="form.message"
      label="Mensagem"
      name="message"
      type="textarea"
      placeholder="Descreva seu projeto ou dúvida em detalhes..."
      required
      :rows="5"
      :error="errors.message"
      hint="Quanto mais detalhes você fornecer, melhor poderemos atendê-lo."
    />
    
    <!-- Privacy Policy -->
    <div class="flex items-start space-x-3">
      <input
        id="privacy"
        v-model="form.privacy"
        type="checkbox"
        class="w-4 h-4 text-wine-900 bg-gray-100 border-gray-300 rounded focus:ring-wine-500 focus:ring-2 mt-1"
        required
      >
      <label for="privacy" class="text-sm text-gray-600">
        Concordo com o tratamento dos meus dados pessoais de acordo com a 
        <a href="#" class="text-wine-900 hover:underline">Política de Privacidade</a> 
        e autorizo o contato para apresentação de propostas.
      </label>
    </div>
    
    <!-- Submit Button -->
    <div class="pt-4">
      <BaseButton
        type="submit"
        variant="primary"
        size="lg"
        full-width
        :loading="isSubmitting"
        :disabled="!isFormValid"
      >
        {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
      </BaseButton>
    </div>
    
    <!-- Additional Contact Methods -->
    <div class="pt-6 border-t border-gray-200">
      <p class="text-center text-gray-600 mb-4">Ou entre em contato diretamente:</p>
      
      <div class="flex flex-col sm:flex-row gap-4">
        <BaseButton
          variant="outline"
          size="md"
          full-width
          @click="openWhatsApp"
          class="flex items-center justify-center"
        >
          <IconWrapper 
            name="message-circle" 
            size="sm" 
            variant="muted"
            :aria-label="'WhatsApp'"
            class="mr-2"
          />
          WhatsApp
        </BaseButton>
        
        <BaseButton
          variant="outline"
          size="md"
          full-width
          @click="callPhone"
          class="flex items-center justify-center"
        >
          <IconWrapper 
            name="phone" 
            size="sm" 
            variant="muted"
            :aria-label="'Telefone'"
            class="mr-2"
          />
          Ligar Agora
        </BaseButton>
        
        <BaseButton
          variant="outline"
          size="md"
          full-width
          @click="sendEmail"
          class="flex items-center justify-center"
        >
          <IconWrapper 
            name="mail" 
            size="sm" 
            variant="muted"
            :aria-label="'E-mail'"
            class="mr-2"
          />
          E-mail
        </BaseButton>
      </div>
    </div>
  </form>
</template>

<script>
import { useMainStore } from '@/stores/main'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconWrapper from '@/components/ui/IconWrapper.vue'

export default {
  name: 'ContactForm',
  components: {
    BaseInput,
    BaseButton,
    IconWrapper
  },
  data() {
    return {
      errors: {},
      hasErrors: false
    }
  },
  computed: {
    store() {
      return useMainStore()
    },
    
    form() {
      return this.store.contactForm
    },
    
    services() {
      return this.store.services
    },
    
    isSubmitting() {
      return this.store.isSubmitting
    },
    
    submitted() {
      return this.store.submitted
    },
    
    isFormValid() {
      return this.form.name && 
             this.form.email && 
             this.form.phone && 
             this.form.service && 
             this.form.message && 
             this.form.privacy
    }
  },
  methods: {
    async handleSubmit() {
      // Reset errors
      this.errors = {}
      this.hasErrors = false
      
      // Validate form
      if (!this.validateForm()) {
        this.hasErrors = true
        return
      }
      
      try {
        const result = await this.store.submitContactForm(this.form)
        
        if (result.success) {
          // Form submitted successfully
          // Success state is managed by the store
        } else {
          this.hasErrors = true
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        this.hasErrors = true
      }
    },
    
    validateForm() {
      let isValid = true
      
      // Name validation
      if (!this.form.name || this.form.name.trim().length < 2) {
        this.errors.name = 'Nome é obrigatório (mín. 2 caracteres)'
        isValid = false
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.form.email || !emailRegex.test(this.form.email)) {
        this.errors.email = 'E-mail válido é obrigatório'
        isValid = false
      }
      
      // Phone validation
      const phoneRegex = /^[\d\s\(\)\-\+]{10,}$/
      if (!this.form.phone || !phoneRegex.test(this.form.phone.replace(/\D/g, ''))) {
        this.errors.phone = 'Telefone válido é obrigatório'
        isValid = false
      }
      
      // Service validation
      if (!this.form.service) {
        this.errors.service = 'Selecione um serviço'
        isValid = false
      }
      
      // Message validation
      if (!this.form.message || this.form.message.trim().length < 10) {
        this.errors.message = 'Mensagem é obrigatória (mín. 10 caracteres)'
        isValid = false
      }
      
      return isValid
    },
    
    openWhatsApp() {
      const message = encodeURIComponent(
        `Olá! Vim através do site e gostaria de mais informações sobre ${this.form.service || 'os serviços de engenharia'}.`
      )
      window.open(`https://wa.me/5511999999999?text=${message}`, '_blank')
    },
    
    callPhone() {
      window.open('tel:+551199999999', '_self')
    },
    
    sendEmail() {
      const subject = encodeURIComponent(`Interesse em ${this.form.service || 'Serviços de Engenharia'}`)
      const body = encodeURIComponent(
        `Olá!\n\nTenho interesse em mais informações sobre os serviços de engenharia.\n\nAtenciosamente,\n${this.form.name || '[Seu Nome]'}`
      )
      window.open(`mailto:contato@quartzoeng.com.br?subject=${subject}&body=${body}`, '_self')
    }
  },
  
  watch: {
    // Clear errors when user starts typing
    'form.name'() { delete this.errors.name },
    'form.email'() { delete this.errors.email },
    'form.phone'() { delete this.errors.phone },
    'form.service'() { delete this.errors.service },
    'form.message'() { delete this.errors.message }
  }
}
</script>
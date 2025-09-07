<template>
  <div class="form-group">
    <label 
      v-if="label" 
      :for="inputId" 
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>
    
    <div class="relative">
      <component
        :is="inputComponent"
        :id="inputId"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        :class="inputClasses"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :rows="rows"
        :cols="cols"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      
      <div v-if="$slots.suffix" class="absolute inset-y-0 right-0 flex items-center pr-3">
        <slot name="suffix"></slot>
      </div>
    </div>
    
    <div v-if="error || hint" class="mt-2">
      <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
      <p v-else-if="hint" class="text-sm text-gray-500">{{ hint }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'outlined'].includes(value)
    },
    rows: {
      type: Number,
      default: 4
    },
    cols: {
      type: Number,
      default: 50
    }
  },
  emits: ['update:modelValue', 'blur', 'focus', 'input'],
  data() {
    return {
      isFocused: false
    }
  },
  computed: {
    inputId() {
      return this.name || `input-${Math.random().toString(36).substr(2, 9)}`
    },
    
    inputComponent() {
      return this.type === 'textarea' ? 'textarea' : 'input'
    },
    
    labelClasses() {
      return [
        'block',
        'text-sm',
        'font-medium',
        'text-gray-700',
        'mb-2'
      ]
    },
    
    inputClasses() {
      const base = [
        'block',
        'w-full',
        'border',
        'rounded-lg',
        'transition-colors',
        'duration-200',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-offset-2',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed'
      ]
      
      const sizeClasses = {
        sm: ['px-3', 'py-2', 'text-sm'],
        md: ['px-4', 'py-3', 'text-base'],
        lg: ['px-5', 'py-4', 'text-lg']
      }
      
      const variantClasses = {
        default: [
          'border-gray-300',
          'focus:border-wine-500',
          'focus:ring-wine-500'
        ],
        outlined: [
          'border-2',
          'border-gray-300',
          'focus:border-wine-500',
          'focus:ring-wine-500'
        ]
      }
      
      const errorClasses = this.error ? [
        'border-red-300',
        'focus:border-red-500',
        'focus:ring-red-500'
      ] : []
      
      return [
        ...base,
        ...sizeClasses[this.size],
        ...variantClasses[this.variant],
        ...errorClasses
      ]
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value)
      this.$emit('input', event)
    },
    
    handleBlur(event) {
      this.isFocused = false
      this.$emit('blur', event)
    },
    
    handleFocus(event) {
      this.isFocused = true
      this.$emit('focus', event)
    }
  }
}
</script>
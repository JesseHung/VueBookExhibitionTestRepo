<template>
	<div class="number-input inline-block">
    <button 
      type="button" 
      class="number-button p-2 my-2 text-gray shadow-md rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2 ml-5"
      @click="reduceNum"
    >-</button>
		<input type="text" class="p-2 my-2 shadow-md rounded-md focus:outline-none w-40 ml-1 mr-1 text-center" v-model="inputValue" />
		<button 
      type="button" 
      class="number-button p-2 my-2 text-gray shadow-md rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2"
      @click="increaseNum"
    >+</button>
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
	props: {
    value: {
      default: 0,
      type: [String, Number],
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', Number(newValue));
      },
    }
  },
  methods: {
    increaseNum() {
      this.$emit('input', this.inputValue + 1)
    },
    reduceNum() {
      if (this.inputValue > 0) {
        this.$emit('input', this.inputValue - 1)
      }
    }
  }
}
</script>

<style scoped>
  .number-input button.number-button {
    width: 40px;
    height: 40px;
  }

  .number-input input {
    height: 40px;
  }


</style>

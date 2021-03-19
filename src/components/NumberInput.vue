<template>
	<div class="number-input inline-block">
    <button class="number-button p-2 my-2 text-gray shadow-md rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2 ml-5">-</button>
		<input type="text" class="p-2 my-2 shadow-md rounded-md focus:outline-none w-40 ml-1 mr-1 text-center" />
		<button class="number-button p-2 my-2 text-gray shadow-md rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2">+</button>
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
	props: {
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

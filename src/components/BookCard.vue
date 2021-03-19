<template>
	<div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto book-card">
		<div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" :style="'background-image: url(' + imageUrl + ')'"></div>

		<div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
			<div class="title-post font-medium text-center">{{ bookName }}</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'BookCard',
	props: {
		imageUrl: {
			type: String,
			default: '',
		},
		bookName: {
			type: String,
			default: '',
		}
	}
}
</script>

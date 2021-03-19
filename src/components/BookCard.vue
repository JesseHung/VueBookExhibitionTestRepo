<template>
	<div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto book-card"
		:class="{ 'is-selected': isSelected }"
		@click="$emit('showBook', bookId)"
	>
		<div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" :style="'background-image: url(' + imageUrl + ')'"></div>

		<div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg rounded-t-none overflow-hidden p-5 book-name">
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
		},
		bookId: {
			type: Number,
			default: 0,
		},
		isSelected: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style scoped>
	.book-card {
		width: 250px
	}

	.is-selected {
		transform: scale(1.1);
		transition: transform 0.5s;
	}

	.is-selected .book-name {
		--tw-shadow: 0 20px 24px -9px rgba(0, 0, 0, 0.1), 0 20px 33px -9px rgba(0, 0, 0, 0.05)
	}
</style>
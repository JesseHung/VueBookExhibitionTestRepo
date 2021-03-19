<template>
	<div class="px-5 py-24 pt-10 md:w-full book-detail">
    <div class="bg-gray-300 w-full rounded-lg shadow-md bg-cover bg-center">
        <!-- card body -->
        <div class="p-6 bg-white w-full ">
            <form>
							<div>
								價格
								<NumberInput />
							</div>

							<div>
								數量

								<NumberInput />
							</div>

            </form>

						<div class="text-right">
							<button class="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded" 
                >確認修改</button>
						</div>
        </div>

    </div>
	</div>
</template>

<script>
import NumberInput from './NumberInput.vue'
export default {
	name: 'BookDetail',
	components: {
    NumberInput,
  },
	props: {
		selectedBook: {
			type: String,
			default: '',
		}
	}
}
</script>

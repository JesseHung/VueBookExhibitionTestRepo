<template>
	<div class="px-5 py-24 pt-10 md:w-full book-detail">
    <div 
			class="bg-gray-300 w-full shadow-md bg-cover bg-center rounded-lg"
		>
        <!-- card body -->
        <div class="p-6 bg-white w-full ">
						<div>
							價格
							<NumberInput
								v-model="selectedBook.price"
							/>
						</div>
						<div>
							數量
							<NumberInput
								v-model="selectedBook.count"
							/>
						</div>
						<div class="text-right">
							<button 
								class="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded-lg"
								@click="updateBook"
              >確認修改</button>
						</div>
        </div>

    </div>
	</div>
</template>

<script>
import {
  updateBook,
} from '@/api/book.js'
import NumberInput from './NumberInput.vue'
export default {
	name: 'BookDetail',
	components: {
    NumberInput,
  },
	props: {
		selectedBook: {
			default: () => ({}),
      type: Object,
		}
	},
	methods: {
		updateBook() {
			updateBook(this.selectedBook.id, this.selectedBook).then((response) => {
				if (response.status === 200) {
					this.$message({
						message: '更新成功！',
						type: 'success'
					})
				} else {
					this.$message({
						message: '更新失敗！',
						type: 'warning'
					})
				}
			})
		}
	}
}
</script>

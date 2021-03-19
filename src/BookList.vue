<template>
  <div id="app">
    <div class="card">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <BookCard
            v-for="book in books"
            :key="book.id"
            :image-url="book.image"
            :book-name="book.name"
           />
        </div>

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <BookDetail
            v-if="selectedBook !== ''"
            :selected-book="selectedBook"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getBooks,
} from '@/api/book.js'
import BookCard from './components/BookCard.vue'
import BookDetail from './components/BookDetail.vue'

export default {
  name: 'BookList',
  components: {
    BookCard,
    BookDetail
  },
  data() {
    return {
      books: [],
      selectedBook: '1',
    }
  },
  mounted() {
    getBooks().then(response => {
      this.books = response.data.filter(b => b.name && b.name !== '')
    })
  }
}
</script>

<style>
</style>

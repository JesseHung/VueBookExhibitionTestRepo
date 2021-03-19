<template>
  <div id="app">
    <div class="card">
      <div class="container px-5 py-24 mx-auto">
        <div 
          class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4"
          style="height: 350px; overflow-x: scroll"
        >
          <div
            class="flex"
            style="max-width: 100000px; max-height: 350px;"
          >
          <BookCard
            v-for="book in books"
            :key="book.id"
            :image-url="book.image"
            :book-name="book.name"
            :book-id="book.id"
            :is-selected="selectedBookId === book.id"
            @showBook="showBook"
           />
          </div>
        </div>

        <div 
          class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4"
        >
          <BookDetail
            v-if="selectedBookId !== 0"
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
  getBookDetail,
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
      selectedBookId: 0,
      selectedBook: {},
      loading: false,
    }
  },
  mounted() {
    getBooks().then(response => {
      this.books = response.data.filter(b => b.name && b.name !== '')
    })
  },
  methods: {
    showBook(newVal) {
      this.selectedBookId = newVal;
      const params = {
        id: this.selectedBookId
      }
      getBookDetail(params).then((response) => {
        this.selectedBook = response.data[0]
      })
    }
  }
}
</script>

<style>
</style>

<template>
	<main id="Home-page">
<!-- component -->
<div class="">
    <div class="inline-flex flex-col justify-center relative text-gray-500">
        <div class="relative">
            <input type="text" v-model="keyword" class="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="search..." value="Gar" />
            <svg class="w-4 h-4 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg> 
        </div>
        <ul v-if="Productss.length > 0" class="bg-white border border-gray-100 w-full mt-2 ">
            <li v-for="book in Productss" :key="book.id"  class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
              <router-link :to="{ name: 'product',params: {id: book.id}}">
              <svg class="stroke-current absolute w-4 h-4 left-2 top-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <b>{{ book.title }}</b>
                </router-link>
            </li>
        </ul>
    </div>
</div>
<section class="py-10 bg-gray-100">
  <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	<article v-for="product in products" :key="product.id" class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hotel Photo" />
          <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <button class="text-sm">Add to cart</button>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">{{ product.title }}</h2>
          <p class="mt-1 text-sm text-slate-400">{{ product.description }}</p>

          <div class="mt-3 flex items-end justify-between">
              <p class="text-lg font-bold text-blue-500">$850</p>

            <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <router-link :to="{ name: 'product',params: {id: product.id}}">
             <button class="text-sm" >View </button>
            </router-link>
            </div>
          </div>
        </div>
      </a>
    </article>
  </div>
    
</section>
	</main>
</template>

<script>
import useProduct from '../../js/api/product';
import { onMounted } from 'vue';
import router from '../../js/router';

const { products, getProducts, searchProduct } = useProduct()

export default {
  name: 'App',
  data() {
    return {
      keyword: null,
      Productss: []
    }
  },
  setup() {
        onMounted(getProducts) 
        return {
            products,
        }
  },
  watch:{
    keyword(after, before) {
            this.getResults();
        }
  },
  methods: {
	viewProduct(id){
    router.push({ path: `/product/${id}` }) // -> /user/eduardo
	},
  getResults() {
    searchProduct(this.keyword)
      .then(res => this.Productss = res.data)
      .catch(error => {});
  }
  },
}
</script>

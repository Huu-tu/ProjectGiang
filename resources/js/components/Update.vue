<template>
    <main id="Home-page">
      <!-- component -->
  <div >
    <h1 class="mb-1 font-bold text-3xl flex gap-1 items-baseline font-mono">Update Product</h1>
<form  v-on:submit.prevent="saveProduct" class="grid max-w-3xl gap-2 py-10 px-8 sm:grid-cols-2 bg-white rounded-md border-t-4 border-purple-400">
  <div class="grid">
    <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
      <input type="text" name="title" id="title" class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Title "  :value="product.title" v-model="product.title"/>
      <label html="title" class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Title </label>
    </div>
  </div>
  <div class="grid">
    <div class="bg-white first:flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
      <input type="text" name="description" id="description" class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Desciption " :value="product.description" v-model="product.description"/>
      <label html="description" class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Description </label>
    </div>
  </div>

         <button type="submit" class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Update</button>
</form>
</div>
    </main>
</template>
<script>
import { onMounted } from 'vue';
    import useProduct from '../../js/api/product';
    import { useRoute } from 'vue-router'
    const { product, updateProduct } = useProduct();
    const route = useRoute();

    export default {
      data () {
      return {
        result: {},
        product:{
          title: '',
          description: '',
        }
      }
    },
    methods:{
      saveProduct(){
        updateProduct(route.params.id, this.product)
      }
    }
}
</script>




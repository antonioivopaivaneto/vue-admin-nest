<template>
   <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link to="/products/create" class="btn btn-sm btn-outline-secondary">Add</router-link>
  </div>

  <h2>Products</h2>

  <div class="table-responsive small">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td><img :src="product.image" alt="" class="img-fluid" style="width: 80px;"></td>
          <td>
            <div class="btn-group mr-2">
              <router-link :to="`/products/${product.id}/edit`" class="btn btn-sm btn-outline-warning mx-2">Editar</router-link>
              <a href="javascript:void(0)" class="btn btn-sm btn-outline-danger" @click="del(product.id)">Remover</a>
            </div>

          </td>
        </tr>
      </tbody>
    </table>

  </div>

  <Paginator :lastPage="lastPage" @page-changed="load($event)" />

  
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios';
import { Product } from '@/models/Product';
import Paginator from '@/components/Paginator.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",
  components:{Paginator},
  props:{
    lasPage:Number,
  },

  setup() {

    const products = ref();
    const lastPage = ref(0)

    const load = async (page = 1) => {

      const { data } = await axios.get(`products?page=${page}`);

      products.value = data.data;
      lastPage.value = data.meta.last_page


    };

    onMounted(load)

    


    const del = async (id: number) => {
      if (confirm('Deseja remover?')) {
        await axios.delete(`products/${id}`)

        products.value = products.value.filter((p: Product) => p.id !== id)

      }


    }

    return {
      products,
      del,
      lastPage,
      load
      
    }

  }
}
</script>

<style></style>
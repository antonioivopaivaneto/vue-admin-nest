<template>
    <h1>Edit a Product</h1>

    <form @submit.prevent="submit">
        <div class="mb-3">
            <label>Title</label>
            <input type="text" v-model="data.title" class="form-control" name="title">
        </div>
        <div class="mb-3">
            <label>Description</label>
            <textarea v-model="data.description" class="form-control" name="description"></textarea>
        </div>
        <div class="mb-3">
            <label>imagem</label>
            <div class="input-group">
                <input v-model="data.image" class="form-control" name="Image">
                <image-upload @file-uploaded="data.image = $event" />
            </div>
        </div>
        <div class="mb-3">
            <label>Price</label>
            <input v-model="data.price" class="form-control" name="price">
        </div>
        <button class="btn btn-outline-secondary">Save</button>

    </form>
</template>

<script lang="ts">
import { onMounted, reactive } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import ImageUpload from '@/components/ImageUpload.vue';

export default {
    components: { ImageUpload },
    name: "ProductEdit",
    setup() {
        const router = useRouter();
        const route = useRoute();

        const data = reactive({
            title: '',
            description: '',
            image: '',
            price: ''
        });

        onMounted(async () => {
            const response  = await axios.get(`products/${route.params.id}`);
       
            console.log(response)
            data.title = response.data.title;
            data.description = response.data.description;
            data.image = response.data.image;
            data.price = response.data.price;
        });

        const submit = async () => {
            await axios.put(`products/${route.params.id}`, data);
            await router.push('/products');
        }

        return {
            data,
            submit
        }

    }
}
</script>
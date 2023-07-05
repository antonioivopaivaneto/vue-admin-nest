<template>
  <form @submit.prevent="submit" >
        <div class="mb-3">
            <label>Name</label>
            <input v-model="formData.name"  class="form-control" name="name">
        </div>

        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Permission</label>
            <div class="col-sm-10">
                <div class="form-check form-check-inline col-3" v-for="permissions in permissionList" :key="permissions.id" >
                    <input type="checkbox" class="form-check-input"
                    :checked="checked(permissions.id)"
                     :value="permissions.id" @change="select(permissions.id, $event.target.checked)" >
                    <label class="form-check-label">{{  permissions.name }}</label>
                </div>
            </div>
        </div>


        <button class="btn btn-outline-secondary">Salvar</button>
    </form>
  
</template>

<script lang="ts" >
import { onMounted, reactive, ref } from 'vue'
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import {Permission} from '@/models/Permission';
export default {
    name:"roleCreate",

    setup(){
        const {push} = useRouter();
        const {params} = useRoute();

        const formData = reactive({
            name:'',
            permissions:[]  as number[]
        });
        const permissionList = ref([]);

        onMounted(async () =>{
            const {data} = await axios.get('permissions');

            permissionList.value = data;

            const response = await axios.get(`roles/${params.id}`);

            formData.name = response.data.name;
            formData.permissions = response.data.permissions.map((p: Permission) => p.id);
        });

        const select = (id:number, checked: boolean) => {
            if(checked){
                formData.permissions = [...formData.permissions, id];
                return;
            }
            formData.permissions = formData.permissions.filter(p => p !== id)
        }

        const submit = async () => {
            await axios.put(`roles/${params.id}`,formData);

            await push('/roles');

        }

        const checked = (id: number) =>{
            return formData.permissions.some(p => p === id); 
        }

        return{
            formData,
            select,
            permissionList,
            submit,
            checked
        }
    }

}
</script>

<style>

</style>
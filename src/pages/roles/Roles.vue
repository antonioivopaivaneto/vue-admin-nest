<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link to="/roles/create" class="btn btn-sm btn-outline-secondary">Add</router-link>
  </div>

   <div class="table-responsive small">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="role in roles" :key="role.id">
              <td>{{ role.id }}</td>
              <td>{{ role.name }}</td>
              <td> 
                <div class="btn-group mr-2">
                  <router-link :to="`/roles/${role.id}/edit`" class="btn btn-sm btn-outline-warning" >Editar</router-link>
                  <a href="javascript:void(0)" class="btn btn-sm btn-outline-danger" @click="del(role.id)">Remover</a>
                </div>

              </td>
            </tr>
          </tbody>
        </table>
      </div> 
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios';
import { Role } from '@/models/Role';
export default {
    name:"rolesPage",

    setup(){
        const roles = ref();

        onMounted(async () => {

            const  {data} = await axios.get('roles');

            roles.value = data;

        });

        const del = async (id:number) => {
            if(confirm('Deseja remover ?')){
        await axios.delete(`role/${id}`);

        roles.value = roles.value.filter((r : Role) => r.id !==id)
      }
        }

        return{
            roles,
            del,
        }
            
        }
    }

</script>

<style >

</style>
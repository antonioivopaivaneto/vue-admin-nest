<template>
    
     <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div class="offcanvas-lg offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="sidebarMenuLabel">Empresa X</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/" active-class="active" class="nav-link d-flex align-items-center gap-2"  >
                <svg class="bi"><use xlink:href="#house-fill"/></svg>
                Dashboard
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/users" active-class="active" class="nav-link d-flex align-items-center gap-2" >
                <svg class="bi"><use xlink:href="#people"/></svg>
                Users
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/roles" active-class="active" class="nav-link d-flex align-items-center gap-2" >
                <svg class="bi"><use xlink:href="#people"/></svg>
                Roles
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="products" class="nav-link d-flex align-items-center gap-2">
                <svg class="bi"><use xlink:href="#cart"/></svg>
                Products
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/orders" class="nav-link d-flex align-items-center gap-2">
                <svg class="bi"><use xlink:href="#cart"/></svg>
                Orders
              </router-link>
            </li>
           
          </ul>

          <hr class="my-3">

          <ul class="nav flex-column mb-auto">
            
            <li class="nav-item">
              <router-link to="/login" @click="logout" class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#door-closed"/></svg>
                Sign out
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Menu",
    setup(){
      const logout = async () => {
        await axios.post('logout');
      }

      return{
        logout
      }
    }
}
</script>

<style scoped>

</style>
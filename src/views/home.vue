<template lang="html">
   <div class="">
      <v-container>
      <v-card  height="500px" :img="require('../img/medical.jpg')">
         <v-img class="mt-2" :src="require('../img/logo.png')" width="20%"></v-img>
      </v-card>

      <v-sheet elevation="5" color="blue-grey lighten-5" tile class="text-center mx-auto">
            <v-row justify="center" class="mt-2">
               <span class="bold display-1 font-italic my-4">Nuestra Empresa</span>
            </v-row>
            <v-row justify="center" no-gutters>
               <v-col cols="1" v-for="n in 4" :key="n">
                  <v-card class="pa-2 transparent text-center mb-2" flat>
                     <font-awesome-icon size="2x" :color="cServices[n-1]" :icon="['fas', iServices[n-1]]"/>
                  </v-card>
               </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row justify="center">
               <v-col cols="8">
                  <blockquote class="blockquote font-italic pa-8">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </blockquote>
               </v-col>
            </v-row>
      </v-sheet>

      <v-row justify="center">
         <v-col xl="12">
               <p class="text-center display-2 mt-2"><font-awesome-icon :icon="['fas', 'box-open']" /> Productos <font-awesome-icon :icon="['fas', 'box-open']" /></p>
               <v-divider></v-divider>
               <p class="blockquote font-italic pa-8 text-center">Trabajamos para llevar a su puerta productos de la mejor calidad al mejor precio</p>
         </v-col>
      </v-row>

      <products img="jeringa5.jpg" product="Jeringas" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."></products>

      <v-divider class="my-8"></v-divider>

      <contact></contact>

      <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax> -->



     <!-- <v-icon color="yellow darken-2">share</v-icon>
     <v-icon large color="blue darken-2">chat</v-icon> -->




     <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </v-container>
   </div>
</template>

<script>
  import products from './components/products.vue'
  import contact from './components/contact.vue'

  export default {
    name: 'home',
    components: {
      products,
      contact
    },
    data () {
      return {
         iServices: ['truck-moving','stopwatch','user-friends','user-tie'],
         cServices: ['green','#0D47A1','red','#1E88E5']
      }
    }
  }
</script>


<style lang="css" scoped>
</style>

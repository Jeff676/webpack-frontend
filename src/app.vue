<template>
  <v-app id="app">
      <v-banner elevation="12" sticky single-line class="yellow accent-4">
         <!-- v-bind:class="[isActive ? 'mainMenuScroll amber accent-4' : '', 'mainMenuTop light-green accent-3']" -->
         <v-toolbar>
            <v-toolbar-title><v-img :src="require('./img/img1.png')"  width="40px"></v-img></v-toolbar-title>
         </v-toolbar>
         <template v-slot:actions class="mr-1">
            <!-- <v-toolbar-items class="mr-12"> -->
            <v-btn class="red--text" text>Inicio</v-btn>
            <v-btn class="red--text"  text>Quienes somos</v-btn>
            <v-btn class="red--text"  text>Productos</v-btn>
            <v-btn class="red--text"  text>Contacto</v-btn>
            <!-- </v-toolbar-items> -->
         </template>

      </v-banner>
      <router-view/>
   </v-app>
</template>

<script>

export default {
  data () {
      return {
        coordY: ''
      }
   },
   created () {
      window.addEventListener('scroll', this.getY);
   },
   destroyed () {
      window.removeEventListener('scroll', this.getY);
   },
   computed: {
      isActive: function () {
         if (this.coordY > 100){
            return true
         } else {
            return false
         }
      }

   },
   methods: {
      getY: function() {
         this.coordY=window.pageYOffset
      }
   }
}
</script>

<style>
.mainMenuTop{
   /* transition: height 1s;
   transition-timing-function: ease; */
   /* animation-name: example;
   animation-duration: 2s */

}
.mainMenuScroll {

;
}

@keyframes example {
  from {background-color: yellow;}
  to {background-color: white;}
}

</style>

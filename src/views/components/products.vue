<template lang="html">
   <v-container>
         <v-row justify="center" align="stretch" style="height: 300px;">
            <v-col cols="12" lg="6" sm="12">
               <v-card flat outlined min-height="300px"><v-img aspect-ratio="2.1" contain :src="require('../../img/'+ img)"></v-img></v-card>
            </v-col>
            <v-col cols="12" lg="4" sm="12">
               <v-card height="300px"><v-card-title>{{product}}</v-card-title><v-card-text>{{description}}</v-card-text></v-card>
            </v-col>
         </v-row>
   </v-container>
</template>

<script>
export default {
   name: 'HelloWorld',
   props: {
      product: String,
      description: String,
      img: String
   }
}
</script>

<style lang="css" scoped>
</style>

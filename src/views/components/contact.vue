<template lang="html">
   <v-container>
      <!-- <v-row>
         <v-col xs="12">
            <v-card outlined flat> -->
               <v-row class="px-2">
                  <v-col cols="12" lg="4" sm="12">
                     <v-card class="pa-2 transparent" flat>
                        <v-card-title><font-awesome-icon class="mr-2" color="#0D47A1" :icon="['fas', 'pencil-alt']"/>Escríbenos</v-card-title>
                        <v-form>
                           <v-text-field :counter="10" label="Nombre"></v-text-field>
                           <v-text-field :counter="30" label="Correo Electrónico"></v-text-field>
                           <v-textarea name="Asunto" rows="8" outlined></v-textarea>
                           <v-btn color="success" block><font-awesome-icon class="mr-2" color="white" size="2x" :icon="['fas', 'paper-plane']"/>Enviar</v-btn>
                        </v-form>

                     </v-card>
                  </v-col>

                  <v-col cols="12" lg="4" sm="12" align="stretch">
                     <v-card height="100%" class="transparent" flat>
                        <v-card-title>
                           <font-awesome-icon class="mr-2" color="red" :icon="['fas', 'map-marker-alt']"/>
                           Nuestra Ubicación
                        </v-card-title>
                        <v-card-text> Carrera 28 entre calles 9 y 10, Unidad Quirúrgica La Trinidad.<br/> Barquisimeto Estado Lara</v-card-text>

                           <iframe class="px-2"  width="100%" height="60%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15712.901145427028!2d-69.30383653652342!3d10.080618066276129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f1c09b6f8a8fefd!2sUnidad%20Quir%C3%BArgica%20La%20Trinidad%20Barquisimeto!5e0!3m2!1ses!2sve!4v1567938995460!5m2!1ses!2sve" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

                     </v-card>
                  </v-col>

                  <v-col cols="12" lg="4" sm="12" align="stretch">
                     <v-card height="100%" class="pa-2 transparent" flat>
                        <v-card-title class="mb-6">
                           <font-awesome-icon class="mr-2" color="green" :icon="['fas', 'headset']"/>
                           Contáctanos
                        </v-card-title>

                        <v-divider></v-divider>

                        <v-list-item class="headline">
                           <v-list-item-icon>
                              <font-awesome-icon sixe="4x" :icon="['far', 'envelope']"/>
                           </v-list-item-icon>
                           <v-list-item-content>
                              ventas@alfamedica.com
                           </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>

                        <v-list-item class="headline">
                           <v-list-item-icon>
                              <font-awesome-icon :icon="['fab', 'whatsapp']"/>
                           </v-list-item-icon>
                           <v-list-item-content>
                              0416 5017115
                           </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>

                        <v-list-item class="headline">
                           <v-list-item-icon>
                              <font-awesome-icon :icon="['fas', 'mobile-alt']"/>
                           </v-list-item-icon>
                           <v-list-item-content>
                              0416 5017123
                           </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>

                        <v-list-item class="headline">
                           <v-list-item-icon>
                              <font-awesome-icon :icon="['fas', 'phone-alt']"/>
                           </v-list-item-icon>
                           <v-list-item-content>
                              0251 2525284 Ext 50
                           </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>

                        <!-- <v-img :src='require("../../img/LogoHorizontal.png")' width="60%" class="mx-auto"></v-img> -->

                     </v-card>
                  </v-col>
               </v-row>
            <!-- </v-card>
         </v-col>
      </v-row> -->
   </v-container>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

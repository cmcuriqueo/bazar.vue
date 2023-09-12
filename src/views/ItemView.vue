<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row class="d-flex mx-auto align-center">
          <v-col>
            <div class="d-flex align-center flex-column">
              <v-card 
                v-if="!isLoading"
                width="400" >
                <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background height="300"
                  delimiter-icon="mdi-square">
                  <v-carousel-item cover v-for="(item, i) in product.images" :key="i" :src="item" />
                </v-carousel>

                <v-card-title>
                  {{ product.title }}
                </v-card-title>
                <v-card-subtitle>
                  {{ product.category }}
                </v-card-subtitle>

                <v-card-text>
                  {{ product.description }}
                </v-card-text>
              </v-card>



              <VSkeletonLoader v-if="isLoading" class="mx-auto border" width="400" type="image, article"></VSkeletonLoader>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import productsStore from '@/stores/products'
import { VSkeletonLoader } from 'vuetify/labs/components' 

export default {
  components: {
    VSkeletonLoader
  },
  data() {
    return {
      isLoading: true
    }
  },
  computed: {
    product() {
      const data =  productsStore.getters.product
      return data
    }
  },
  mounted() {
    const id = this.$route.params.id
    productsStore.dispatch('fetchProduct', id)
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>

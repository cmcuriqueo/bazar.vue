<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row class="d-flex mx-auto align-center">
          <v-col>
            <div class="d-flex align-center flex-column">
              <VCard
                v-if="!isLoading"
                v-for="product of products"
                :key="product.id"
                class="mb-4"
                style="cursor: pointer"
                @click="onClick(product)"
                width="400">
                
                <v-img :src="product.images[0]" height="400px" cover></v-img>

                <v-card-title>
                  {{ product.title }}
                </v-card-title>
                <v-card-subtitle>
                  {{ product.category }}
                </v-card-subtitle>

                <v-card-text>
                  {{ product.description }}
                </v-card-text>
              </VCard>

              <VCard v-if="!isLoading && products.length == 0">
                
                <v-card-title>
                  {{ 'No se han encontrado resultados... 😣' }}
                </v-card-title>
              </VCard>

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
import type Product from '@/types/product'
import { VSkeletonLoader } from 'vuetify/labs/components' 
import { VCard } from 'vuetify/components' 


export default {
  components: {
    VSkeletonLoader,
    VCard
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    //obtengo los parametros de la busqueda
    const query = this.$route.query.q as string
    productsStore.dispatch('fetchProducts', query)
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  },
  computed: {
    products() {
      return productsStore.getters.products
    }
  },
  methods: {
    onClick(product: Product) {
      this.$router.push({
        name: 'item',
        params: {
          id: product.id
        }
      })
    }
  }
}
</script>

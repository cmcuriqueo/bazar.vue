<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row class="d-flex mx-auto align-center">
          <v-col>
            <div class="d-flex align-center flex-column">
              <VCard width="400" min-height="100vh">
                <VCardText >
                  <div class="d-flex justify-center">
                    <VSheet class="ma-2 pa-2">
                      <LogoCarrito />
                    </VSheet>
                  </div>
                  <div class="text-h5 d-flex justify-center mb-2 font-weight-black">Bazar Online</div>
                  <VForm @submit.prevent="onSubmit">
                    <VTextField :loading="loading" density="compact" variant="solo" label="notebook, smartphone, ..."
                      v-model="query" clearable single-line hide-details @click:append-inner="onClick"
                      :rules="[required]"></VTextField>
                    <VBtn type="submit" block class="mt-2 align-center" variant="tonal" rounded="xl">
                      Buscar
                    </VBtn>
                  </VForm>
                </VCardText>
              </VCard>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import LogoCarrito from '../components/icons/LogoCarrito.vue'
import { VCard, VCardText, VForm, VBtn, VTextField, VSheet } from 'vuetify/components'

export default {
  components: {
    LogoCarrito,
    VCard,
    VCardText,
    VForm,
    VBtn,
    VTextField,
    VSheet
  },
  name: 'HomeView',
  data() {
    return {
      query: '',
      loading: false
    }
  },
  methods: {
    onClick() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    onSubmit() {
      if (!this.query) return
      this.$router.push({ name: 'items', query: { q: this.query } })
    }
  },
  computed: {
    required() {
      return (v: string) => !!v || 'Este campo es requerido'
    }
  }
}
</script>

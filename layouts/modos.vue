<template>
  <div class="main">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <NuxtLink to="/" class="logotipo"> Beco do <span>Pastel</span> </NuxtLink>

      <b-navbar-nav class="ml-auto d-flex flex-row">
        <b-avatar
          v-b-toggle.user
          badge="☰"
          badge-variant="warning"
          class="m-1 p-2"
        >
          <Font-awesome-icon :icon="faUserAlt"></Font-awesome-icon>
        </b-avatar>

        <b-avatar
          v-b-toggle.sacola
          :badge="String(wishlist.length)"
          badge-variant="warning"
          class="m-1 p-2"
        >
          <img
            class="m-2"
            src="https://courier-images-web.imgix.net/static/img/bag.svg?auto=compress,format&amp;fit=max&amp;w=undefined&amp;h=undefined&amp;dpr=2"
            alt=""
          />
        </b-avatar>
      </b-navbar-nav>
    </b-navbar>
    <Nuxt />
    <SidebarUser />
    <SidebarSacola />
    <ModalsComplementos />
    <footer class="bg-dark text-white">
      <b-row class="mt-3">
        <b-col cols="12" class="center bg-light text-dark py-3">
          <p class="cursor" @click="scrollBehavior">
            Voltar ao topo
          </p>
        </b-col>
      </b-row>
      <b-row class="p-5">
        <b-col xl="4" lg="4" md="12" sm="12" class="d-flex flex-column p-4">
          <h2>Sobre o Beco do Pastel</h2>
          <NuxtLink class="nuxtlink" to="/canalAjuda"> Canal de Ajuda </NuxtLink>
          <NuxtLink class="nuxtlink" to="/pagamentoEntrega"> Pagamento na Entrega </NuxtLink>
          <NuxtLink class="nuxtlink" to="/TermosUso"> Termos de uso </NuxtLink>
          <NuxtLink class="nuxtlink" to="/PolíticaPrivacidade">
            Política de Privacidade
          </NuxtLink>
        </b-col>
        <b-col xl="4" lg="4" md="12" sm="12" class="d-flex flex-column p-4">
          <h2>Venha ao Beco do Pastel</h2>
          <NuxtLink class="nuxtlink" to="/mapa"> Mapa </NuxtLink>
        </b-col>
        <b-col xl="4" lg="4" md="12" sm="12" class="d-flex flex-column p-4">
          <h2>Em breve nosso aplicativo :)</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center border-top py-4">
          Copyright &copy; Mokit Digital
        </b-col>
      </b-row>
    </footer>
  </div>
</template>

<script>
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import {  mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      wishlist: 'wishlist/wishlist'
    }),
    faUserAlt() {
      return faUserAlt
    },
  },
  mounted() {
    // this.verifyToken()
  },
  methods: {
    scrollBehavior () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    async verifyToken() {
      const response = await this.$axios.get(`http://localhost:5000/api/token?token=${localStorage.getItem('token')}`)
      window.console.log('Passou pelo modos', response)
      if(response.data.isToken) {
        this.$nuxt.$options.router.push('/')
      } else {
        this.$nuxt.$options.router.push('/dashboard')
      }
    }
  },
}
</script>

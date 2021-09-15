<template>
  <div class="main">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <NuxtLink
        to="/"
        class="logotipo"
      >
        Beco do <span>Pastel</span>
      </NuxtLink>

      <b-navbar-nav class="ml-auto">
        <b-button
          variant="warning"
          class="btn-entrar"
          pill
          size="lg"
        >
          Entrar
        </b-button>
      </b-navbar-nav>
    </b-navbar>
    <Nuxt />
    <footer class="row border-top mt-5">
      <div class="col-12 text-center my-5">
        Copyright &copy; Mokit Digital
      </div>
    </footer>
  </div>
</template>

<script>
import {
  faUserAlt
} from '@fortawesome/free-solid-svg-icons'
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      token: false
    }
  },
  computed: {
    ...mapGetters({
      active: 'modal/activeLogin'
    }),
    faUserAlt () {
      return faUserAlt
    }
  },
  mounted () {
    if (localStorage.getItem('token') === 'abc') {
      this.token = true
    }
  },
  methods: {
    ...mapActions({
      alterLogin: 'modal/alterLogin'
    }),
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
    },
    openCardapio () {
      this.openSidebar()
      const body = document.querySelector('body')
      this.alterLogin(true)
      body.classList.add('modal-open')
    },
    openLogin () {
      this.openSidebar()
      const body = document.querySelector('body')
      this.alterLogin(true)
      body.classList.add('modal-open')
    },
    openSidebar () {
      const side = document.getElementsByClassName('side')[0]
      const carrinho = document.getElementsByClassName('carrinho')[0]
      side.classList.toggle('spread')
      if (carrinho !== undefined) carrinho.classList.toggle('hidden')
    },
    redirectHomePage () {
      this.$router.push('/')
    }
  },
  
}
</script>

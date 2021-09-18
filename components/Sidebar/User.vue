<template>
  <b-sidebar id="user" right shadow backdrop>
    <b-container>
      <b-row>
        <b-col class="center">
          <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
          <h2 class="name-user">
            {{ perfil.nomeCompleto }}
          </h2>
          <p>{{ perfil.email }}</p>
          <p>+55 {{ perfil.celular }} </p>
          <NuxtLink to="/perfil" class="my-2">
            Alterar meus dados
          </NuxtLink>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="options">
          <Font-awesome-icon :icon="faFileAlt"></Font-awesome-icon>
          <h3>Meus Pedidos</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="options">
          <Font-awesome-icon :icon="faTicketAlt"></Font-awesome-icon>
          <h3>Meus Cupons</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="options">
          <Font-awesome-icon :icon="faQuestionCircle"></Font-awesome-icon>
          <h3>Canal de Ajuda</h3>
        </b-col>
      </b-row>
    </b-container>
    <template #footer>
      <div class="d-flex align-items-center options" @click="logout()">
        <Font-awesome-icon :icon="faSignOutAlt"></Font-awesome-icon>
        <h3 class="my-0 mr-2">Sair</h3>
      </div>
    </template>
  </b-sidebar>
</template>

<script>
import { faFileAlt, faTicketAlt, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
export default {
  data () {
    return {
      perfil: {}
    }
  },
  computed: {
    faFileAlt () {
      return faFileAlt
    },
    faQuestionCircle () {
      return faQuestionCircle
    },
    faSignOutAlt () {
      return faSignOutAlt
    },
    faTicketAlt () {
      return faTicketAlt
    }
  },
  mounted () {
    this.findPerfil()
  },
  methods: {
    async findPerfil () {
      const response = await this.$axios.get(`http://localhost:5000/api/perfils?token=${localStorage.getItem('token')}`)

      this.perfil = response.data
    },
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>

<style></style>

<template>
  <div>
    <b-modal id="login" size="lg" hide-footer>
      <b-row>
        <b-col xl="6" lg="6" md="6" sm="12" class="sign-in">
          <b-form class="center" @submit="onSubmit">
            <h1>Entrar</h1>
            <div class="social-container">
              <a href="#" class="social-facebook">
                <Font-awesome-icon :icon="faFacebook" />
              </a>
              <a href="#" class="social-google">
                <Font-awesome-icon :icon="faGoogle" />
              </a>
            </div>
            <span>ou use sua conta</span>
            <b-form-input type="email" placeholder="E-mail" />
            <b-form-input type="password" placeholder="Senha" />
            <NuxtLink to="/forgot" class="my-2">
              Esqueceu sua senha?
            </NuxtLink>
            <b-button
              variant="warning"
              size="lg"
              pill
            >Entrar</b-button>
          </b-form>
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          class="center sign-up"
        >
          <h1>Seja Bem vindo!</h1>
          <p>Se você não tem um cadastro, faça um agora!</p>
          <b-button
            variant="light"
            pill
          >Cadastre-se</b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
export default {
  data() {
    return {
      form: {
        email: '',
        name: ''
      }
    }
  },
  computed: {
    faFacebook () {
      return faFacebook
    },
    faGoogle () {
      return faGoogle
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
  },
}
</script>

<style></style>

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
            <b-form-input v-model="form.email" type="email" placeholder="E-mail" />
            <b-form-input v-model="form.password" type="password" placeholder="Senha" autocomplete="on" />
            <NuxtLink to="/forgot" class="my-2">
              Esqueceu sua senha?
            </NuxtLink>
            <b-button
              type="submit"
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
        password: ''
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
    async onSubmit(event) {
      event.preventDefault()
      
      const login = await this.$axios.post("http://localhost:5000/api/login", this.form)

      if(login.data.success) {
        localStorage.removeItem('token')
        
        if(!localStorage.getItem('token')) {
          localStorage.setItem('token', login.data.token)
          if(localStorage.getItem('token')) {
            this.$nuxt.$options.router.push('/dashboard')
          }
        }
      }
    },
  },
}
</script>

<style></style>

<template>
  <div class="home">
    <b-row class="header center">
      <b-col
        xl="8"
        lg="8"
        md="12"
        sm="12"
        class="center p-0"
      >
        <h2 class="center mt-5">
          Seu pastel favorito
          <strong>com o melhor sabor!</strong>
        </h2>

        <b-form-input
          list="adress"
          type="text"
          class="mx-5"
        ></b-form-input>

        <datalist id="adress">
          <option value="Pastel de Carne">1</option>
          <option value="Pastel de ">Pastel de frango</option>
        </datalist>

        <img src="~/assets/images/pstl.png" alt="Pastel" class="img-home" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="center my-5">
        <h2>Promoções do dia</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="center">
        <div class="card-list">
          <article class="card">
            <figure class="card-image">
              <img src="https://t1.rg.ltmcdn.com/pt/images/1/9/2/recheio_de_carne_moida_para_pastel_8291_orig.jpg" alt="An orange painted blue, cut in half laying on a blue background" />
            </figure>
            <div class="card-header" @click="openDashboard()">
              <a href="#">Pastel de Carne</a>
              <button class="icon-button">
                <font-icon icon="hand-point-up"></font-icon>

              </button>
            </div>
          </article>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import logo from '~/assets/images/logo.png'
import { wishlistService } from '~/services'
import FotoPedido from '~/assets/images/pedido.png'
import FotoMenu from '~/assets/images/menu.png'

export default {
  name: 'Home',
  data () {
    return {
      logo,
      itens: [],
      FotoPedido,
      FotoMenu,
      token: 'abc'
    }
  },
  computed: {
  },
  mounted () {
    wishlistService.find().then(response => {
      this.itens = response.data
    })
  },
  methods: {
    ...mapActions({
      alterLogin: 'modal/alterLogin'
    }),
    openDashboard () {
      if (localStorage.getItem('token') === 'abc') {
        this.$router.push('/dashboard')
      } else {
        const body = document.querySelector('body')
        this.alterLogin(true)
        body.classList.add('modal-open')
      }
    }
  }
}
</script>


<template>
  <b-row class="header center">
    <b-col xl="8" lg="8" md="12" sm="12" class="center p-0">
      <h2 class="center mt-5">
        Seu pastel favorito
        <strong>com o melhor sabor!</strong>
      </h2>

      <div class="d-flex justify-content-around m-3">
        <b-form-input v-model="item" list="adress" type="text" class="m-0"></b-form-input>
        <b-button
          variant="warning"
          @click="addItemSacola()"
        >
         Adicionar
        </b-button>
      </div>

      <datalist id="adress">
        <option v-for="(i, idx) in itens" :key="idx" :value="i.nome" />
      </datalist>

      <img src="~/assets/images/pstl.png" alt="Pastel" class="img-home" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  data () {
    return {
      itens: [],
      item: null
    }
  },
  mounted () {
    this.findItens()
  },
  methods: {
    async findItens() {
      const urlApi = 'https://murmuring-journey-61233.herokuapp.com/api'
      this.spinner = true
      const lista = await this.$axios.get(`${urlApi}/wishlists`)

      this.itens = lista.data
      this.spinner = false
    },
    addItemSacola () {
      for (const i of this.itens) {
        if(i.nome === this.item) {
          this.$store.dispatch('wishlist/setItem', i)
          this.$swal.fire({
            icon: 'success',
            text: 'Item adicionado',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          })
          this.$nuxt.$options.router.push('/dashboard')
        }
      }
    },
    searchItem (item) {
      window.console.log(item)
    }
  }
}
</script>

<style></style>

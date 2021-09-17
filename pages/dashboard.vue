<template>
  <div>
    <!-- Tradicionais -->
    <b-row>
      <b-col class="center">
        <b-row>
          <div class="col-12">
            <h1 class="m-5">Tradicionais</h1>
          </div>
        </b-row>
        <b-row class="p-5">
          <b-col
            v-for="(wish, idx) in tipos.tradicionais"
            :key="idx"
            xl="4"
            lg="4"
            md="6"
            sm="12"
            class="d-flex justify-content-center py-3"
          >
            <DashboardCard
              :id="wish._id"
              :img="wish.img"
              :nome="wish.nome"
              :descricao="wish.descricao"
              :valor="wish.valor"
              :itens-lista="itensLista"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- Especiais -->
    <b-row>
      <b-col class="center">
        <b-row>
          <div class="col-12">
            <h1 class="m-5">Especiais</h1>
          </div>
        </b-row>
        <b-row class="p-5">
          <b-col
            v-for="(wish, idx) in tipos.especiais"
            :key="idx"
            xl="4"
            lg="4"
            md="6"
            sm="12"
            class="d-flex justify-content-center py-3"
          >
            <DashboardCard
              :id="wish._id"
              :img="wish.img"
              :nome="wish.nome"
              :descricao="wish.descricao"
              :valor="wish.valor"
              :itens-lista="itensLista"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { wishlistService } from '../../services'

export default {
  data() {
    return {
      itensLista: [],
      spinner: false,
      tipos: {
        tradicionais: [],
        especiais: [],
      },
    }
  },
  computed: {
    ...mapGetters({
      wishlist: 'wishlist/wishlist',
      subtotal: 'wishlist/subtotal',
    })
  },
  mounted() {
    this.findItens()
  },
  methods: {
    async findItens() {
      const urlApi = 'https://murmuring-journey-61233.herokuapp.com/api'
      this.spinner = true
      const lista = await this.$axios.get(`${urlApi}/wishlists`)

      this.itensLista = lista.data

      this.itensLista.forEach((element) => {
        if (element.tipo === 1) {
          this.tipos.tradicionais.push(element)
        } else if (element.tipo === 2) {
          this.tipos.especiais.push(element)
        }
      })
      this.spinner = false
    },
    openComplemento() {
      this.$root.$emit('bv::show::modal', 'complemento')
    },
  },
}
</script>

<style></style>

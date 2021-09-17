<template>
  <div class="card">
    <img :src="img" :alt="nome" height="200" width="300" />
    <h2>
      {{ nome }}
    </h2>
    <span>
      {{ descricao }}
    </span>
    <div class="d-flex justify-content-between">
      <span>R$ {{ valor }},00</span>
      <button class="icon-button" @click="adicionarItem">
        <Font-awesome-icon :icon="faCartPlus"></Font-awesome-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    nome: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    valor: {
      type: Number,
      required: true
    },
    itensLista: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      wishlist: 'wishlist/wishlist',
      subtotal: 'wishlist/subtotal',
    }),
    faCartPlus() {
      return faCartPlus
    },
  },
  methods: {
    adicionarItem () {
      window.console.log(this.id)
      if (this.wishlist.length !== 0) {
        let itemAdicionado = false

        for (let index = 0; index < this.wishlist.length; index++) {
          const element = this.wishlist[index]

          if (element._id === this.id) {
            itemAdicionado = true
            this.$swal.fire({
              icon: 'info',
              text: 'Item já adicionado no carrinho',
              showClass: {
                popup: 'animate__animated animate__fadeInDown',
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
              },
            })
          }
        }

        if (!itemAdicionado) {
          for (let index = 0; index < this.itensLista.length; index++) {
            const lista = this.itensLista[index]

            if (lista._id === this.id) {
              this.$store.dispatch('wishlist/setItem', lista)
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
            }
          }
        }
      } else {
        for (let index = 0; index < this.itensLista.length; index++) {
          const lista = this.itensLista[index]

          if (lista._id === this.id) {
            this.$store.dispatch('wishlist/setItem', lista)
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
            this.$root.$emit('bv::toggle::collapse', 'sacola')
          }
        }
      }
    },
  },
}
</script>

<style></style>

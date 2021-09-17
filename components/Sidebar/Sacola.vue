<template>
  <b-sidebar id="sacola" title="SACOLA" right shadow backdrop>
    <template #header="{ hide }">
      <Font-awesome-icon
        :icon="faTimes"
        style="font-size: 1rem; color: gray"
        @click="hide"
      ></Font-awesome-icon>
      <div class="center w-100">
        <p>Sacola</p>
      </div>
    </template>
    <b-container v-if="quantidade">
      <b-row class="mt-3">
        <b-col class="box">
          <b-card v-for="(wish, idx) in wishlist" :key="idx + idx">
            <b-row>
              <b-col cols="4" class="center p-0">
                <img :src="wish.img" width="50" height="50" :alt="wish.nome" />
              </b-col>
              <b-col cols="8">
                <b-row>
                  <b-col cols="12" class="d-flex justify-content-between">
                    <p>{{ wish.nome }}</p>
                    <Font-awesome-icon
                      :icon="faTrash"
                      @click="deleteItem(wish._id)"
                    ></Font-awesome-icon>
                  </b-col>
                  <b-col cols="12" class="d-flex justify-content-between">
                    <p>R$ {{ wish.valor * wish.quantidade }},00</p>
                    <Font-awesome-icon
                      v-b-modal.complementos
                      :icon="faPlusCircle"
                      style="
                        cursor: pointer;
                        color: #fecc00;
                        border-radius: 50%;
                        font-size: 1.5rem;
                      "
                      @click="openComplemento(wish._id)"
                    ></Font-awesome-icon>
                  </b-col>
                  <b-col cols="12">
                    <div
                      class="
                        d-flex
                        justify-content-between
                        align-items-center
                        border
                        rounded-pill
                        p-1
                      "
                    >
                      <Font-awesome-icon
                        :icon="faMinus"
                        style="cursor: pointer"
                        @click="minus(wish._id)"
                      ></Font-awesome-icon>
                      <p class="p-0 m-0">
                        {{ wish.quantidade }}
                      </p>
                      <Font-awesome-icon
                        :icon="faPlus"
                        style="cursor: pointer"
                        @click="plus(wish._id)"
                      ></Font-awesome-icon>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <div v-else class="center">Sem itens no carrinho :(</div>
    <template #footer>
      <div v-if="quantidade" class="p-2">
        <b-row class="my-2">
          <b-col cols="12">
            <b-form-textarea
              class="form-control-textarea"
              rows="2"
              placeholder="Quer retirar algo? Coloque aqui."
            ></b-form-textarea>
          </b-col>
        </b-row>
        <div class="d-flex justify-content-between">
          <p>{{ quantidade }} produtos</p>
          <p>R$ {{ subtotal }},00</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>Frete</p>
          <p>R$ {{ frete }},00</p>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <p>Total a pagar</p>
          <p>R$ {{ frete + subtotal }},00</p>
        </div>
        <b-button variant="warning" block>Finalizar pedido</b-button>
      </div>
    </template>
  </b-sidebar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  faTimes,
  faTrash,
  faMinus,
  faPlus,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      frete: 10,
    }
  },
  computed: {
    ...mapGetters({
      wishlist: 'wishlist/wishlist',
      subtotal: 'wishlist/subtotal',
      quantidade: 'wishlist/quantidadeProdutos',
    }),
    faMinus() {
      return faMinus
    },
    faPlus() {
      return faPlus
    },
    faPlusCircle() {
      return faPlusCircle
    },
    faTimes() {
      return faTimes
    },
    faTrash() {
      return faTrash
    },
  },
  methods: {
    ...mapActions({
      decrease: 'wishlist/decrease',
      deleteWish: 'wishlist/clearItem',
      increase: 'wishlist/increase',
    }),
    deleteItem(id) {
      this.$swal
        .fire({
          text: 'Deseja excluir produto do carrinho?',
          showCancelButton: true,
          confirmButtonText: 'Excluir',
        })
        .then((result) => {
          window.console.log(result)
          if (result.value) {
            this.$swal.fire({
              text: 'Excluído',
              icon: 'success',
            })
            this.deleteWish(id)
          }
        })
    },
    minus(id) {
      this.decrease(id)
    },
    openComplemento (id) {
      window.console.log(id)
      this.$store.dispatch('modal/alterComplemento', id)
    },
    plus(id) {
      this.increase(id)
    },
  },
}
</script>

<style scoped>
.card-body {
  padding: 0;
  margin: 0;
}
</style>

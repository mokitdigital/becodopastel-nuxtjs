<template>
  <b-modal id="complementos" title="BootstrapVue" hide-footer>
    <template #modal-header="{ hide }">
      <Font-awesome-icon
        :icon="faTimes"
        style="font-size: 1rem; color: gray"
        @click="hide"
      ></Font-awesome-icon>
      <div class="center w-100">
        <p>Coloque os complementos</p>
      </div>
    </template>
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="boxes">
            <div
              v-for="(list, idx) in listaComplementos"
              :key="idx"
              class="my-3"
            >
              <input
                :id="idx + list.text"
                v-model="list.value"
                type="checkbox"
                :value="list.value"
              />
              <label :for="idx + list.text">{{ list.text }}</label>
            </div>
            <b-button variant="warning" @click="addComplementos"
              >Adicionar Complementos</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
export default {
  data() {
    return {
      listaComplementos: [
        { id: 1, text: 'Queijo', value: false },
        { id: 2, text: 'Cheddar', value: false },
        { id: 3, text: 'Catupiry', value: false },
        { id: 4, text: 'Orégano', value: false },
        { id: 5, text: 'Tomate', value: false },
        { id: 6, text: 'Manjericão', value: false },
        { id: 7, text: 'Ovo', value: false },
        { id: 8, text: 'Milho', value: false },
        { id: 9, text: 'Azeitona', value: false },
        { id: 10, text: 'Cebola Caramelizada', value: false },
        { id: 11, text: 'Tempero Verde', value: false },
      ],
    }
  },
  computed: {
    ...mapGetters({
      idComplemento: 'modal/idComplemento',
      wishlist: 'wishlist/wishlist'
    }),
    faTimes() {
      return faTimes
    },
  },
  mounted () {
    for (const wish of this.wishlist) {
      for (const lista of this.listaComplementos) {
        for (const comp of wish.complemento) {
          if(comp.id === lista.id) {
            this.listaComplementos[lista.id].value = true
          }
        }
      }
    }
  },
  methods: {
    ...mapActions({
      plusComplemento: 'wishlist/complemento',
    }),
    addComplementos() {
      const complementos = []

      for (const lista of this.listaComplementos) {
        window.console.log(lista)
        if (lista.value) {
          complementos.push({
            text: lista.text,
            id: lista.id
          })
        }
      }

      this.plusComplemento({
        id: this.idComplemento,
        complemento: complementos
      })

      this.$root.$emit('bv::toggle::modal', 'complementos')
    },
  },
}
</script>

<style></style>

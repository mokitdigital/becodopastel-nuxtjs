<template>
  <div class="home">
    <IndexHeader />

    <IndexCard />

    <ModalsLogin />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import logo from '~/assets/images/logo.png'
import FotoPedido from '~/assets/images/pedido.png'
import FotoMenu from '~/assets/images/menu.png'

export default {
  name: 'Home',
  data () {
    return {
      logo,
      FotoPedido,
      FotoMenu,
      token: 'abc'
    }
  },
  computed: {
  },
  methods: {
    ...mapActions({
      alterLogin: 'modal/alterLogin'
    })
  }
}
</script>


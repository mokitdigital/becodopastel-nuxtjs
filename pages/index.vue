<template>
  <div class="home">
    <IndexHeader />

    <IndexCard />

    <ModalsLogin />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
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


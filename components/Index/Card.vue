<template>
  <div>
    <b-row>
      <b-col class="center my-5">
        <h2>Promoções do dia</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="center">
        <div class="card">
          <article>
            <figure class="card-image">
              <img
                src="https://t1.rg.ltmcdn.com/pt/images/1/9/2/recheio_de_carne_moida_para_pastel_8291_orig.jpg"
                alt="An orange painted blue, cut in half laying on a blue background"
                height="200"
              />
            </figure>
            <div class="card-header" @click="openDashboard()">
              <a href="#">Pastel de Carne</a>
              <button class="icon-button">
                <Font-awesome-icon :icon="faHandPointUp"></Font-awesome-icon>
              </button>
            </div>
          </article>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'
export default {
  computed: {
    faHandPointUp () {
      return faHandPointUp
    }
  },
  methods: {
    openDashboard () {
      this.$nuxt.$options.router.push('/dashboard')
    }
  }
}
</script>

<style></style>

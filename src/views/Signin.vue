<template>
  <div class="fff-signin">
    <form v-if="!signinSuccess">
      <div>
        <input class="fff-signin__input fff-input"
              v-model="model.email"
              name="email"
              type="email"
              placeholder="Email"/>
      </div>
      <div>
        <input class="fff-signin__input fff-input"
              v-model="model.password"
              name="password"
              type="password"
              placeholder="Password"/>
      </div>
      <div>
        <button @click="submit">sign in</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'signin',
  data() {
    return {
      model: {
        email: null,
        name: null,
        ortsgruppe_id: null,
        password: null
      },
      signinSuccess: false
    };
  },
  computed: {
    localgroups() {

      return this.$store.getters['localgroups/getItems'];
    }
  },
  components: {
   
  },
  methods: {
    submit(e) {

      e.preventDefault();

      this.$store.dispatch('signin', this.model)
        .then((response) => {

          console.log(response);
          
        })
        .catch((err) => {
          console.log(err)
          this.$router.push('demos');
        })
    }
  }
};
</script>

<style lang="scss">

</style>

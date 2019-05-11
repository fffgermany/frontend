<template>
  <div class="fff-signin main-container">
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
        password: null,
      },
      signinSuccess: false,
    };
  },
  computed: {
    localgroups() {
      return this.$store.getters['localgroups/getItems'];
    },
  },
  components: {

  },
  methods: {
    submit(e) {
      e.preventDefault();

      this.$store.dispatch('signin', this.model)
        .then(() => this.$router.push('demos'))
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>


<style scoped>
.fff-signin {
  width: 75%;
  margin: auto;
  margin-top: 3cm;
  border: 2px solid #1B7340;
  padding: 15px 15px 15px 15px;
  border-radius: 4px;
  -webkit-appearance: none;
}
</style>

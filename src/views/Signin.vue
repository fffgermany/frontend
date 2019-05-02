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


<style lang="scss">

.fff-signin{
  width: 75%;
  margin: auto;
  margin-top: 3cm;
  border: 2px solid #1B7340;
  padding: 15px 15px 15px 15px;
  border-radius: 4px;
  box-sizing: border-box;
  -webkit-appearance: none;

  button {
    box-sizing: border-box;
    background: #1B7340;
    color: white !important;
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 4px;
    text-transform: capitalize;
    border: none;
    outline: none;

    &:hover{
      background: #1DA64A;
      border: none;
    }
  }

  input{
    box-sizing: border-box;
    border: 2px solid #1B7340;
    border-radius: 4px;
    margin-top: 5px;
    outline: none;
    width: 100%;
    padding: 10px 0px 10px 10px;

    &:focus{
      background: rgba(27,115,64,0.5);
    }
  }

@media only screen and (min-width: 768px) {
  width: 35%
 }
}

</style>

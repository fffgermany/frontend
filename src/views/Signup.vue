<template>
  <div class="fff-signup">
    <form v-if="!signupSuccess">
      <div>
        <input class="fff-signup__input fff-input"
              v-model="model.email"
              name="email"
              type="email"
              placeholder="Email"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="model.name"
              name="name"
              type="text"
              placeholder="Name"/>
      </div>
      <div>
        <select class="fff-signup__input fff-input"
              v-model="model.ortsgruppe_id"
              name="ortsgruppe"
              placeholder="Ortsgruppe">
          <option v-for="localgroup in localgroups" v-bind:value="localgroup.id" v-bind:key="localgroup.id">
            {{ localgroup.name }}
          </option>
        </select>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="model.password"
              name="password"
              type="password"
              placeholder="Password"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="model.password"
              name="password_repeat"
              type="password"
              placeholder="Password wiederholen"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="model.secret"
              name="secret"
              type="text"
              placeholder="Secret"/>
      </div>
      <div>
        <button @click="submit">registrieren</button>
      </div>
    </form>
    <div v-if="signupSuccess">
      Wir haben dir eine Email geschickt um deine Email-Adresse zu verifizieren. Wenn deine Email-Adresse verifiziert ist schalten wir dein Konto frei.
    </div>
  </div>
</template>

<script>

export default {
  name: 'signup',
  data() {
    return {
      model: {
        email: null,
        name: null,
        ortsgruppe_id: null,
        password: null
      },
      signupSuccess: false
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

      console.log(this);
      this.$store.dispatch('signup', this.model)
        .then((response) => {

          console.log(response);
          
        })
        .catch((err) => {
          console.log(err)
          this.signupSuccess = true;
        })
    }
  },
  beforeCreate() {

    this.$store.dispatch('localgroups/getList');
  }
};
</script>

<style lang="scss">

</style>

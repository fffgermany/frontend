<template>
  <div class="fff-signup main-container">
    <form v-if="!signupSuccess">
      <div>
        <input class="fff-signup__input fff-input"
              v-model="model.email"
              name="email"
              type="email"
              placeholder="Email"/>
        <span class="fff-input__error">{{error.email}}</span>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="model.name"
              name="name"
              type="text"
              placeholder="Name"/>
        <span class="fff-input__error">{{error.name}}</span>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="model.description"
              name="description"
              type="text"
              placeholder="Beschreibung"/>
        <span class="fff-input__error">{{error.description}}</span>
      </div>
      <div>
        <select class="fff-signup__input fff-input"
              v-model="model.ortsgruppe_id"
              name="ortsgruppe">
              <option value="null" disabled hidden>Ortsgruppe</option>
              <option v-for="localgroup in localgroups" v-bind:value="localgroup.id" v-bind:key="localgroup.id">
            {{ localgroup.name }}
          </option>
        </select>
        <span class="fff-input__error"></span>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="model.password"
              name="password"
              type="password"
              placeholder="Password"/>
        <span class="fff-input__error">{{error.password}}</span>
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
              v-model="model.thesecret"
              name="thesecret"
              type="text"
              placeholder="Secret"/>
        <span class="fff-input__error">{{error.thesecret}}</span>
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
        password: null,
        thesecret: null,
      },
      signupSuccess: false,
      error: {},
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

      this.$store.dispatch('signup', this.model)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          this.error = err.response.data;
        });
    },
  },
  beforeCreate() {
    this.$store.dispatch('localgroups/getList');
  },
};
</script>

<style scoped>
.fff-signup{
    width: 75%;
    margin: auto;
    margin-top: 3cm;
    border: 2px solid #1B7340;
    padding: 15px 15px 15px 15px;
    border-radius: 4px;
    box-sizing: border-box;
    -webkit-appearance: none;
}


</style>

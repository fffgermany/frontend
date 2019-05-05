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
        thesecret: null
      },
      signupSuccess: false,
      error: {}
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
        })
    }
  },
  beforeCreate() {
    this.$store.dispatch('localgroups/getList');
  },
};
</script>

<style lang="scss">
.fff-signup{
  width: 75%;
  margin: auto;
  margin-top: 3cm;
  border: 2px solid #1B7340;
  padding: 15px 15px 15px 15px;
  border-radius: 4px;
  box-sizing: border-box;
  -webkit-appearance: none;

  button{
    box-sizing: border-box;
    background: #1B7340;
    color: white !important;
    width: 100%;
    padding: 12px;
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

  input, select {
    box-sizing: border-box;
    border: 2px solid #1B7340;
    border-radius: 4px;
    margin-top: 5px;
    outline: none;
    width: 100%;
  }

  input{
    padding: 10px;

    &:focus{
      background: rgba(27,115,64,0.5);
    }
  }

  select{
    padding: 9.25px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  @media only screen and (min-width: 768px) {
    width: 35%
  }
}


</style>

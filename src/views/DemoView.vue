<template>
  <div class="fff-demo-view">
    <form>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="demo.ort"
              name="ort"
              type="text"
              :disabled="disabled"
              placeholder="Ort"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="demo.zeit"
              name="zeit"
              type="datetime"
              :disabled="disabled"
              placeholder="Zeit"/>
      </div>
      <div>
        <select class="fff-signup__input fff-input"
              v-model="demo.ortsgruppe_id"
              name="ortsgruppe"
              :disabled="disabled"
              placeholder="Ortsgruppe">
          <option v-for="localgroup in localgroups" v-bind:value="localgroup.id" v-bind:key="localgroup.id">
            {{ localgroup.name }}
          </option>
        </select>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="demo.beschreibung"
              name="beschreibung"
              type="text"
              :disabled="disabled"
              placeholder="Beschreibung"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="demo.link"
              name="link"
              type="text"
              :disabled="disabled"
              placeholder="Link"/>
      </div>
      <div>
        <button @click="submit">speichern</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'demos',
  data() {
    return {
      filterByAdminID: false
    };
  },
  computed: {
    localgroups() {

      return this.$store.getters['localgroups/getItems'];
    },
    demo() {

      let demo = this.$store.getters['demos/getItemByID'](this.$router.currentRoute.params.id);

      if (demo) {
        return demo;
      }

      return {};
    },
    disabled() {
      
      return true;
    }
  },
  components: {
   
  },
  methods: {
    submit(event) {

      event.preventDefault();
    }
  },
  beforeCreate() {

    this.$store.dispatch('demos/getList');
    this.$store.dispatch('localgroups/getList');
  }
};
</script>

<style lang="scss">

</style>

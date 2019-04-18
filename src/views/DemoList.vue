<template>
  <div class="fff-demo-list">
    <div v-if="user">
        <input type="checkbox" v-model="filterByAdminID" class="fff-input"/>
        Zeige nur meine Demos
    </div>
    <ul v-for="demo in demos" v-bind:key="demo.id">
        
        <router-link tag="li" :to="'/demos/' + demo.id">
            <a>
                {{demo.ort}} (OG: {{localgroupName(demo)}}) am {{demo.zeit}}
            </a>
        </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'demoList',
  data() {
    return {
      filterByAdminID: false
    };
  },
  computed: {
    localgroups() {

      return this.$store.getters['localgroups/getItems'];
    },
    demos() {

      return this.$store.getters['demos/getItems'];
    },
    user() {
      return this.$store.getters['getUser'];
    }
  },
  components: {
   
  },
  methods: {
    localgroupName(demo) {

      const localgroup = this.localgroups.find((localgroup) => localgroup.id === demo.ortsgruppe_id);

      if (localgroup) {
        return localgroup.name;
      } 

      return '';
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

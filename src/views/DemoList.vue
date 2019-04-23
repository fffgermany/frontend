<template>
  <div class="fff-demo-list">
    <div v-if="user">
        <input type="checkbox" v-model="filterByAdminID" class="fff-input"/>
        Zeige nur meine Demos
    </div>

    <vue-virtual-table
      :enableExport="true"
      :height="windowHeight"
      :config="tableConfig"
      :data="demos">
      <template slot-scope="scope" slot="actionCommon">
        <!-- ToDo add btns for  demo admin shortcuts (delete, edit, copy) -->
        <button @click="show(scope.index, scope.row)">Details anzeigen</button>
      </template>
    </vue-virtual-table>
  </div>
</template>

<script>

import VueVirtualTable from 'vue-virtual-table'

export default {
  name: 'demoList',

  data() {
    return {
      filterByAdminID: false,
      tableConfig: [
        { prop: 'ort', name: 'Treffpunkt', sortable: true, searchable: true },
        { prop: 'ortsgruppeName', name: 'Ortsgruppe', sortable: true, searchable: true },
        { prop: 'zeit', name: 'Startzeit', sortable: true, searchable: true },
        { prop: 'teilnehmerzahl', name: 'Teilnehmerzahl', sortable: true, searchable: true },
        { prop: '_action', name: ' ', actionName: 'actionCommon' }
      ]
    };
  },
  computed: {
    localgroups() {

      return this.$store.getters['localgroups/getItems'];
    },
    demos() {

      let demos = this.$store.getters['demos/getItems'];

      return this.$store.getters['demos/getItems'].map((demo) => {

        if (this.localgroups) {
          
          const localgroup = this.localgroups.find((localgroup) => localgroup.id === demo.ortsgruppe_id);

          demo.ortsgruppeName = localgroup ? localgroup.name : '';
        }

        return demo;
      });
    },
    user() {
      return this.$store.getters['getUser'];
    },
    windowHeight() {

      return window.innerHeight * 0.9;
    }
  },
  components: {
    VueVirtualTable
  },
  methods: {
    localgroupName(demo) {

      const localgroup = this.localgroups.find((localgroup) => localgroup.id === demo.ortsgruppe_id);

      if (localgroup) {
        return localgroup.name;
      } 

      return '';
    },
    show(index, row) {

      this.$router.push('demos/' + row.ortsgruppe_id);
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

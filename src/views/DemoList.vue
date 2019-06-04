<template>
    <div class="fff-demo-list main-container">
        <div v-if="user">
            <div>
                <input type="checkbox" v-model="filterByAdminID" class="fff-input"/>
                Zeige nur meine Demos
            </div>
            <div>
                <button @click="addNewDemo">Neue Demo anlegen</button>
            </div>
        </div>

        <vue-virtual-table
            :enableExport="true"
            :height="windowHeight"
            :config="tableConfig"
            :data="demos">
            <template slot-scope="scope" slot="actionCommon">
                <!-- ToDo add btns for  demo admin shortcuts (delete, edit, copy) -->
                <button @click="goToDemo(scope.row.id)">Details anzeigen</button>
            </template>
        </vue-virtual-table>
    </div>
</template>

<script>

import VueVirtualTable from 'vue-virtual-table';

export default {
    name: 'demoList',

    data() {
        return {
            filterByAdminID: false,
            tableConfig: [
                {
                    prop: 'ort', name: 'Treffpunkt', sortable: true, searchable: true,
                },
                {
                    prop: 'ortsgruppeName', name: 'Ortsgruppe', sortable: true, searchable: true,
                },
                {
                    prop: 'zeit', name: 'Startzeit', sortable: true, searchable: true,
                },
                {
                    prop: 'teilnehmerzahl', name: 'Teilnehmerzahl', sortable: true, searchable: true,
                },
                {
                    prop: '_action', name: ' ', actionName: 'actionCommon'
                },
            ],
        };
    },

    components: { VueVirtualTable },

    computed: {
        localgroups() {
            return this.$store.getters['localgroups/getItems'];
        },
        demos() {
            const demos = this.$store.getters['demos/getItems'];

            return this.$store.getters['demos/getItems'].map((demo) => {
                if (this.localgroups) {
                    const localgroup = this.localgroups.find(localgroup => localgroup.id === demo.ortsgruppe_id);
                    demo.ortsgruppeName = localgroup ? localgroup.name : '';
                }

                return demo;
            });
        },

        user() {
            return this.$store.getters['getUser']();
        },

        windowHeight() {
            return window.innerHeight * 0.7;
        },
    },
    methods: {
        addNewDemo() {
            this.$router.push({ name: 'demoView', params: { id: 'new' } });
        },

        goToDemo(id) {
            this.$router.push({ name: 'demoView', params: { id: id } });
        },
    },
    beforeCreate() {
        this.$store.dispatch('demos/getList');
        this.$store.dispatch('localgroups/getList');
    },
};
</script>

<style scoped>

</style>

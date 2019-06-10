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


        <DemoPreview v-for="demo in demos" :demo="demo" :key="demo.id"/>
    </div>
</template>

<script>
import DemoPreview from '@/components/DemoPreview'

export default {
    name: 'demoList',

    data() {
        return {
            filterByAdminID: false,
        }
    },

    components: { DemoPreview },

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
        }
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

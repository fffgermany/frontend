<template>
    <div class="fff-demo-preview" :class="{ open }">
        <router-link class="left" :to="{ name: 'demoView', params: { id: demo.id } }">
            <p class="place-time">{{ demo.ort }} am {{ demo.zeit }}</p>

            <div v-if="open">
                <p>Ortsgruppe: {{ localgroup.name }}</p>
                <p>Teilnehmerzahl: {{ demo.teilnehmerzahl }}</p>
            </div>
        </router-link>

        <div class="right" @click="toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fff-demo-preview',

    props: ['demo'],

    data() {
        return {
            open: false
        }
    },

    methods: {
        toggle() {
            this.open = !this.open
        }
    },

    computed: {
        localgroup() {
            return this.$store.getters['localgroups/getItemByID'](this.demo.ortsgruppe_id);
        }
    }
}
</script>

<style scoped>
.fff-demo-preview {
    display: block;
    background: rgb(250, 250, 250);
    margin-bottom: 10px;

    display: grid;
    grid-template-columns: 1fr auto;
}

.fff-demo-preview:hover {
    background: rgb(240, 240, 240);
}

.fff-demo-preview p {
    color: black;
}

.fff-demo-preview:hover .place-time {
    color: var(--primary-color);
}

.left {
    padding: 10px;
}

.fff-demo-preview.open .place-time {
    font-weight: bold;
}

.right {
    display: grid;
    place-items: center;
    padding: 0 10px;
}

.right svg {
    transition: transform 0.25s ease-in-out;
    cursor: pointer;
}

.right svg:hover {
    fill: var(--primary-color);
}

.open .right svg {
    transform: rotate(90deg)
}
</style>
<template>
  <div class="fff-demo-view main-container">
    <ul class="fff-demo-view__tab-header">
      <li class="fff-demo-view__tab-link" :class="{ active: tab == 'demo' }" @click="tab = 'demo'">Demo</li>
      <li class="fff-demo-view__tab-link" :class="{ active: tab == 'ortsgruppe' }" @click="tab = 'ortsgruppe'">Ortsgruppe</li>
      <li class="fff-demo-view__tab-link" :class="{ active: tab == 'propaganda' }" @click="tab = 'propaganda'">Demopropaganda</li>
    </ul>
    <form v-if="tab === 'demo'" class="fff-demo-view__tab fff-demo-view__tab--demo">
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
              type="datetime-local"
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
              v-model="demo.teilnehmerzahl"
              name="teilnehmerzahl"
              type="number"
              :disabled="disabled"
              placeholder="Teilnehmerzahl"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="demo.beschreibung"
              name="beschreibung"
              type="textarea"
              :disabled="disabled"
              placeholder="Beschreibung"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="demo.link"
              name="link"
              type="url"
              :disabled="disabled"
              placeholder="Link"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="demo.lat"
              name="lat"
              type="number"
              :disabled="disabled"
              placeholder="Lat"/>
        <input class="fff-signup__input fff-input"
              v-model="demo.lng"
              name="lng"
              type="number"
              :disabled="disabled"
              placeholder="Lng"/>
      </div>
      <div v-if="!disabled">
        <button @click="submit($event, 'demos', demo)">speichern</button>
        <button @click="erase($event, 'demos', demo)">löschen</button>
      </div>
    </form>
    <form v-if="tab === 'propaganda'" class="fff-demo-view__tab fff-demo-view__tab--propaganda">
      <div>
        <input class="fff-signup__input fff-input"
              v-model="propaganda.name"
              name="name"
              type="text"
              :disabled="disabled"
              placeholder="Name"/>
      </div>
      <div>
        <textarea class="fff-signup__input fff-input"
              v-model="propaganda.content"
              name="content"
              :disabled="disabled"
              placeholder="Content"/>
      </div>
      <div v-if="!disabled">
        <button @click="submit($event, 'propaganda', propaganda)">speichern</button>
      </div>
    </form>
    <form v-if="tab === 'ortsgruppe'" class="fff-demo-view__tab fff-demo-view__tab--ortsgruppe">
      <div>
        <input class="fff-signup__input fff-input"
              v-model="ortsgruppe.name"
              name="name"
              type="text"
              :disabled="disabled"
              placeholder="Name"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="ortsgruppe.lat"
              name="lat"
              type="number"
              :disabled="disabled"
              placeholder="Lat"/>
        <input class="fff-signup__input fff-input"
              v-model="ortsgruppe.lng"
              name="lng"
              type="number"
              :disabled="disabled"
              placeholder="Lng"/>
      </div>
      <div>
        <textarea class="fff-signup__input fff-input"
              v-model="ortsgruppe.description"
              name="description"
              :disabled="disabled"
              placeholder="Beschreibung"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="ortsgruppe.twitter"
              name="twitter"
              type="text"
              :disabled="disabled"
              placeholder="Twitter"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="ortsgruppe.facebook"
              name="facebook"
              type="text"
              :disabled="disabled"
              placeholder="Facebook"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="ortsgruppe.email"
              name="email"
              type="text"
              :disabled="disabled"
              placeholder="Email"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="ortsgruppe.telnr"
              name="telnr"
              type="text"
              :disabled="disabled"
              placeholder="Telefon Nummer"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="ortsgruppe.whatsapp"
              name="whatsapp"
              type="text"
              :disabled="disabled"
              placeholder="Whatsapp"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="ortsgruppe.telegram"
              name="telegram"
              type="text"
              :disabled="disabled"
              placeholder="Telegram"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="ortsgruppe.signalmsg"
              name="signalmsg"
              type="text"
              :disabled="disabled"
              placeholder="signalmsg"/>
      </div>
      <div>
        <input class="fff-signup__input fff-input"
              v-model="ortsgruppe.instagram"
              name="instagram"
              type="text"
              :disabled="disabled"
              placeholder="instagram"/>
      </div>
      <div v-if="!disabled">
        <button @click="submit($event, 'localgroups', ortsgruppe)">speichern</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'demos',
  data() {
    return {
      filterByAdminID: false,
      tab: 'demo',
    };
  },
  computed: {
    localgroups() {
      return this.$store.getters['localgroups/getItems'];
    },
    demo() {
      const demo = this.$store.getters['demos/getItemByID'](this.$router.currentRoute.params.id);

      if (demo) {
        return demo;
      }

      return {};
    },
    ortsgruppe() {
      if (this.demo && this.localgroups) {
        return this.localgroups.find(og => og.id === this.demo.ortsgruppe_id);
      }
    },
    propaganda() {
      const propagandaList = this.$store.getters['propaganda/getItems'];

      if (propagandaList.length > 0 && this.demo) {
        const propangada = propagandaList.find(propaganda => propaganda.demo === this.demo.id);

        if (propangada) {
          return propangada;
        }
      }

      return {
        demo: this.demo.id,
        ortsgruppe_id: this.demo.ortsgruppe_id,
      };
    },
    disabled() {
      const user = this.$store.getters.getUser();

      if (this.$route.params.id === 'new' || (user.user && user.user.id === this.demo.inserter_id)) {
        return false;
      }

      return true;
    },
  },
  components: {

  },
  methods: {
    submit(event, namespace, model) {
      event.preventDefault();

      if (model.id || model.id === 0) {
        this.$store.dispatch(`${namespace}/update`, model || this.demo);
      } else {
        this.$store.dispatch(`${namespace}/create`, model || this.demo);
      }
    },
    erase(event) {
      event.preventDefault();

      this.$store.dispatch(`${namespace}/delete`, this.demo)
        .then(() => {
          this.$router.push({ name: 'demoList' });
        });
    },
  },
  beforeCreate() {
    console.log(this);

    this.$store.dispatch('demos/getList');
    this.$store.dispatch('localgroups/getList');
    this.$store.dispatch('propaganda/getList');
  },
};
</script>

<style lang="scss">
.fff-demo-view__tab-header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 0;
  margin: 20px 0px 22px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

.fff-demo-view__tab-link {
  list-style-type: none;
  text-indent: 0;
  margin-bottom: -1px;
  color: #337ab7;
  margin-right: 2px;
  line-height: 1.4;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
  padding: 10px 15px;
  cursor: pointer;
}

.fff-demo-view__tab-link.active {
  color: #555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-color: transparent;
}

.fff-demo-view__tab-link:hover {
  background: #f3f3f3;
}
</style>

<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'App',
  computed: {
    ...mapGetters(['showLoading']),
  },
  async created() {
    let status = await this.pingServer();
    if (!status) {
      this.$q.notify({
        message: 'Error reaching server',
        position: 'top',
        color: 'negative',
      });
    }
  },
  watch: {
    showLoading(val) {
      if (val) {
        this.$q.loading.show({
          spinnerColor: 'primary',
          spinnerSize: 50,
          backgroundColor: 'white',
        });
      } else {
        this.$q.loading.hide();
      }
    },
  },
  methods: {
    ...mapActions(['pingServer']),
  },
});
</script>

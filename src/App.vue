<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'App',
  computed: {
    ...mapGetters(['showLoading']),
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
});
</script>

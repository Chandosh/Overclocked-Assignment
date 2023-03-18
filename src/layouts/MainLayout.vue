<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Assignment App </q-toolbar-title>
        <q-btn flat round dense icon="person">
          <q-tooltip> Profile </q-tooltip>
          <q-menu class="border-radius-8" style="min-width: 160px">
            <q-list class="fontSize16 lineHeight24 fontWeight500">
              <q-item
                v-ripple
                v-close-popup
                class="q-px-md q-py-sm text-primary"
              >
                <q-item-section>{{ userDetails.name }}</q-item-section>
              </q-item>
              <q-separator />
              <q-item v-ripple v-close-popup class="q-px-md q-py-sm">
                <q-item-section> {{ userDetails.email }} </q-item-section>
              </q-item>
              <q-separator />
              <q-item
                clickable
                v-ripple
                v-close-popup
                class="q-px-md q-py-sm"
                @click="logout()"
              >
                <q-item-section> Logout </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { deleteToken } from 'src/utils/auth';
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['userDetails']),
  },
  async created() {
    await this.getUserDetails();
  },
  methods: {
    ...mapActions(['getUserDetails']),
    logout() {
      deleteToken();
      this.$router.push({ name: 'login' });
    },
  },
});
</script>

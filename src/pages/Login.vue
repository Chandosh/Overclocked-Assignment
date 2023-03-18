<template>
  <q-page class="full-height full-width flex column flex-center">
    <q-card class="text-white bg-primary q-pa-md">
      <q-card-section>
        <div class="text-h6">Hi Guest</div>
        <div class="text-subtitle2">
          Set the Authorization token using the button below
        </div>
        <q-btn
          no-caps
          outline
          style="color: goldenrod"
          label="Set Authorization Token"
          class="q-mt-md bg-white"
          @click="setAuthorizationToken()"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { setToken } from 'src/utils/auth';
export default {
  name: 'Login',
  data() {
    return {
      authorization:
        '1251a1de9906a858d1fc697792a5f5a7065a5fe984a159b1d3c3bbea160aa39b',
    };
  },
  methods: {
    setAuthorizationToken() {
      setToken(this.authorization);
      this.$router.push({ name: 'applications' });
    },
  },
};
</script>

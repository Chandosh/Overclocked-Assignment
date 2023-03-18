<template>
  <q-page class="full-height full-width">
    <div class="flex column q-pa-md">
      <div class="heading">Loan Applications</div>
      <div
        v-if="loanApplications && loanApplications.length > 0"
        class="flex row-wrap"
      >
        <div
          v-for="(application, index) in loanApplications"
          :key="index"
          class="q-mt-md q-mr-md"
        >
          <q-card
            dark
            bordered
            class="bg-secondary application-card cursor-pointer"
            @click="loadLoanApplicationOffers(application)"
          >
            <q-card-section>
              <div class="text-h6">{{ application.university }}</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <div class="flex row content">
                <span class="title">Loan Amount : </span>
                <span>&nbsp;Rs&nbsp;{{ application.loan_amount }}</span>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'Application',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['loanApplications']),
  },
  async created() {
    await this.getUserLoanApplications();
  },
  methods: {
    ...mapActions(['getUserLoanApplications', 'resetUserLoanApplications']),
    loadLoanApplicationOffers(application) {
      let offerRoute = application.offers_url.split('/user');
      if (offerRoute[1]) {
        this.$router.push(offerRoute[1]);
      }
    },
  },
  async unmounted() {
    await this.resetUserLoanApplications();
  },
});
</script>
<style lang="scss" scoped>
.application-card {
  width: 280px;
  max-width: 400px;
}
</style>

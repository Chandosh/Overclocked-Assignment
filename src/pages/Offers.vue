<template>
  <q-page class="full-height full-width">
    <div class="flex column q-pa-md">
      <div class="heading">Loan Application Offers</div>
      <div v-if="loanOffers && loanOffers.length > 0" class="flex row-wrap">
        <div
          v-for="(loanOffer, index) in loanOffers"
          :key="index"
          class="q-mt-md q-mr-md"
        >
          <offer :loanOffer="loanOffer" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Offer from 'components/Offer.vue';
export default {
  name: 'Offers',
  data() {
    return {
      applicationId: this.$route.params.applicationId,
    };
  },
  components: {
    Offer,
  },
  computed: {
    ...mapGetters(['loanOffers']),
  },
  async created() {
    await this.getUserLoanApplicationOffers(this.applicationId);
  },
  methods: {
    ...mapActions([
      'getUserLoanApplicationOffers',
      'resetUserLoanApplicationOffers',
    ]),
  },
  async unmounted() {
    await this.resetUserLoanApplicationOffers();
  },
};
</script>

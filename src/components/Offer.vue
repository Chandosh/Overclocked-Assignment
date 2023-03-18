<template>
  <q-card dark bordered class="bg-secondary offer-card">
    <q-card-section>
      <img alt="logo" :src="loanOffer.bank_logo" class="bank-logo" />
    </q-card-section>
    <q-separator dark inset />
    <q-card-section>
      <div class="flex row content">
        <span class="title">Bank Name</span>
        <span>:&nbsp;{{ loanOffer.bank }}</span>
      </div>
      <div class="flex row content">
        <span class="title">Interest Rate</span>
        <span>:&nbsp;{{ loanOffer.interest_rate }}%</span>
      </div>
      <div class="flex row content">
        <span class="title">Tenure</span>
        <span>
          :&nbsp;{{ loanOffer.tenure }}&nbsp;{{
            loanOffer.tenure > 1 ? 'years' : 'year'
          }}
        </span>
      </div>
      <!-- <div class="content">{{ loanOffer.bank }}&nbsp;bank</div>
      <div class="content">{{ loanOffer.interest_rate }}&nbsp;%</div>
      <div class="content">{{ loanOffer.tenure }}&nbsp;year</div> -->
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Offer',
  props: {
    loanOffer: {
      type: Object,
    },
  },
});
</script>
<style lang="scss" scoped>
.offer-card {
  width: 280px;
}
.bank-logo {
  max-width: 250px;
  height: 50px;
}
.title {
  min-width: 120px;
}
</style>

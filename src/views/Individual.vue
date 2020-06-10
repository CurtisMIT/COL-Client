<template>
  <div class="container-main">
    <div v-if="
      individual.basic.length === 0
      || individual.earnings.length === 0
      || individual.expenses.length === 0
      || individual.growth.length === 0
      || individual.market.length === 0
      || individual.others.length === 0" class="container-main">
      <Loading/>
    </div>
    <div v-else class="container-main">
      <Header/>
      <Earnings/>    
      <Expenses/>
      <Market/>
      <div class="otherSubmission">Other Submissions in {{individual.basic[0].location}}</div>
        <div class="container-listing">
          <Grid
            v-if="individual.others.length !== 0"
            :type="'Others'"
            :listings="individual.others"/>
        </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Getter, Action } from 'vuex-class'
import { IndividualState } from '@/types/modules/individualTypes'
import Header from '@/components/IndividualPage/Header.vue'
import Earnings from '@/components/IndividualPage/Earnings.vue'
import Expenses from '@/components/IndividualPage/Expenses.vue'
import Market from '@/components/IndividualPage/Market.vue'
import Grid from '@/components/MainPage/ListingComponents/Grid.vue'
import Loading from '@/components/IndividualPage/Loading/Loading.vue'

const namespace = "individual"

@Component({
  components: {
    Loading,
    Header,
    Earnings,
    Expenses,
    Market,
    Grid,
  }
})

export default class Individual extends Vue {
    @State('individual') individual !: IndividualState
    @Getter('getBasic', { namespace }) getBasic!: IndividualState
    @Action('fetchBasic', { namespace }) fetchBasic!: () => void
    // @Action('fetchEarnings', { namespace }) fetchEarnings!: () => void
    // @Action('fetchGrowth', { namespace }) fetchGrowth!: () => void
    // @Action('fetchExpenses', { namespace }) fetchExpenses!: () => void
    @Action('fetchMarket', { namespace }) fetchMarket!: () => void
    @Action('fetchOthers', { namespace }) fetchOthers!: () => void
    @Action('resetIndividual', { namespace }) resetIndividual!: () => void

    @Watch('$route', { immediate: true, deep: true})
    onUrlChange() {      
      this.resetIndividual()
      this.fetchBasic()            
      this.fetchMarket()
      this.fetchOthers()     
      // this.fetchEarnings()
      // this.fetchGrowth()
      // this.fetchExpenses()     
    }   
     
}

</script>

<style scoped>
.container-main { 
  display: flex;
  flex-direction: column;    
     
}
.otherSubmission {
  margin: 85px auto 40px;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  width: 1055px;      
  color: #2A2C50
}
.container-listing {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 1100px; 
    /* border: 1px dotted black;    */
}


</style>
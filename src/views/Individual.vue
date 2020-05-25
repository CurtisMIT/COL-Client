<template>
  <div class="mainIndividual">
    <Header/>
    <Earnings/>    
    <Expenses/>
    <Market/>
  </div>
</template>

<script>

import Header from '@/components/IndividualPage/Header'
import Earnings from '@/components/IndividualPage/Earnings'
import Expenses from '@/components/IndividualPage/Expenses'
import Market from '@/components/IndividualPage/Market'

export default {
  name: 'Individual',
  components: {
    Header,
    Earnings,
    Expenses,
    Market
  }
}
</script>

<style scoped>
.mainIndividual { 
  display: flex;
  flex-direction: column;    
}
</style>
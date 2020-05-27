<template>
  <div class="mainIndividual">
    <Header/>
    <Earnings/>    
    <Expenses/>
    <!-- <Market/> -->
    <!-- <div class="otherSubmission">Other Submissions in X Area</div> -->
    <!-- <Listing/> -->
  </div>
</template>

<script>

import Header from '@/components/IndividualPage/Header'
import Earnings from '@/components/IndividualPage/Earnings'
import Expenses from '@/components/IndividualPage/Expenses'
import Market from '@/components/IndividualPage/Market'
import Listing from '@/components/MainPage/Listing'

export default {
  name: 'Individual',
  components: {
    Header,
    Earnings,
    Expenses,
    // Market,
    // Listing
  }
}
</script>

<style scoped>
.mainIndividual { 
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

</style>
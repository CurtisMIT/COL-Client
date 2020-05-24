<template>
  <div class="home">
    <Header/>
    <Earnings/>
  </div>
</template>

<script>

import Header from '@/components/IndividualPage/Header'
import Earnings from '@/components/IndividualPage/Earnings'

export default {
  name: 'Individual',
  components: {
    Header,
    Earnings
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
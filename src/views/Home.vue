<template>
  <div class="home">
    <Header/>
    <FilterBox/>    
    <Listing/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/MainPage/Header.vue'
import FilterBox from '@/components/MainPage/FilterBox.vue'
import Listing from '@/components/MainPage/Listing.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Header,
    FilterBox,    
    Listing
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;  
}
</style>
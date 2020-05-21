<template>
  <div class="home">
    <Header/>
    <FilterBox/>    
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/MainPage/Header.vue'
import FilterBox from '@/components/MainPage/FilterBox.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Header,
    FilterBox,    
  }
}
</script>

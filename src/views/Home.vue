<template>
  <div class="home">    
    <Header/>
    <FilterBox/>    
    <div class="switchDisplay">
        <img v-if="listings.view === 'Grid'" class="switchClick" src="../assets/icons/grid.svg" />
        <img v-if="listings.view === 'List'"  v-on:click="GA('Grid')" class="switchClick"  src="../assets/icons/gridx.svg" />
        <img v-if="listings.view === 'List'" class="switchClick" src="../assets/icons/list.svg" />
        <img v-if="listings.view === 'Grid'" v-on:click="GA('List')" class="switchClick"  src="../assets/icons/listx.svg" />                    
    </div>    
    <Listing/>    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/MainPage/Header.vue'
import FilterBox from '@/components/MainPage/FilterBox.vue'
import Listing from '@/components/MainPage/Listing.vue'
import { State, Action } from 'vuex-class'
import { ViewState } from '../types/modules/listingsTypes'

const namespace = 'listings'

@Component({
  components: {
    Header,
    FilterBox,    
    Listing
  }
})
export default class Home extends Vue {
    @State('listings') listings!: ViewState       
    @Action('changeView', { namespace }) changeView!: (val: string) => void;  

    GA(value: string) {
      this.$ga.event({eventCategory: 'Home', eventAction: 'View Switch', eventLabel: value})
      this.changeView(value)
    }
}

</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column; 
  margin: auto;
  width: 1100px;  
}
.switchDisplay {    
    display: flex;
    margin: 73px 15px 22px auto;    
}
.switchClick {
    margin-left: 5px;
}
    .switchClick:hover {
        cursor: pointer;
    }
</style>
<template>
    <div class="mainListing">
        <div class="switch">
            <img v-if="listings.view === 'Grid'" class="switchClick" src="../../assets/icons/grid.svg" />
            <img v-if="listings.view === 'List'"  v-on:click="changeView('Grid')" class="switchClick"  src="../../assets/icons/gridx.svg" />
            <img v-if="listings.view === 'List'" class="switchClick" src="../../assets/icons/list.svg" />
            <img v-if="listings.view === 'Grid'" v-on:click="changeView('List')" class="switchClick"  src="../../assets/icons/listx.svg" />                    
        </div>
        <Grid v-if="listings.view === 'Grid'"/>
        <List v-if="listings.view === 'List'"/>
    </div>    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class'
import Grid from './ListingComponents/Grid.vue'
import List from './ListingComponents/List.vue'
import { ViewState } from '../../types/modules/listingsTypes'
const namespace = 'listings'


@Component({        
    components: {
        Grid,
        List
    },
})

export default class Listing extends Vue {      
    @State('listings') listings!: ViewState       
    @Action('changeView', { namespace }) changeView!: () => void;
    
    

}

</script>

<style scoped>
.mainListing {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 1100px; 
    /* border: 1px dotted black;    */
}
.switch {    
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


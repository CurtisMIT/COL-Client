<template>
    <div class="mainListing">
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

</style>


<template>
    <div class="mainListing">
        <div class="switch">
            <img v-if="view === 'Grid'" class="switchClick" src="../../assets/icons/grid.svg" />
            <img v-if="view === 'List'"  v-on:click="setView('Grid')" class="switchClick"  src="../../assets/icons/gridx.svg" />
            <img v-if="view === 'List'" class="switchClick" src="../../assets/icons/list.svg" />
            <img v-if="view === 'Grid'" v-on:click="setView('List')" class="switchClick"  src="../../assets/icons/listx.svg" />        
        </div>
        <Grid v-if="view === 'Grid'"/>
        <List v-if="view === 'List'"/>
    </div>    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex'
import Grid from './ListingComponents/Grid.vue'
import List from './ListingComponents/List.vue'

@Component({
    components: {
        Grid,
        List
    },
    // mounted() {
    //     console.log('wasssup')
    // },
    computed: {
        ...mapState({
            // eslint-disable-next-line 
            view: (state: any) => state.listingView.view
        }),
    },
    methods: {
        setView(viewType: string) {
            this.$store.dispatch('listingView/changeView', viewType)
        },
        testing (word) {
            console.log(word)
        }
    }
})
export default class Listing extends Vue {
    
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


<template>
    <div class="container-main">
        <div class="container-body">
            <div class="container-header">Market in X Area</div>
            <div class="divider"></div>
            <div v-if="individual.market.length !== 0" class="container-elem">                
                <Graph                    
                    :comma="comma"
                    :marketSalary="individual.market"
                    :marketSalaryMax="marketSalaryMax"
                />       
                <COLGraph
                    :comma="comma"
                    :marketCOL="individual.market"
                    :marketCOLMax="marketCOLMax"
                />         
            </div>
            
        </div>
        
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Graph from './MarketComponent/SalaryGraph.vue'
import COLGraph from './MarketComponent/COLGraph.vue'
import { State, Getter } from 'vuex-class'
import { IndividualState } from '../../types/modules/individualTypes'
const namespace = 'individual'

@Component({
    components: {        
        Graph,
        COLGraph
    }
})
export default class Market extends Vue { 
    @State('individual') individual!: IndividualState    
    @Getter('getMaxMarketSalary', { namespace }) marketSalaryMax!: IndividualState
    @Getter('getMarketCOL', { namespace }) marketCOL!: IndividualState
    @Getter('getMaxMarketCOL', { namespace }) marketCOLMax!: IndividualState
    
    comma(value: number) {
        return (value).toLocaleString('en')
    }    
}

</script>

<style scoped>
.container-main {    
    display: flex;    
    flex-direction: column;    
    margin-top: 65px;        
    background-color:#F8F8FB
}
.container-body {
    display: flex;
    flex-direction: column;
    margin: 85px auto;
    width: 1055px;        
}
.container-header {  
    margin-right: auto;  
    font-size: 24px;    
    
}
.divider {
    margin-top: 8px;
    margin-bottom: 0px;
    border: 1px solid #E9EAF8;

}
.container-elem {
    display: flex;
    justify-content: space-between;        
    margin-top: 45px;       
}
</style>
<template>
    <div class="mainMarket">
        <div class="content">
            <div class="headerEarnings">Market in X Area</div>
            <div class="divider"></div>
            <div class="tablesEarnings">                
                <Graph/>       
                <COLGraph/>         
            </div>
            
        </div>
        
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Graph from './MarketComponent/EarningsGraph.vue'
import COLGraph from './MarketComponent/COLGraph.vue'

@Component({
    components: {        
        Graph,
        COLGraph
    }
})
export default class Expenses extends Vue { 
}

</script>

<style scoped>
.mainMarket {    
    display: flex;    
    flex-direction: column;    
    margin-top: 65px;        
    background-color:#F8F8FB
}
.content {
    display: flex;
    flex-direction: column;
    margin: 85px auto;
    width: 1055px;        
}
.headerEarnings {  
    margin-right: auto;  
    font-size: 24px;    
    
}
.divider {
    margin-top: 8px;
    margin-bottom: 0px;
    border: 1px solid #E9EAF8;

}
.tablesEarnings {
    display: flex;
    justify-content: space-between;        
    margin-top: 45px;   
}
</style>
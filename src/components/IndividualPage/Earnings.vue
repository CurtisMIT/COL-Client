<template>
    <div class="main">
        <div class="content">
            <div class="headerEarnings">Earnings</div>
            <div class="divider"></div>
            <div class="tablesEarnings">
                <Table 
                    :tableItems="earnings"
                    :totalAmount="totalEarnings"
                    />
                <Graph 
                    :growth="growth"
                    :growthMax="growthMax"
                    />
            </div>
            
        </div>
        
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Table from './EarningsComponent/Table.vue'
import Graph from './EarningsComponent/Graph.vue'
import { Getter } from 'vuex-class'
import { IndividualState } from '../../types/modules/individualTypes'
const namespace = 'individual'

@Component({
    components: {
        Table,
        Graph
    }
})
export default class Earnings extends Vue { 
    @Getter('getEarnings', { namespace }) earnings!: IndividualState 
    @Getter('getTotalEarnings', { namespace }) totalEarnings!: number
    @Getter('getGrowth', { namespace }) growth!: IndividualState    
    @Getter('getGrowthMax', { namespace }) growthMax!: IndividualState    

    
}

</script>

<style scoped>
.main {    
    display: flex;    
    flex-direction: column;    
    margin-top: 115px;        
}
.content {
    display: flex;
    flex-direction: column;
    margin: auto;
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
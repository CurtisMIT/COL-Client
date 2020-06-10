<template>
    <div class="container">
        <div class="container-body">
            <div class="container-title">Earnings</div>
            <div class="divider"></div>
            <div v-if="individual.earnings.length !== 0 && individual.growth.length !== 0" class="container-elem">
                <Table 
                    :comma="comma"
                    :type="'Earnings'"
                    :currency="individual.basic[0].currency"
                    :tableItems="individual.earnings"
                    :totalAmount="totalEarnings"
                    :isOpen="isEarnings"
                    />
                <Graph 
                    :comma="comma"
                    :currency="individual.basic[0].currency"
                    :growth="individual.growth"
                    :growthStats="growthStats"
                    />
            </div>
            
        </div>
        
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Table from './EarningsComponent/Table.vue'
import Graph from './EarningsComponent/Graph.vue'
import { State, Getter, Action } from 'vuex-class'
import { IndividualState } from '../../types/modules/individualTypes'
const namespace = 'individual'

@Component({
    components: {
        Table,
        Graph
    }
})
export default class Earnings extends Vue { 
    @State('individual') individual!: IndividualState
    @Getter('getTotalEarnings', { namespace }) totalEarnings!: number    
    @Getter('getGrowthStats', { namespace }) growthStats!: IndividualState    
    @Action('isEarnings', { namespace }) isEarnings!: () => void
    
    comma(value: number) {
        return (value).toLocaleString('en')
    }
    
}

</script>

<style scoped>
.container {    
    display: flex;    
    flex-direction: column;    
    margin-top: 115px;        
}
.container-body {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 1055px;        
}
.container-title {  
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
<template>
    <div class="main">
        <div class="content">
            <div class="headerEarnings">Earnings</div>
            <div class="divider"></div>
            <div class="tablesEarnings">
                <Table/>
                <Graph/>
            </div>
            
        </div>
        
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Table from './EarningsComponent/Table.vue'
import Graph from './EarningsComponent/Graph.vue'

@Component({
    components: {
        Table,
        Graph
    }
})
export default class Earnings extends Vue { 
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
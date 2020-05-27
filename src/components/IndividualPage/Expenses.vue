<template>
    <div class="main">
        <div class="content">
            <div class="headerEarnings">Expenses</div>
            <div class="divider"></div>
            <div class="tablesEarnings">
                <Table
                    :tableItems="expenses"
                    :totalAmount="totalExpenses"/>    
                <Pie/>            
            </div>
            
        </div>
        
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Table from './EarningsComponent/Table.vue'
import Pie from './ExpensesComponent/Pie.vue'
import { Getter } from 'vuex-class'
import { IndividualState } from '../../types/modules/individualTypes'
const namespace = 'individual'


@Component({
    components: {
        Table,
        // Pie
        
    }
})
export default class Expenses extends Vue { 
    @Getter('getExpenses', { namespace}) expenses!: IndividualState
    @Getter('getTotalExpenses', { namespace }) totalExpenses!: number
}

</script>

<style scoped>
.main {    
    display: flex;    
    flex-direction: column;    
    margin-top: 35px;        
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
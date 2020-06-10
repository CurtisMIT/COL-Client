<template>
    <div class="container-main">
        <div class="container-body">
            <div class="container-header">Expenses</div>
            <div class="divider"></div>
            <div v-if="individual.expenses.length !== 0" class="container-elem">
                <Table
                    :comma="comma"
                    :type="'Expenses'"
                    :currency="individual.basic[0].currency"
                    :tableItems="individual.expenses"
                    :totalAmount="totalExpenses"
                    :isOpen="isExpenses"/>    
                <Pie v-if="individual.expenses.length !== 0"
                    :comma="comma"
                    :currency="individual.basic[0].currency"
                    :tableItems="individual.expenses"
                    :totalAmount="totalExpenses"
                />            
            </div>
            
        </div>
        
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Table from './EarningsComponent/Table.vue'
import Pie from './ExpensesComponent/Pie.vue'
import { State, Getter, Action } from 'vuex-class'
import { IndividualState } from '../../types/modules/individualTypes'
const namespace = 'individual'


@Component({
    components: {
        Table,
        Pie
        
    }
})
export default class Expenses extends Vue { 
    @State('individual') individual!: IndividualState    
    @Getter('getTotalExpenses', { namespace }) totalExpenses!: number
    @Action('isExpenses', { namespace }) isExpenses!: () => void
    comma(value: number) {
        return (value).toLocaleString('en')
    }    
}

</script>

<style scoped>
.container-main {    
    display: flex;    
    flex-direction: column;    
    margin-top: 35px;        
}
.container-body {
    display: flex;
    flex-direction: column;
    margin: auto;
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
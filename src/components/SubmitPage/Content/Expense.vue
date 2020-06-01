<template>
    <div class="mainSubmitExpense">                
        this is mainSubmitExpense
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component 
export default class Expense extends Vue {}

</script>

<style scoped>
.mainSubmitExpense {
    display: flex;
    flex-direction: column;    
}
    
</style>
<template>
    <div>
        <div v-if="isSubmitted" class="box-submitted">Thank you for submitting! Redirecting...</div>
        <div               
            :class="!filled ? 'button-notfilled' : isSubmitted ? 'button-submitted' : 'button-filled'"
            v-on="!filled ? null : {click: submit}"
            >              
            <div class="textContinue">Submit</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { State, Getter } from 'vuex-class'
import { AboutState, JobState, ExpenseState } from '@/types/modules/submitTypes'
import { CurrencyState } from '@/types/modules/currencyTypes'
import axios from 'axios'
const namespace = "submitExpense"

@Component 
export default class Submit extends Vue {    
    @Prop() filled!: boolean
    @State('submitAbout') submitAbout!: AboutState
    @State('submitJob') submitJob!: JobState
    @State('submitExpense') submitExpense !: ExpenseState
    @State('currency') currency!: CurrencyState
    @Getter('getTotal', { namespace }) getTotal!: ExpenseState

    private isSubmitted = false;

    submit() {     
        axios({
            method: 'post',
            url: "http://localhost:5000/post/profile",
            data: {
                // profile
                id: 2035,
                title: this.submitJob.title,
                location: this.submitAbout.location,
                industry: this.submitJob.industry,
                experience: this.submitJob.experience,        
                earnings: this.submitJob.earnings,
                expenses: this.getTotal,
                quote: this.submitAbout.description,                
                // tags
                tags: this.submitAbout.tagList,                
                // earnings
                breakdownList: this.submitJob.breakdownList,
                // expenses
                expenseList: this.submitExpense.expenseList,
                // past
                pastList: this.submitJob.pastList,
                currency: this.currency.name
            },
            headers: {'Content-Type': 'text/plain'}            
        })
        .catch(err => console.log(err))     
        .finally(() => {
            this.isSubmitted = true
            setTimeout(() => {
                this.$router.push("/")
            }, 3000)
        })           
    }   
    
}

</script>

<style scoped>
.button-notfilled, .button-filled, .button-submitted {
    margin: 45px auto 50px;
    display: flex;
    height: 60px;
    width: 195px;
    border-radius: 100px;
    background-color: #E1E1E1;
    transition: background-color 500ms ease;
}
    .button-filled {
        background-color: #2A2C50
    }
    .button-filled:hover {
        cursor: pointer;
    }
    .button-filled:active {    
        background-color: #8A8CAB;    
    }    
    .button-submitted {
        margin: 25px auto 50px;
    }
    .button-submitted:hover {
        cursor: not-allowed
    }

    
.textContinue {
    margin: auto;
    color: white;
    font-size: 16px;
}



</style>
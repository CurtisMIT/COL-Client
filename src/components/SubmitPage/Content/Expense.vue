<template>
    <div class="form-main-expense">                
        <div class="header">
            <div v-on:click="test = !test" class="header-title">Total</div>
            <div class="header-sub">
                <transition name="slide-fade-up" mode="out-in">
                    <div :key="getTotal" class="header-amount">{{comma(getTotal)}}</div>
                </transition>
                <div class="header-currency"> {{currency.symbol}} {{currency.name}}</div>
            </div>
        </div>

        <div class="input-elem-large">   
            <div class="input-header">
                <div class="input-title-cat">Category</div>     
                <div class="input-title-amount">Amount</div>           
            </div>         
            <div v-for="(entry, index) in submitExpense.expenseList" :key="`entry-${index}`" class="input-elem-appear">
                <div class="btn-elem-outside">
                    <div class="btn-elem-column">
                        <div v-if="submitExpense.expenseList.length<=5" v-on:click="GAAdd" :class="submitExpense.expenseList.length>1 ?'btn-icon-add' : 'btn-icon-addB'">+</div>
                        <div v-if="submitExpense.expenseList.length>1" v-on:click="GADel(index)" :class="submitExpense.expenseList.length<=5? 'btn-icon-del': 'btn-icon-delB'">-</div>
                    </div>                
                    <div class="input-elem-column">                        
                        <input 
                            @input="typeExpense({index, prop: 'category', $event})"
                            v-model="entry.category"
                            class="input-box-cat"                             
                            placeholder="e.g Rent"/>
                    </div>
                    <div class="input-elem-colMarginLeft">                        
                        <input
                            @input="typeExpense({index, prop: 'amount', $event})"
                            v-model="entry.amount"
                            type="number" 
                            class="input-box-amt"                             
                            placeholder="e.g 1200"/>
                    </div>                                          
                </div>
                <textarea
                    @input="typeExpense({index, prop: 'description', $event})"
                    v-model="entry.description"
                    class="textarea" 
                    placeholder="(Optional) e.g I lived in the suburbs, rent was affordable."
                />
            </div>            
        </div>          
        <Submit :filled="isFilled"/>      
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Action } from 'vuex-class'
import autosize from 'autosize'
import { ExpenseState } from '@/types/modules/submitTypes'
import { CurrencyState } from '@/types/modules/currencyTypes'
import Submit from '../BottomButton/Submit.vue'

const namespace = "submitExpense"

@Component ({
    components: {
        Submit
    }
})
export default class Expense extends Vue {    
    @State('submitExpense') submitExpense!: ExpenseState
    @State('currency') currency!: CurrencyState
    @Getter('getTotal', { namespace}) getTotal!: ExpenseState
    @Getter('isFilled', { namespace }) isFilled!: boolean
    @Action('initTemplate', { namespace }) initTemplate!: () => void
    @Action('typeExpense', { namespace }) typeExpense!: () => void
    @Action('addExpense', { namespace }) addExpense!: () => void
    @Action('delExpense', { namespace }) delExpense!: (value: number) => void
    
    mounted() {
        const textarea = document.querySelectorAll(".textarea");           
        autosize(textarea)    
        this.initTemplate()        
    }    

    GAAdd() {
        this.$ga.event({eventCategory: 'Submit', eventAction: 'Add', eventLabel: 'Expense'})
        this.addExpense()
    }
    GADel(value: number) {
        this.$ga.event({eventCategory: 'Submit', eventAction: 'Delete', eventLabel: 'Expense'})
        this.delExpense(value)
    }
    comma(value: number) {
        return (value).toLocaleString('en')
    }    
}

</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-up-enter-active {
  transition: all 0.25s ease-in-out;
  transition-delay: 0.1s; 
}
.slide-fade-up-leave-active {
  transition: all 0.25s ease-in-out;
  
}
.slide-fade-up-enter {
  opacity: 0;
  transform: translateY(15px);
}

.slide-fade-up-leave-to {
  opacity: 0;
  transform: translateY(-15px);  
}

@keyframes appear {
    from {
        opacity: 0;
    }   
    to {
        opacity: 1;
    }
}
.form-main-expense {
    display: flex;
    flex-direction: column;   
    margin-left: 5px;
}
.header {
    display: flex;
    flex-direction: column;
    margin-top: -35px;
    
}
    .header-title {
        font-size: 20px;
        font-weight: bold;
    }
    .header-sub {
        display: flex;
        font-size: 24px;
        font-weight: bold;
        margin-top: auto;                        
    }
        .header-amount {
            flex: 1;            
            text-align: right;
            padding-right: 5px;                          
        }
        .header-currency {
            flex: 1;
            text-align: left;
            font-weight: 500; 
            padding-left: 5px;                                
        }


.input-elem-appear {
    animation: appear 500ms ease;  
}

    .input-title-semi {
        text-align: left;        
        font-size: 20px;
        font-weight: bold;
        font-size: 18px;
        margin-left: 2px;     
    }

.input-elem-large {        
    margin: 35px auto auto;    
    width: 300px;    
    animation: appear 500ms ease;       
}

    .input-header {
        display: flex;        
    }

    .btn-elem-outside {
        display: flex;        
        margin-top: 10px;        
    }
        .btn-elem-column{
            display: flex;
            flex-direction: column;
            margin: auto 10px 10px -25px;            
            height: 65px;
                      
        }
            .btn-icon-add, .btn-icon-del, .btn-icon-addB, .btn-icon-delB{
                font-size: 20px;
                font-weight: bold;
                margin: auto auto 0px;                
            }
            .btn-icon-del {
                font-size: 22px;
                margin-top: -7.5px;                
            }
            .btn-icon-delB {
                font-size: 22px;
                margin-top: 15px;
            }
            .btn-icon-add:hover, .btn-icon-del:hover, .btn-icon-addB, .btn-icon-delB:hover {
                cursor: pointer;
            }
            .btn-icon-addB { 
                margin: auto;
            }
            .btn-elem-columnJob {
                margin: 23px 10px 10px -25px;                            
            }
        .input-elem-column, .input-elem-colMarginLeft {
            display: flex;
            flex-direction: column;
            
        }
            .input-title-cat, .input-title-amount {
                font-size: 14px;
                font-weight: bold;                
                margin-right: auto;                
                margin-bottom: -10px;
            }
            .input-title-amount {
                margin-left: 70px;                
            }
            .input-box-cat, .input-box-amt {
                padding: 0;                      
                margin-top: 7px;
                width: 175px;
            }
        .input-elem-colMarginLeft {
            margin-left: 12px;                
        }
            .input-box-amt {
                width: 113px;
            }
     
    .textarea {
        
        margin: 10px auto 15px -4px;
        height: 40px;    
        max-height: 150px;
        width: 263px
    }
    .btn-text-end {
        margin-top: 5px;
        font-size: 12px;
        color: #828394;
        text-align: right;
        transition: color 200ms ease;
    }
        .btn-text-end:hover {
            cursor: pointer;
            color: #787A99
        }

</style>
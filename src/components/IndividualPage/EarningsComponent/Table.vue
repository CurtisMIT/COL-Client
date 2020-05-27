<template>
    <div class="mainTable">
        <div class="content">
            <div class="headerTable">
                <div class="description">Description</div>
                <div class="amount">Amount</div>
            </div>
            <div class="dividerTable"></div>
            <div class="costEntries">
                <div v-for='item in tableItems' :key="item.description" class="costDiv">
                    <div class="costEntry">
                        <div class="costItem"> {{item.category}} </div>
                        <div class="costAmount"> {{item.amount}} </div>
                        <img v-if="!isOpen" v-on:click="isOpen=!isOpen" class="costToggle" src="../../../assets/icons/arrow.svg"/>
                        <img v-else v-on:click="isOpen=!isOpen" class="costToggle" style=" transform: rotate(180deg);" src="../../../assets/icons/arrow.svg"/>
                    </div>
                    <div v-if="isOpen" class="costInfo">
                        {{item.information}}
                    </div>
                    <div class="costDivider"></div>
                </div>
            </div>
            <div class="costTotal">
                <div class="costTotalTitle">
                    Total <span class="costTotalAmount">$ {{totalAmount}}</span>
                </div>
                <div class="costTotalDivider"></div>                    
            </div>
            
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { TableList } from '../../../types/modules/individualTypes'
// just need to plug some data and it'll be gucci to go

@Component
export default class Table extends Vue { 


    @Prop() tableItems!: Array<TableList>
    @Prop() totalAmount!: number
    @Prop({default: false}) isOpen!: boolean
        
    // do something to add isOpen to each individual ones
}

</script>

<style scoped>
.mainTable {    
    display: flex;    
    flex-direction: column;            
    color: #2A2C50;     
                  
}
.content {
    display: flex;
    flex-direction: column;    
    width: 458px;     
}
.headerTable {
    display: flex;
    font-size: 16px;
    font-weight: bold;    
}
    .description {
        margin: auto auto auto 35px;
    }
    .amount {
        margin-right: 55px;
    }
.dividerTable {
    margin-top: 5px;
    border-top: 1px solid #2A2C50;
}
.costEntries {
    max-height: 215px;    
    overflow-y: scroll;
    border-bottom: 1px solid #2A2C50;
}

.costEntry {
    display: flex;   
    font-size: 16px;   
    margin: 15px auto;  
}
    .costItem {
        margin: auto auto auto 35px;
    }
    .costAmount {
        margin-right: 21px;
    }
    .costToggle {
        margin-right: 20px;        
        transition: transform 500ms;
        
    }
        .costToggle:focus {
            transform: rotate(180deg)
        }
        .costToggle:hover {
            cursor: pointer;
        }
.costInfo {
    max-height: 85px;
    width: 275px;
    overflow-y: scroll;
    margin-bottom: 15px;
    margin-left: 35px;    
    font-style: italic;
    text-align: left;
    color: rgba(42,44,80, 0.50);     
    animation: example 500ms ease;   
          
}

@keyframes example {
    from {
        max-height: 0px;
    }   
    to {
        max-height: 85px;
    }
}
   
.costDivider {
    border-top:1px solid #BFC1DA;
}
.costTotal {
    display: flex;
    flex-direction: column;
    margin-top: 14px;
    font-weight: bold;    
    margin: 14px 50px auto auto;
    border-bottom: 1px solid #2A2C50;
}
    .costTotalTitle {
        margin: auto 5px;
    }
    .costTotalAmount {
        margin-left: 35px;
    }
    .costTotalDivider {      
        margin-top: 5px;
        margin-bottom: 5px;
        border-top: 1px solid #2A2C50;
    }
</style>
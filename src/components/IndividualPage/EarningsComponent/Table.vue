<template>
    <div class="mainTable">
        <div class="content">
            <div class="headerTable">
                <div class="description">Description</div>
                <div class="amount">Amount</div>
            </div>
            <div class="dividerTable"></div>
            <div class="costEntries">
                <div v-for='d in data' :key="d.category" class="costDiv">
                    <div class="costEntry">
                        <div class="costItem">{{d.category}}</div>
                        <div class="costAmount">{{d.cost}}</div>
                        <img v-if="!d.isOpen" v-on:click="d.isOpen=!d.isOpen" class="costToggle" src="../../../assets/icons/arrow.svg"/>
                        <img v-else v-on:click="d.isOpen=!d.isOpen" class="costToggle" style=" transform: rotate(180deg);" src="../../../assets/icons/arrow.svg"/>
                    </div>
                    <div v-if="d.isOpen" class="costInfo">
                        {{d.text}}
                    </div>
                    <div class="costDivider"></div>
                </div>
            </div>
            <div class="costTotal">
                <div class="costTotalTitle">
                    Total <span class="costTotalAmount">$600</span>
                </div>
                <div class="costTotalDivider"></div>                    
            </div>
            
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// just need to plug some data and it'll be gucci to go

@Component
export default class Table extends Vue { 
    data () {
        return {
            text: false,
            data: [
             {category: 'Current Earnings', cost: 1200, text: 'Salary was on an hourly basis  etc etc etc etc', isOpen: false},
             {category: 'Rent', cost: 600, text: 'Salary was on an hourly basis  etc etc etc etc', isOpen: false},
             {category: 'Food', cost: 200, text: 'Salary was on an hourly basis  etc etc etc etc', isOpen: false},   
             {category: 'Entertainment', cost: 1000, text: 'Salary was on an hourly basis  etc etc etc etc', isOpen: false},   
            ]
        }
    }
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
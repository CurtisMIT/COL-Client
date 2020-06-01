<template>
    <div class="table-main">
        <div class="table-body">
            <div class="table-header">
                <div class="table-header-left">Description</div>
                <div class="table-header-right">Amount</div>
            </div>
            <div class="table-divider"></div>
            <div class="table-content">
                <div v-for='item in tableItems' :key="item.description">
                    <div class="table-elem">
                        <div class="table-elem-name"> {{item.category}} </div>
                        <div class="table-elem-amount"> {{item.amount}} </div>
                        <img v-if="!isOpen" v-on:click="isOpen=!isOpen" class="table-elem-toggle" src="../../../assets/icons/arrow.svg"/>
                        <img v-else v-on:click="isOpen=!isOpen" class="table-elem-toggle" style=" transform: rotate(180deg);" src="../../../assets/icons/arrow.svg"/>
                    </div>
                    <div v-if="isOpen" class="table-elem-hidden">
                        {{item.information}}
                    </div>
                    <div class="table-elem-faintline"></div>
                </div>
            </div>
            <div class="table-total">
                <div class="table-total-row">
                    Total <span class="table-total-amount">$ {{totalAmount}}</span>
                </div>
                <div class="table-total-divider"></div>                    
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
.table-main {    
    display: flex;    
    flex-direction: column;            
    color: #2A2C50;     
                  
}
.table-body {
    display: flex;
    flex-direction: column;    
    width: 458px;     
}
.table-header {
    display: flex;
    font-size: 16px;
    font-weight: bold;    
}
    .table-header-left {
        margin: auto auto auto 35px;
    }
    .table-header-right {
        margin-right: 55px;
    }
.table-divider {
    margin-top: 5px;
    border-top: 1px solid #2A2C50;
}
.table-content {
    max-height: 215px;    
    overflow-y: scroll;
    border-bottom: 1px solid #2A2C50;
}

.table-elem {
    display: flex;   
    font-size: 16px;   
    margin: 15px auto;  
}
    .table-elem-name {
        margin: auto auto auto 35px;
    }
    .table-elem-amount {
        margin-right: 21px;
    }
    .table-elem-toggle {
        margin-right: 20px;        
        transition: transform 500ms;
        
    }
        .table-elem-toggle:focus {
            transform: rotate(180deg)
        }
        .table-elem-toggle:hover {
            cursor: pointer;
        }
.table-elem-hidden {
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
   
.table-elem-faintline {
    border-top:1px solid #BFC1DA;
}
.table-total {
    display: flex;
    flex-direction: column;
    margin-top: 14px;
    font-weight: bold;    
    margin: 14px 50px auto auto;
    border-bottom: 1px solid #2A2C50;
}
    .table-total-row {
        margin: auto 5px;
    }
    .table-total-amount {
        margin-left: 35px;
    }
    .table-total-divider {      
        margin-top: 5px;
        margin-bottom: 5px;
        border-top: 1px solid #2A2C50;
    }
</style>
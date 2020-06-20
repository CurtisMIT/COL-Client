<template>
    <transition name="fade">
    <div class="container-main">        
        <div class="container-list">
            <div v-on:click="selectCurr(index)" v-for="(entry,index) in currency.list" :key="`symbol-${index}`" class="container-row">
                <div class="container-curr-symbol">{{entry.symbol}}</div>
                <div class="container-curr-name">{{entry.name}}</div>                
            </div>
        </div>
    </div>
    </transition>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import { CurrencyState } from '@/types/modules/currencyTypes'
const namespace = 'currency'

@Component
export default class Currency extends Vue {
    @State('currency') currency!: CurrencyState
    @Action('selectCurr', { namespace }) selectCurr!: () => void
}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.container-main {
    position: absolute;
    max-height: 200px;
    width: 91px;
    background-color: #F8F8FB;
    border-radius: 10px;
    margin: 80px auto auto 218px;
    overflow-y:scroll;
    /* border: 1.5px solid #F8F8F8; */
    /* box-shadow: 0px 0px 25px 1px #E4E4ED ; */
}
.container-main:hover {
    cursor: pointer;
    /* border: 1.5px solid #BFC1DA; */
}
    .container-list {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        padding-bottom: 10px;
    }
        .container-row {
            display: flex;            
            width: 100%; 
            padding-top: 3.75px; 
            padding-bottom: 3.75px;     
            font-size: 14px;     
        }
        .container-row:hover {
            background-color: #E4E4ED;
        }
            .container-curr-symbol {
                flex: 0.5;
                text-align: right;   
                margin-right: 5px;             
            }
            .container-curr-name {
                flex: 1;
                text-align: left;
                margin-left: 5px;                
            }
</style>
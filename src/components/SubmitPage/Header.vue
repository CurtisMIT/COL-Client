<template>
    <div>
        <div class="header-main">
            <div v-for="stage in submit.stage" :key="stage" class="header-elem">
                <div :class="[submit.progress.includes(stage) ? 'header-circle' : 'header-circle-unfilled']">
                    <div :class="[submit.progress.includes(stage) ? 'header-number' : 'header-number-unfilled']">{{stage}}</div>
                </div>
            </div>
            <div 
                :class="[submit.progress[submit.progress.length-1] == 3 
                ? 'header-bar-full' 
                    : submit.progress[submit.progress.length-1] == 2 
                    ? 'header-bar-half' 
                : 'header-bar'
                ]">
            </div>        
        </div>        
        <div class="header-title">{{submit.title[submit.current]}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { SubmitState } from '../../types/modules/submitTypes'


@Component
export default class Graph extends Vue {
    @State('submit') submit!: SubmitState    
}

</script>

<style scoped>
.header-main { 
  display: flex;  
  flex-direction: row;
  margin: auto;  
  justify-content: space-between;
  color: #2A2C50;  
  width: 220px;  
  /* border: 1px dotted black;     */   
}

.header-circle, .header-circle-unfilled{ 
    display: flex;
    height: 24px;
    width: 24px;
    background-color: #2A2C50;
    border-radius: 100px;
    transition: background-color 500ms ease
}
    .header-circle-unfilled {
        background-color: #BFC1DA
    }
.header-number, .header-number-unfilled {
    margin: 2px auto;
    color: white;
    font-weight: bold;
    font-size: 14px;  
    transition: color 500ms ease
}
    .header-number-unfilled {
        color: #2A2C50
    }
.header, .header-bar-half, .header-bar-full {
    margin-top: 10px;
    position: absolute;
    width: 220px;
    height: 2px;
    background: #BFC1DA;
    z-index: -1;    
}
    .header-bar-half {
        background: linear-gradient(to right, #2A2C50, #2A2C50 50%, #BFC1DA 50%, #BFC1DA 100%);
    }
    .header-bar-full {
        background: #2A2C50
    }

.header-title {
    margin: 45px auto 65px;
    font-size: 30px;
    font-weight: bold;
}

</style>
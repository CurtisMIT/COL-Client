
<template>
    <div class="input-main">
        <div class="input-title">
            Job Title
        </div>                
        <input        
          v-model="listings.title" 
          @input="typeFilter({prop: 'title', $event})"
          tabindex="-1"
          @focusin="suggestOn('title')"
          @focusout="suggestOff('title')"
          class="input-container" 
          placeholder="Search job title"/>        
        <transition name="fade">
        <div v-if="listings.isTitle" class="input-suggestion">
          <div 
            v-for="(title, index) in getAllTitles" 
            :key="`title-${index}`" 
            v-on:click="setInput({prop: 'title', value: title})" 
            class="suggestion-box">
            <div class="suggestion-title">
              {{title}}
            </div>
          </div>
        </div>
        </transition>  
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action } from 'vuex-class'
import { ViewState } from '@/types/modules/listingsTypes'

@Component
export default class Job extends Vue {    
    @State('listings') listings!: ViewState
    @Getter('listings/getAllTitles') getAllTitles!: string[]
    @Action('listings/typeFilter') typeFilter!: () => void
    @Action('listings/setInput') setInput!: () => void
    @Action('listings/suggestOn') suggestOn!: () => void  
    @Action('listings/suggestOff') suggestOff!: () => void
}

</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.input-main {
    display: flex;
    flex-direction: column;
    padding-top: 29px;
    padding-left: 44px;   
    width: 384px;       
}
.input-title {    
    margin: auto auto 12px 0px;
    font-size: 18px;
    font-weight: bold;
    color: #2B2C50;
}

.input-container {   
  width: 328px;
  height: 52px;
  background-color: #ECECF2;
  border-radius: 10px;
}

.input-suggestion {
  position: absolute;
  margin-top: 100px;
  width: 335px;
  max-height: 175px;
  background-color: #ECECF2;
  border-radius: 10px;
  overflow-y: scroll;
}
  .suggestion-box {
    display: flex;
    height: 55px;        
  }
    .suggestion-box:hover {
      cursor: pointer;
    }  
    .suggestion-title {
      margin: auto auto auto 25px;
      color: rgba(42,44,80,0.5);
      font-weight: bold;
      transition: color 500ms ease;
    }    
    .suggestion-box:hover > .suggestion-title {      
      color: rgba(42,44,80,1);
      cursor: pointer;      
    }
</style>
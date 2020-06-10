<template>
    <div class="input-main">       
        <transition name="fade">
        <div v-if="isSuggestion && filterData(input).length !== 0" class="input-suggestion">
            <div class="suggestion-sub">Select one or create one</div>
            <div 
                v-for="(data, index) in filterData(input)" 
                :key="`${index}-data`" 
                v-on:click="select({prop: type, value: data})"
                class="suggestion-box">
                <div class="suggestion-title">
                    {{data}}
                </div>
            </div>
        </div>
        </transition>  
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Location extends Vue {
    @Prop() isSuggestion!: boolean
    @Prop() dataList!: string[]
    @Prop() select!: (value: string) => void
    @Prop() input!: string    
    @Prop() type!: string
    
    // filter based on current typed input
    filterData(value: string) {
        if (value.length !== 0) {
            return this.dataList.filter(el => el.toLowerCase().includes(value.toLowerCase()))
        }
        return this.dataList        
    }

}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



.input-suggestion {
  position: absolute;
  margin-top: 10px;
  width: 304px;
  /* height: 175px; */
  max-height: 175px;
  background-color: #F8F8FB;
  border-radius: 10px;
  overflow-y: scroll;
  border: 1.5px solid #BFC1DA;
}
    .suggestion-sub {
        margin: 15px auto 0px 20px;
        text-align: left;
        font-size: 12px;
        color: #878787
    }
    .suggestion-box {
        display: flex;
        height: 45px;    
        transition: background-color 500ms ease;    
    }
    .suggestion-box:hover {
        background-color: #E4E4ED;
        cursor: pointer;
    }
    .suggestion-title {
      margin: auto auto auto 20px;
      color: rgba(42,44,80,1);            
      
    }    
</style>
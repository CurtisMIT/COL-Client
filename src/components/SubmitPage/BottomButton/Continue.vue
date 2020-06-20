<template>
    <div 
        v-on="!filled ? null : {click: GA} "        
        :class="!filled ? 'mainContinue' : 'mainContinueB'"
        >                        
        <div class="textContinue">Continue</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import { HeaderState } from '@/types/modules/submitTypes'
const namespace = "submitHeader"


// instead of button, it's add progress

@Component 
export default class Continue extends Vue {    
    @Prop() filled!: boolean
    @State('submitHeader') submitHeader!: HeaderState
    @Action('addProgress', { namespace }) addProgress!: () => void

    GA() {
        this.$ga.event({eventCategory: 'Submit', eventAction: 'Continue', eventValue: this.submitHeader.current+1})        
        this.addProgress()
    }    
}

</script>

<style scoped>
.mainContinue, .mainContinueB {
    margin: 50px auto;
    display: flex;
    height: 60px;
    width: 195px;
    border-radius: 100px;
    background-color: #E1E1E1;
    transition: background-color 500ms ease;
}
    .mainContinueB {
        background-color: #2A2C50
    }
    .mainContinueB:hover {
        cursor: pointer;
        
    }
    .mainContinueB:active {    
        background-color: #8A8CAB;    
    }
.textContinue {
    margin: auto;
    color: white;
    font-size: 16px;
}


</style>
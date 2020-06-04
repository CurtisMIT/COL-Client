<template>
    <div               
        :class="!filled ? 'mainContinue' : 'mainContinueB'"
        >                        
        <div class="textContinue">Submit</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Action } from 'vuex-class'
const namespace = "submitHeader"

@Component 
export default class Submit extends Vue {    
    @Prop() filled!: boolean
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
    
.textContinue {
    margin: auto;
    color: white;
    font-size: 16px;
}

</style>
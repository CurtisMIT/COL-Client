<template>
    <div class="header">
        <div class="header-body">
            <div class="header-title-top">
                {{basic.title}}
                <span class="header-title-dot">·</span>
                <span class="header-title-smallWeight"> {{basic.experience}} years</span>
                <span class="header-title-lightColor">Submitted on {{basic.date}}</span>
            </div>
            <div class="header-container-tag">
                <div class="container-elem-tag">🏠  {{basic.location}}</div>
                <div class="container-elem-tag">🏙  {{basic.industry}}</div>
            </div>
            <div class="header-container-quote"> {{basic.quote}} </div>
            <div class="header-container-tag">
                <div class="container-elem-tag" style="backgroundColor: #FAE0D4">✈️  {{basic.tag[0]}}</div>
                <div class="container-elem-tag" style="backgroundColor: #D8E7E2">🥘  {{basic.tag[1]}}</div>
                <div class="container-elem-tag" style="backgroundColor: #F5D5E5">🍸️ {{basic.tag[2]}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class'
import { IndividualState } from '../../types/modules/individualTypes'
const namespace = 'individual'

@Component
export default class Header extends Vue { 
    // @State('individual') individual!: IndividualState
    // use getter, no need to pull all state info
    @Getter('getBasic', { namespace }) basic!: IndividualState   
}

</script>

<style scoped>
.header {
    display: flex;
    flex-direction: column;        
}
.header-body {
    width: 1055px;
    margin: auto;
    color: #2A2C50;
}
.header-title-top {    
    display: flex;    
    margin: auto;
    font-size: 35px;
    font-weight: bold;        
}
    .header-title-dot {
        margin: auto 15px
    }
    .header-title-smallWeight {
        font-weight: 500
    }
    .header-title-lightColor {
        margin: auto 0px auto auto;
        font-size: 16px; 
        color: #B7B9D4; 
    }
.header-container-tag {
    display: flex;    
    margin: 24px auto auto auto;    
}
    .container-elem-tag {
        margin-right: 18px;
        padding: 5px 20px; 
        border-radius: 100px;
        background-color: #F8F8FB;         
    }
.header-container-quote {
    font-size: 24px;
    margin: 24px auto auto auto;      
    text-align: left;
    font-style: italic;        
}


</style>
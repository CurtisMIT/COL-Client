<template>
    <div class="main">
        <div class="content">
            <div class="titleHeader">
                {{basic.title}}
                <span class="dot">·</span>
                <span class="years"> {{basic.experience}} years</span>
                <span class="submitDate">Submitted on {{basic.date}}</span>
            </div>
            <div class="tagsHeader">
                <div class="tag">🏠  {{basic.location}}</div>
                <div class="tag">💼  {{basic.industry}}</div>
            </div>
            <div class="textHeader"> {{basic.quote}} </div>
            <div class="tagsHeader">
                <div class="tag2" style="backgroundColor: #FAE0D4">✈️  {{basic.tag[0]}}</div>
                <div class="tag2" style="backgroundColor: #D8E7E2">🥘  {{basic.tag[1]}}</div>
                <div class="tag2" style="backgroundColor: #F5D5E5">🍸️ {{basic.tag[2]}}</div>
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
.main {
    display: flex;
    flex-direction: column;        
}
.content {
    width: 1055px;
    margin: auto;
    color: #2A2C50;
}
.titleHeader {    
    display: flex;    
    margin: auto;
    font-size: 35px;
    font-weight: bold;        
}
    .dot {
        margin: auto 15px
    }
    .years {
        font-weight: 500
    }
    .submitDate {
        margin: auto 0px auto auto;
        font-size: 16px; 
        color: #B7B9D4; 
    }
.tagsHeader {
    display: flex;    
    margin: 24px auto auto auto;    
}
    .tag {
        margin-right: 18px;
        padding: 5px 20px; 
        border-radius: 100px;
        background-color: #F8F8FB;         
    }
.textHeader {
    font-size: 24px;
    margin: 24px auto auto auto;      
    text-align: left;
    font-style: italic;        
}
    .tag2 {
        margin-right: 18px;
        padding: 5px 20px; 
        border-radius: 100px;        
    }


</style>
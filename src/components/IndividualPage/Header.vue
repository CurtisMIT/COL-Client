<template>
    <div class="header">
        <div v-if="individual.basic.length !== 0" class="header-body">
            <div class="header-title-top">
                {{individual.basic[0].title}}
                <span class="header-title-dot">·</span>
                <span class="header-title-smallWeight"> {{individual.basic[0].experience}} years</span>
                <span class="header-title-lightColor">Submitted on {{individual.basic[0].created_at}}</span>
            </div>
            <div class="header-container-tag">
                <div class="container-elem-tag">🏠  {{individual.basic[0].location}}</div>
                <div class="container-elem-tag">🏙  {{individual.basic[0].industry}}</div>
            </div>
            <div class="header-container-quote"> "{{individual.basic[0].quote}}" </div>
            <div class="header-container-tag">
                <div class="container-elem-tag" style="backgroundColor: #FAE0D4">{{individual.basic[0].tags[0]}}</div>
                <div v-if="individual.basic[0].tags[1]" class="container-elem-tag" style="backgroundColor: #D8E7E2">{{individual.basic[0].tags[1]}}</div>
                <div v-if="individual.basic[0].tags[2]" class="container-elem-tag" style="backgroundColor: #F5D5E5">{{individual.basic[0].tags[2]}}</div>
                <div v-if="individual.basic[0].tags[3]" class="container-elem-tag" style="backgroundColor: #D7E4F0">{{individual.basic[0].tags[3]}}</div>
                <div v-if="individual.basic[0].tags[4]" class="container-elem-tag" style="backgroundColor: #F5EAD5">{{individual.basic[0].tags[4]}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class'
import { IndividualState } from '../../types/modules/individualTypes'
// const namespace = 'individual'

@Component
export default class Header extends Vue { 
    @State('individual') individual!: IndividualState    
    
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
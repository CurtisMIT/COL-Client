<template>
    <div class="main">
        <div class="content">
            <div class="titleHeader">
                Sr. Product Designer
                <span class="dot">·</span>
                <span class="years"> 5 years</span>
                <span class="submitDate">Submitted on May 2020</span>
            </div>
            <div class="tagsHeader">
                <div class="tag">🏠  San Francisco</div>
                <div class="tag">💼  Finance</div>
            </div>
            <div class="textHeader">
                “Party all day and night, money straight from 
                stock market. Living lavishly and following a 
                keto diet cuz gains.”
            </div>
            <div class="tagsHeader">
                <div class="tag2" style="backgroundColor: #FAE0D4">✈️  Traveler</div>
                <div class="tag2" style="backgroundColor: #D8E7E2">🥘  Foodie</div>
                <div class="tag2" style="backgroundColor: #F5D5E5">🍸️  Party Animal</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue { 
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
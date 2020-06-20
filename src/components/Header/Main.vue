<template>
    <div class="header-main">
        <div class="header-name">
            <router-link to="/" class="header-name">
                <div v-on:click="clickH('Home')" class="header-name-title">Better Outlook</div>
                <img class="header-img" src="@/assets/icons/logo.svg"/>
            </router-link>
        </div>
        <div class="header-nav">
            <router-link to="/submit" class="header-nav-submit">
                <div v-on:click="clickH('Submit')" class="header-nav-submit b">Submit</div>
            </router-link>
            <router-link to="/about" class="header-nav-about">
                <div v-on:click="clickH('About')" class="header-nav-about b">About</div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

    clickH(value: string) {
      this.$ga.event({eventCategory: 'Header', eventAction: 'Navigation', eventLabel: value})      
    }    
}

</script>

<style scoped>
.header-main {
    display: flex;
    margin: auto;    
    width:95%;
}
    .header-name, .header-nav {
        display: flex;
        flex: 1;        
        color:#2A2C50;
    }
        .header-name-title {
            font-size: 24px;
            font-weight: bold;
            margin: auto 0px;
            color: #2A2C50;
        }
        .header-img {
            margin: auto auto auto 5px;            
        }

        .header-nav-submit, .header-nav-about {
            margin: auto;
            font-size: 16px;
            font-weight: bold;
            color: #2A2C50;            
        }
        .header-nav-submit {
            margin: auto 10px auto auto;            
        }
        .header-nav-about {
            margin: auto 5px auto 10px;
        }
        .b {
            padding: 5px 10px;
            border-radius: 10px;
                          
        }
        .b:hover {
            background-color: #F8F8FB; 
        }
        .b:active {            
            background-color: #E4E4ED
        }

</style>
<template>
    <div class="container-main">
        <div v-for="n in 3" :key="n" class="container-outline">
            <div class="container-content">
                <div class="container-header"></div>
                <div class="container-header sub"></div>
                <div class="container-header sub"></div>
                <div class="container-header sub"></div>
                <br>                
                <div class="container-header small"></div>
                <div class="container-header small"></div>
                <div class="container-header small"></div>
            </div>            
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
    private number = 3

}
</script>

<style scoped>

    .container-outline{    
        margin: auto 17.5px 25px 17.5px;    
        width: 328px;
        height: 425px;        
        border-radius: 10px;    
        background-color: #FEFEFE;
        transition: border ease-out 500ms;        
    }
        .container-content {
            display: flex;
            flex-direction: column;
            margin: 20px 18px;
        }
        .container-header {
            height: 45px;
            width: 275px;
            /* background-color: #F0F0F0; */
            border-radius: 5px;
            background: #f6f7f8;
            background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
            background-repeat: no-repeat;
            background-size: 800px 104px; 
            display: inline-block;
            position: relative; 
            animation: placeholderShimmer 2s linear;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
        }
            @keyframes placeholderShimmer {
            0% {
                background-position: -468px 0;
            }
            
            100% {
                background-position: 468px 0; 
            }
            }

            .sub, .small {
                height: 30px;
                margin-top: 35px;
                width: 200px;
            }
            .small {
                margin-top: 15px;
                height: 15px;
                width: 275px;
            }
</style>
<template>
    <div class="container-main">
        <div class="container-body">
            <div class="container-bar"></div>
            <div class="container-bar small"></div>
            <div class="container-bar small"></div>
            <div class="container-bar small"></div>
            <div class="container-bar divider"></div>
            <div class="row">
                <div class="container-bar box"></div>
                <div class="container-bar box"></div>
            </div>
            
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {}

</script>

<style scoped>

@keyframes placeholderShimmer {
    0% {
        background-position: -468px 0;
    }

    100% {
        background-position: 468px 0; 
    }
}
.container-main {
    display: flex;
    flex-direction: column;
    width: 1055px;
    margin: auto;        
}
    .container-body {
        margin: auto auto auto 0;
    }

    .container-bar {
            height: 45px;
            width: 750px;        
            margin-top: 50px;    
            border-radius: 5px;
            background: #f6f7f8;
            background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
            background-repeat: no-repeat;
            background-size: 800px 104px;             
            animation: placeholderShimmer 2s linear;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;        
    }
        .small {
            margin-top: 25px;
            height: 35px;
            width: 350px;
        }
        .divider {
            margin: 50px auto 0px;
            height: 10px;
            width: 1055px;
        }
        .box {
            height: 350px;
            width: 500px;            
            background-size: 800px 500px;        
        }
.row {
    display: flex;
    justify-content: space-between
}
</style>
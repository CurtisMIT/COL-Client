<template>
    <div class="container-main">
        <div class="container-body">
            <div class="container">
                <div class="header-main big left">Privacy Policy for Better Outlook</div>
                <div class="container-content left">
                    By accessing https://betteroutlook.info, you hereby consent to our Privacy Policy. 
                </div>
            </div>
            <div class="container">
                <div class="header-main left">Cookies</div>
                <div class="container-content left">                    
                    Our website uses cookies to improve user experience. If you do not feel comfortable about it, please consider clearing your cookies or disabling them.
                </div>
            </div>
            <div class="container">
                <div class="header-main left">License</div>
                <div class="container-content left">                    
                    Unless stated otherwise, Better Outlook and/or its licensors own all the intellectual property rights to all the materials on betteroutlook.info. 
                    All intellectual property rights are reserved. You may access this from betteroutlook.info for your personal use subjected to restrictions established by our site.                    
                </div>
                <br>
                <div class="container-content left">You must not in any situation:</div>                
                <ul>                    
                    <li class="container-list">Reproduce, duplicate or copy material from betteroutlook.info</li>
                    <li class="container-list">Redistribute, sell, rent or sub-license content from betteroutlook.info</li>
                </ul>
            </div>  
            <div class="container">
                <div class="header-main left">Children's Information</div>
                <div class="container-content left">                    
                    Better Outlook does not knowingly collect any personal information from children under
                    the age of 13. If you think your child provided this kind of information on our website,
                    we encourage you to contact us and we'll remove any information from our records.
                </div>
            </div>    
            <div class="container">
                <div class="header-main left">Support</div>
                <div class="container-content left">                    
                    If there is any unanswered issues, policies or conditions, do not hesitate to contact us through email at officialbetteroutlook@gmail.com
                </div>
            </div>                                  
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class About extends Vue {}

</script>

<style scoped>
.container-main {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: auto;            
}
    .container-body {
        margin: auto auto auto 0;        
    }
        .container {
            margin-top: 25px;
            margin-bottom: 25px;
        }
        .header-main {            
            font-weight: bold;
            font-size: 24px;
        }
        .big {
            font-size: 30px;
        }
        .container-content {    
            margin-top: 10px;        
            font-size: 18px;
            
        }
        .left {
            text-align: left;
        }
        .container-list {
            text-align: left;
        }
</style>
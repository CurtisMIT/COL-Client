<template>
    <div class="header-main">
        <div class="header-text">
            💸 Cost of living overview 
            with a personalized touch.
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import axios from 'axios'

@Component
export default class Header extends Vue {
    // @Prop() private msg!: string;   
    // mounted() {
        
    //     axios
    //         .get('http://localhost:3000/test')
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error))
    // } 
}

</script>

<style scoped>
.header-main {
    display: flex;
}
.header-text{
    margin: auto;
    width: 450px;
    font-size: 35px;    
}
</style>
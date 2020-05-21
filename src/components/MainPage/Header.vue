<template>
    <div class="main">
        <div class="heading">
            💸 Cost of living overview 
            with a personalized touch.
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    // @Prop() private msg!: string;    
}

</script>

<style scoped>
.main {
    display: flex;
}
.heading{
    margin: auto;
    width: 450px;
    font-size: 35px;    
}
</style>
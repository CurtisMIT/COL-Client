<template>
    <div class="mainJob">
        <div class="title">
            Job
        </div>
        <div class="inputJob"></div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Job extends Vue {
    // @Prop() private msg!: string;    
}
</script>

<style scoped>
.mainJob {
    display: flex;
    flex-direction: column;
    padding-top: 29px;
    padding-right: 24px;
    width: 384px;        
}
.title {    
    margin: auto auto 12px 0px;
    font-size: 18px;
    font-weight: bold;
    color: #2B2C50;
}
.inputJob {
    height: 52px;
    width: 328px;
    background-color: #ECECF2;
    border-radius: 10px;
}
</style>
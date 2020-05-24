<template>
    <div class="mainLocation">
        <div class="title">
            Location
        </div>
        <div class="inputLocation"></div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Location extends Vue {
    // @Prop() private msg!: string;    
}
</script>

<style scoped>
.mainLocation {
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
.inputLocation {
    height: 52px;
    width: 328px;
    background-color: #ECECF2;
    border-radius: 10px;
}
</style>
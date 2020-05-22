<template>
    <div class="mainGrid">
        <div class="outlineGrid" v-for="item in items" :key="item.msg">

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Grid extends Vue {
    data(){
       return {
           items: [
               {msg: 'hi'},
               {msg: 'sup'},
               {msg: 'yessir'},
           ]
       } 
    }
}
</script>

<style scoped>
.mainGrid{
    margin: auto;    
    display: flex;        
    width: 100%;
    /* border: 1px dotted black; */
}
.outlineGrid{
    margin: auto;
    height: 207px;
    width: 328px;
    border: 1.5px solid #2A2C50;
    border-radius: 10px;
}
</style>


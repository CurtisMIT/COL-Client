<template>
    <div class="main">        
        <div class="mainFrame">  
            <div class="inputDiv">
                <Location/>   
                <Job/>  
            </div>   
            <div>
                <MoreFilters/>
            </div>          
        </div>     
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Location from './FilterComponents/Location.vue';
import Job from './FilterComponents/Job.vue'
import MoreFilters from './FilterComponents/MoreFilters.vue'

@Component({
    components: {
        Location,
        Job,
        MoreFilters
    }
})

export default class FilterBox extends Vue {
    // @Prop() private msg!: string;       
}
</script>

<style scoped>
.main {
    display: flex;
    margin-top: 85px;
}
.mainFrame {
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 207px;
    width: 768px;
    background-color: #F8F8FB;    
    border-radius: 10px;    
}
.inputDiv {
    display: flex; 
    flex-direction: row;    
}
</style>
<template>
    <div class="mainListing">
        <div class="switch">
            <div class="switchClick">Grid</div>
            <div class="switchClick">List</div>
        </div>
        <Grid/>
        <!-- <List/> -->
    </div>
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Grid from './ListingComponents/Grid.vue'
import List from './ListingComponents/List.vue'
@Component({
    components: {
        Grid,
        List
    }
})
export default class Listing extends Vue {
}

</script>

<style scoped>
.mainListing {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 1100px;    
    border: 1px solid black;
}
.switch {
    display: flex;
    margin: auto;
}
.switchClick {
    margin-left: 10px;
}
    .switchClick:hover {
        cursor: pointer;
    }
</style>


<template>
    <div class="mainMore">
        <div class="outlineMore">
            <div class="titleMore">
                + More Filters
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MoreFilters extends Vue {
    // @Prop() private msg!: string;    
}
</script>

<style scoped>
.mainMore {
    padding-top: 22px;    
    padding-left: 44px;    
}
.outlineMore {
    display: flex;
    border: 1.5px solid #2A2C50;
    border-radius: 100px;
    height: 40px;
    width: 164px;    
}
    .outlineMore:hover {
        cursor: pointer;
    }
.titleMore {
    margin: auto;
    font-size: 16px;
    color: #2B2C50;
}
</style>
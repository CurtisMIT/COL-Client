<template>
    <div class="btn">
        <div class="btn-outline">
            <div class="btn-title">
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
.btn {
    padding-top: 22px;    
    padding-left: 44px;    
}
.btn-outline {
    display: flex;
    border: 1.5px solid #2A2C50;
    border-radius: 100px;
    height: 40px;
    width: 164px;    
}
    .btn-outline:hover {
        cursor: pointer;
    }
.btn-title {
    margin: auto;
    font-size: 16px;
    color: #2B2C50;
}
</style>
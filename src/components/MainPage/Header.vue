<template>
    <div class="header-main">
        <div class="header-text">
            Lifestyle and budget of a 
            <br>
            <span class="text-anim">{{position}}</span>
            in <span class="text-anim">{{location}}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class'
import { ViewState } from '../../types/modules/listingsTypes'
const namespace = "listings"

@Component
export default class Header extends Vue {
    
    @State('listings') listings!: ViewState
    @Getter('getEntriesLength', { namespace }) getEntriesLength!: number
    private position = ""
    private location = ""
    private interval!: number

    switch() {                    
        this.interval = setInterval(()=>{
            const num = Math.floor(Math.random()*this.getEntriesLength)            
            this.position = this.listings.entries[num].title
            this.location = this.listings.entries[num].location
        }, 2000)
    }


    mounted() {
        this.switch()        
    }
    beforeDestroy(){
        clearInterval(this.interval)
    }
}

</script>

<style scoped>

.header-main {
    display: flex;
}
.header-text{
    margin: auto;
    max-width: 75%;
    font-size: 35px;     
}
    .text-anim {
        /* text-decoration: underline; */
        animation: placeholderShimmer 2s linear;
        
    }
    @keyframes placeholderShimmer {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1; 
        }
    }
</style>
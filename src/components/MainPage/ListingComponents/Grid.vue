<template>
    <div class="container-main">
        <Loading v-if="listings.length === 0"/>
        <div v-else class="container-main">
            <div class="container-outline" v-for="entry in listings" :key="entry.id">
                <router-link :to="`/individual/${entry.individual_id}`" >
                    <div v-on:click="GA(`${entry.individual_id}-${entry.title}`)" class="container-content">                
                        <div class="container-header">                    
                            <div class="container-header-title">{{shorten(entry.title, 30)}}</div>                    
                            <div class="container-header-subtitle">Experience: <span style="fontWeight: 500">{{entry.experience}} years</span></div>                    
                        </div>          
                        <div class="container-elem">
                            <div class="container-elem-border">🏠 {{entry.location}}</div>                
                            <div class="container-elem-border">🏙 {{entry.industry}}</div>                
                        </div>      
                        <div class="container-elem-money">                    
                            <div class="container-elem-noborder">Earnings: <span style="fontWeight: 500">{{comma(entry.earnings)}} {{entry.currency}}</span></div>                    
                            <div class="container-elem-noborder">Expenses: <span style="fontWeight: 500">{{comma(entry.expenses)}} {{entry.currency}}</span></div>
                        </div>       
                        <div class="container-elem-quote">“{{shorten(entry.quote, 62)}}“</div>         
                        <div class="container-row">
                            <div class="container-row-tag1">{{entry.tags[0]}}</div>
                            <!-- <div class="container-row-tag2">{{entry.tags[1]}}</div> -->
                        </div>
                        <div class="container-bottom-date">{{entry.created_at}}</div>                
                    </div>            
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts"> 
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ViewState } from '../../../types/modules/listingsTypes'
import Loading from './GridLoading.vue'

@Component({
    components: {
        Loading
    }
})
export default class Grid extends Vue {       
    @Prop() listings!: ViewState 
    @Prop() type!: string

    shorten(target: string, size: number) {
        if (target.length > size) {
            return target.substring(0, size) + "..."
        }
        return target
    }    
    GA(value: string) {
        this.$ga.event({eventCategory: 'Home', eventAction: `${this.type} - Grid`, eventLabel: value})
    }
    comma(value: number) {
        return (value).toLocaleString('en')
    }
}
</script>

<style scoped>

.container-main{
    margin: auto;    
    display: flex;        
    width: 100%;    
    flex-wrap: wrap;
    /* border: 1px dotted black; */
}
.container-outline{    
    margin: auto 17.5px 25px 17.5px;    
    width: 328px;
    border: 1.5px solid #BFC1DA;
    border-radius: 10px;    
    transition: border ease-out 500ms;        
}
    .container-outline:hover {
        border: 1.5px solid #2A2C50;
        cursor: pointer;
    }
.container-content {
    display: flex;
    flex-direction: column;
    margin: 20px 18px;
    
}
    .container-header {    
        display: flex; 
        flex-direction: column;           
        margin: 8px auto auto 10px;    
    }
        .container-header-title{
            margin-right: auto;
            font-size: 24px;      
            text-align: left;
            /* border: 1px dotted black       */
        }
        .container-header-subtitle, .container-header-title{
            margin: 8px auto auto 0px;            
            font-weight: bold;
        }
    .container-elem, .container-elem-money  {
        display: flex;
        flex-direction: column;
        margin: 8px auto auto 0px;
    }
        .container-elem-border {
            border-radius: 100px;
            margin: 8px auto auto 0px;
            padding: 5px 20px;        
            background-color: #F8F8FB;
        }
    .container-elem-money {                 
        margin: 8px auto auto 10px;
    }
        .container-elem-noborder {
            margin: 8px auto auto 0px;
            font-weight: bold;
        }
    .container-elem-quote {
        margin: 16px auto auto 10px;
        text-align: left;   
        font-style: italic

    }
    .container-row {
        display: flex;
        margin: 16px auto auto 0px;
    }
        .container-row-tag1, .container-row-tag2 {
            padding: 5px 20px;   
            border-radius: 100px;
            background-color: #FAE0D4 
        }
        .container-row-tag2 {
            margin-left: 10px;            
            background-color: #D8E7E2
        }
    .container-bottom-date {
        margin: 16px 0px auto auto;
        font-size: 12px;
        color: rgba(42,44,80, 0.49)
    }

</style>


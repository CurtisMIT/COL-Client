<template>
    <div class="mainGrid">
        <div class="outlineGrid" v-for="entry in entries" :key="entry.id">
            <div class="contentGrid">
                <div class="headGrid">
                    <div class="titleGrid">{{entry.job}}</div>                    
                    <div class="experienceGrid">Experience: <span style="fontWeight: 500">{{entry.experience}}</span></div>                    
                </div>          
                <div class="careerGrid">
                    <div class="careerSub">🏠 {{entry.location}}</div>                
                    <div class="careerSub">💼 {{entry.industry}}</div>                
                </div>      
                <div class="moneySct">                    
                    <div class="moneyGrid">Earnings: <span style="fontWeight: 500">{{entry.earnings}}</span></div>                    
                    <div class="moneyGrid">Expenses: <span style="fontWeight: 500">{{entry.expenses}}</span></div>
                </div>       
                <div class="textGrid">“{{entry.quote}}“</div>         
                <div class="tagsGrid">
                    <div class="tag1">{{entry.tag1}}</div>
                    <div class="tag2">{{entry.tag2}}</div>
                </div>
                <div class="dateGrid">{{entry.date}}</div>
            </div>            
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex'

@Component({        
    computed: {
        ...mapState({
            // eslint-disable-next-line
            entries: (state: any) => state.listings.entries
        })
    }
})

export default class Grid extends Vue {       
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
    width: 328px;
    border: 1.5px solid #BFC1DA;
    border-radius: 10px;    
    transition: border ease-out 500ms;
}
    .outlineGrid:hover {
        border: 1.5px solid #2A2C50;
        cursor: pointer;
    }
.contentGrid {
    display: flex;
    flex-direction: column;
    margin: 20px 18px;
    
}
    .headGrid {    
        display: flex; 
        flex-direction: column;           
        margin: 8px auto auto 10px;    
    }
        .titleGrid{
            margin-right: auto;
            font-size: 24px;
            font-weight: bold;
        }
        .experienceGrid{
            margin: 8px auto auto 0px;
            
            font-weight: bold;
        }
    .careerGrid {
        display: flex;
        flex-direction: column;
        margin: 8px auto auto 0px;
    }
        .careerSub {
            border-radius: 100px;
            margin: 8px auto auto 0px;
            padding: 5px 20px;        
            background-color: #F8F8FB;
        }
    .moneySct {    
        display: flex;
        flex-direction: column;
        margin-top: 8px;
        margin: 8px auto auto 10px;
    }
        .moneyGrid {
            margin: 8px auto auto 0px;
            font-weight: bold;
        }
    .textGrid {
        margin: 16px auto auto 10px;
        text-align: left;   
        font-style: italic

    }
    .tagsGrid {
        display: flex;
        margin: 16px auto auto 0px;
    }
        .tag1 {
            padding: 5px 20px;   
            border-radius: 100px;
            background-color: #FAE0D4 
        }
        .tag2 {
            margin-left: 10px;
            padding: 5px 20px;   
            border-radius: 100px;
            background-color: #D8E7E2
        }
    .dateGrid {
        margin: 16px 0px auto auto;
        font-size: 12px;
        color: rgba(42,44,80, 0.49)
    }

</style>


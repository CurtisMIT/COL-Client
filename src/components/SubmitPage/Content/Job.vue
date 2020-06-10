<template>    
    <div class="form-main-job">                
        <div :class="!submitJob.past ? 'input-elem-first' : 'input-elem'">
            <div class="input-title">💼 Job Title</div>
            <input :class="!submitJob.past? 'input-box-first' : 'input-box-large'" 
                v-model="submitJob.title"
                @input="typeJob({prop: 'title', $event})"
                @focusin="suggestOn('title')"
                @focusout="suggestionOff('title')"
                placeholder="e.g. Professional Napper"/>
            <Autosuggest
                :select="select"
                :type="'title'"
                :isSuggestion="isTitle"
                :dataList="getAllTitles"
                :input="submitJob.title"/>                
        </div>
        <div v-if="!submitJob.past" class="btn-elem-farright">
            <div v-on:click="GAPast('Past Title')" class="btn-title">+ Add Past Titles</div>
            <div class="btn-circle">
                <div class="btn-circle-icon">?</div>
            </div>
            <div class="container-box-abs">
                <div class="container-box-arrow"></div>
                This will display a graph of your career growth throughout time.
            </div>            
        </div>          
        <div class="input-elem">
            <div class="input-title">️🏙 Industry</div>
            <input class="input-box-large" 
                v-model="submitJob.industry"
                @input="typeJob({prop: 'industry', $event})"       
                @focusin="suggestOn('industry')"
                @focusout="suggestionOff('industry')"         
                placeholder="e.g. Automotive"/>
            <Autosuggest
                :select="select"
                :type="'industry'"
                :isSuggestion="isIndustry"
                :dataList="getAllIndustries"
                :input="submitJob.industry"/>                  
        </div>
        <div class="input-elem">
            <div class="input-title">🗓️ Year of Experience</div>
            <div class="input-row">
                <input :class="isNaN(submitJob.experience)?'input-box-small wrong'  : 'input-box-small'"                                   
                     @input="typeJob({prop: 'experience',$event})"
                    placeholder="e.g. 18"/>  
                <div class="input-unit-preset">
                    <div class="input-unit-value">years</div>
                </div>              
            </div>   
            <transition name="fade">
                <div v-if="isNaN(submitJob.experience)" class="wrong-text">x please enter numerical numbers only</div>           
            </transition>
        </div>
        <div class="input-elem-first">
            <div class="input-title">💰 Yearly Salary</div>
            <div class="input-row">
                <input :class="isNaN(submitJob.earnings)? 'input-box-last wrong': 'input-box-last'"                     
                    @input="typeJob({prop: 'earnings',$event})"                    
                    placeholder="e.g. 35000"/>  
                <div v-on:click="GACurr" class="input-box-toggle" tabindex="-1" @focusout="toggleCurrency">
                    <div class="input-unit-valueToggle">{{currency.symbol}} {{ currency.name}}</div>
                    <img src='@/assets/icons/currency.svg' :class="!submitJob.currency ? 'input-unit-icon' : 'input-unit-iconB'"/>
                </div>   
                <Currency v-if="submitJob.currency"/>           
            </div>          
            <transition name="fade">
                <div v-if="isNaN(submitJob.earnings)" class="wrong-text">x please enter numerical numbers only</div>  
            </transition>
        </div>   
        <div v-if="!submitJob.breakdown" class="btn-elem">
            <div v-on:click="GABReak" class="btn-title">+ Add Breakdown</div>
            <div class="btn-circle">
                <div class="btn-circle-icon">?</div>
            </div>
            <div class="container-box-abs">
                <div class="container-box-arrow"></div>
                This will help users have a better picture of your overall compensation.
            </div>
        </div>   
        <div  v-if="!submitJob.past" class="btn-elem-farright">
            <div v-on:click="GAPast('Past Salaries')" class="btn-title">+ Add Past Salaries</div>
            <div class="btn-circle">
                <div class="btn-circle-icon">?</div>
            </div>
            <div class="container-box-abs">
                <div class="container-box-arrow"></div>
                This will display a graph of your salary growth throughout time.
            </div>
        </div>
        <Extra/>
        <Continue
            :filled="
                submitJob.title 
                && submitJob.industry 
                && (submitJob.experience!==0 && !(isNaN(submitJob.experience)))
                && (submitJob.earnings!==0 && !(isNaN(submitJob.earnings)))
                && isBreakdown 
                && isPast ? true : false"
        />
    </div>    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Action } from 'vuex-class'
import { JobState } from '@/types/modules/submitTypes'
import { CurrencyState } from '@/types/modules/currencyTypes'
import Continue from '../BottomButton/Continue.vue'
import Extra from './ExtraJob/Extra.vue'
import Currency from './ExtraJob/Currency.vue'
import Autosuggest from '../Autosuggest/Autosuggest.vue'


const namespace = "submitJob"

@Component({
    components: {
        Continue,
        Extra,
        Currency,
        Autosuggest
    }
})

export default class Job extends Vue {
    @State('submitJob') submitJob!: JobState
    @State('currency') currency!: CurrencyState
    @Getter('isBreakdown', { namespace }) isBreakdown!: JobState
    @Getter('isPast', { namespace }) isPast!: JobState
    @Getter('listings/getAllTitles') getAllTitles !: string[]
    @Getter('listings/getAllIndustries') getAllIndustries !: string[]
    @Action('select', { namespace }) select !: () => void;
    @Action('typeJob', { namespace }) typeJob!: () => void
    @Action('toggleBreakdown', { namespace }) toggleBreakdown!: () => void
    @Action('togglePast', { namespace }) togglePast!: () => void
    @Action('toggleCurrency', { namespace }) toggleCurrency!: () => void

    private isTitle = false
    private isIndustry = false

    suggestOn(type: string) {
        if (type === "title") {
            this.isTitle = true
        } else if (type === "industry") {
            this.isIndustry = true
        }
    }
    suggestionOff(type: string) {
        if (type === "title") {
            this.isTitle = false
        } else if (type === "industry") {
            this.isIndustry = false
        }
    }    

    GAPast(value: string) {
        this.$ga.event({eventCategory: 'Submit', eventAction: 'Add', eventLabel: value})
        this.togglePast()
    }
    GABReak() {
        this.$ga.event({eventCategory: 'Submit', eventAction: 'Add', eventLabel: 'Breakdown'})
        this.toggleBreakdown()
    }    
    GACurr() {
        this.$ga.event({eventCategory: 'Submit', eventAction: 'Toggle', eventLabel: 'Currency'})
        this.toggleCurrency()
    }
}

</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.form-main-job {
    display: flex;
    flex-direction: column;    
    margin-left: 15px;   
}

.input-elem {
    display: flex;
    flex-direction: column;
    margin: auto;       
    /* border: 1px solid black; */
    padding-bottom: 45px;      
}
    .input-elem-first {
        display: flex;
        flex-direction: column;
        margin: auto;     
    }
    .input-title {
        text-align: left;        
        font-size: 20px;
        font-weight: bold;        
    }
    .input-box-large, .input-box-small, .input-box-first, .input-box-last {
        margin-top: 5px;        
        /* margin-bottom: 45px;                 */
    }    
    .input-box-last, .input-box-first {
        margin-bottom: 5px;
    }
        .form-input:focus {
            outline: none;
            border: 1.5px solid #BFC1DA;
        }
.input-row {
    display: flex;       
}
    .input-box-small, .input-box-last {
        width: 205px;           
    }
    .wrong {
        border: 1.5px solid #EB5757;
    }
    .wrong-text {
        position: absolute;
        font-size: 12px;
        color: #EB5757;
        margin-top: 112.5px;
        margin-left: 10px;
    }
    .input-unit-preset, .input-box-toggle {
        display: flex;
        margin-top: 0px;
        height: 67px;
        width: 95px;        
    }
        .input-unit-value {
            margin: auto;                        
        }

    .input-box-toggle {
        display: flex;
        background-color: #F8F8FB;
        border-radius: 10px;
        width: 86.5px;
        height: 67px;
        margin-top: 0px;
        margin-left: 6px;
        border: 1.5px solid transparent;
        transition: border 500ms ease;        
    }
        .input-box-toggle:focus {
            outline: none;
        }
        .input-unit-valueToggle {
            margin: auto 0px auto auto;
        }
        .input-unit-icon, .input-unit-iconB {
            margin-right: auto;
            margin-left: 5px;            
            transition: transform 500ms ease;
        }
            .input-unit-iconB {
                transform: rotate(180deg)
            }
        .input-box-toggle:hover {
            cursor: pointer;
            border: 1.5px solid #BFC1DA;
        }
.btn-elem, .btn-elem-farright {
    display: flex;
    margin: 10px auto 0px;
    width: 300px;        
}
    .btn-elem-farright {
        margin-bottom: 7.5px;
    }
    .btn-title {
        margin-left: auto;
    }
    .btn-title:hover {        
        cursor: pointer
    }
    .btn-circle:hover{
        cursor: default;
    }    
    .btn-title:active {
        color: #8A8CAB;
    }
    .btn-circle {
        display: flex;
        margin: auto 0px auto 10px;
        width: 20px;
        height: 20px;
        background-color: #2A2C50;
        border-radius: 100px;
    }
    .btn-circle-icon {
        margin: 0.25px auto auto;
        color: white;
        font-size: 14px;
        font-weight: bold;
    }
    .btn-circle:hover~.container-box-abs{
        opacity: 1
    }


/* hover for info */
.container-box-abs {
    opacity: 0;
    position: absolute;
    padding: 15px;    
    width: 195px;
    background-color: #2A2C50;
    border-radius: 5px;
    color: white;    
    font-size: 14px;
    margin-top: -25px;
    margin-left: 315px; 
    transition: opacity 500ms ease;           
}
    .container-box-arrow {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: #2A2C50;
        border-radius: 2px;
        margin-left: -18px;
        margin-top: 10px;
        transform: rotate(45deg)
    }
    
    
</style>
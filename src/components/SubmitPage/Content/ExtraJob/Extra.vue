<template>
    <div class="form-main-job">            
        <transition name="fade">
        <div v-if="submitJob.breakdown" class="input-elem-large">
            <div class="input-title-semi">Salary Breakdown</div>
            <div v-for="(entry, index) in submitJob.breakdownList" :key="`entry.type-${index}`" class="input-elem-appear">
                <div class="btn-elem-outside">
                    <div class="btn-elem-column">
                        <div v-on:click="addBreakdown" class="btn-icon-add">+</div>
                        <div v-on:click="delBreakdown(index)" class="btn-icon-del">-</div>
                    </div>                
                    <div class="input-elem-column">
                        <div class="input-title-small">Type</div>
                        <input @input="typeBreakdown({index, prop: 'type', $event})" 
                            v-model="entry.type"
                            class="input-box-typeSize"                             
                            placeholder="e.g Bonus"/>
                    </div>
                    <div class="input-elem-colMarginLeft">
                        <div class="input-title-small">Amount</div>
                        <input @input="typeBreakdown({index, prop: 'amount', $event})" 
                            v-model="entry.amount"
                            type="number" 
                            class="input-box-amtSize"                             
                            placeholder="e.g 35000"/>
                    </div>   
                    <div class="input-unit-presetSmall">                    
                        <div class="input-unit-value"> $ USD</div>
                    </div>                                         
                </div>
                <textarea @input="typeBreakdown({index, prop: 'description', $event})" 
                    v-model="entry.description"
                    class="textarea" 
                    placeholder="Add description (Optional) ..."/>
            </div>
            <div v-on:click="toggleBreakdown" class="btn-text-end">Remove Section</div>
        </div>  
        </transition> 
        <transition name="fade">   
        <div v-if="submitJob.past" class="input-elem-large">
            <div class="input-title-semi">Past Info</div>
            <div v-for="(entry, index) in submitJob.pastList" :key="`entry.job-${index}`" class="input-elem-appear">
                <div class="btn-elem-outside">
                    <div class="btn-elem-columnJob">
                        <div v-on:click="addPast" class="btn-icon-add">+</div>
                        <div v-on:click="delPast" class="btn-icon-del">-</div>
                    </div>                
                    <div class="input-elem-column">
                        <div class="input-title-small">Job Title</div>
                        <input class="input-box-largeBot" 
                            placeholder="e.g. Jr. Professional Napper"
                            v-model="entry.job"
                            @input="typePast({index, prop: 'job', $event})"
                            />
                    </div>                                     
                </div>       
                <div class="input-row-past">
                    <div class="input-elem-column">
                        <div class="input-title-small">Year</div>
                        <input class="input-box-typeSize" 
                            v-model="entry.year"
                            @input="typePast({index, prop: 'year', $event})"
                            type="number" 
                            placeholder="e.g 1"/>
                    </div>
                    <div class="input-elem-colMarginLeft">
                        <div class="input-title-small">Amount</div>
                        <input class="input-box-amtSize" 
                            placeholder="e.g 35000"
                            v-model="entry.amount"
                            @input="typePast({index, prop: 'amount', $event})"
                            type="number" 
                            />
                    </div>   
                    <div class="input-unit-presetSmall">                    
                        <div class="input-unit-value"> $ USD</div>
                    </div>   
                </div>   
            </div>
            <div v-on:click="togglePast" class="btn-text-end">Remove Section</div>  
        </div>  
        </transition>                            
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import autosize from 'autosize'
import { JobState } from '@/types/modules/submitTypes'
const namespace = "submitJob"

@Component
export default class Job extends Vue {
    @State('submitJob') submitJob!: JobState        
    // extras
    @Action('typeBreakdown', { namespace }) typeBreakdown!: JobState
    @Action('addBreakdown', { namespace }) addBreakdown!: JobState
    @Action('delBreakdown', { namespace }) delBreakdown!: JobState
    @Action('toggleBreakdown', { namespace }) toggleBreakdown!: JobState

    @Action('typePast', { namespace }) typePast!: JobState
    @Action('addPast', { namespace }) addPast!: JobState
    @Action('delPast', { namespace }) delPast!: JobState    
    @Action('togglePast', { namespace }) togglePast!: JobState

    mounted() {              
        const textarea = document.querySelectorAll(".textarea");           
        autosize(textarea)
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

@keyframes appear {
    from {
        opacity: 0;
    }   
    to {
        opacity: 1;
    }
}

.form-main-job {
    display: flex;
    flex-direction: column;         
    margin: auto;
    width: 355px;              
}
.input-elem-appear {
    animation: appear 500ms ease;  
}
.input-elem, .input-elem-large {
    display: flex;
    flex-direction: column;
    margin: auto;                             
}
    .input-title, .input-title-semi {
        text-align: left;        
        font-size: 20px;
        font-weight: bold;
        
    }
    .input-box-large, .input-box-small, .input-box-first, .input-box-last {
        margin-top: 0px;        
        margin-bottom: 45px;                
    }    
    .input-box-last, .input-box-first {
        margin-bottom: 5px;
    }
        .form-input:focus {
            outline: none;
            border: 1.5px solid #BFC1DA;
        }
.input-row, .input-row-past {
    display: flex;       
}
    .input-box-small, .input-box-last {
        width: 205px;           
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
        .input-unit-valueToggle {
            margin: auto 0px auto auto;
        }
        .input-unit-icon {
            margin-right: auto;
            margin-left: 5px;            
        }
        .input-box-toggle:hover {
            cursor: pointer;
            border: 1.5px solid #BFC1DA;
        }

.input-elem-large {        
    margin: 35px auto auto;    
    width: 300px;    
    animation: appear 500ms ease;   
}
    .input-title-semi {
        font-size: 18px;
        margin-left: 2px;        
    }
    .btn-elem-outside {
        display: flex;        
        margin-top: 10px;        
    }
        .btn-elem-column, .btn-elem-columnJob{
            display: flex;
            flex-direction: column;
            margin: auto 10px 10px -25px;            
            height: 65px;
                      
        }
            .btn-icon-add, .btn-icon-del{
                font-size: 20px;
                font-weight: bold;
                margin: auto auto 0px;                
            }
            .btn-icon-del {
                font-size: 22px;
                margin-top: -7.5px;                
            }
            .btn-icon-add:hover, .btn-icon-del:hover {
                cursor: pointer;
            }
            .btn-elem-columnJob {
                margin: 23px 10px 10px -25px;                            
            }
        .input-elem-column, .input-elem-colMarginLeft {
            display: flex;
            flex-direction: column;
            
        }
            .input-title-small {
                font-size: 14px;
                font-weight: bold;
                margin-left: 7px;
                margin-right: auto;
            }
            .input-box-typeSize, .input-box-amtSize {
                padding: 0;                
                margin-top: 7px;
                width: 105px;
            }
        .input-elem-colMarginLeft {
            margin-left: 12px;            
        }
            .input-box-amtSize {
                width: 115px;
            }
        .input-unit-presetSmall {
            display: flex;
            margin-top: auto;
            margin-bottom: 2px;
            height: 65px;
            width: 100%;            
        }
    .textarea {
        margin-top: 10px;
        margin-left: -4px; 
        height: 29px;    
        max-height: 150px;
    }
    .btn-text-end {
        margin-top: 5px;
        font-size: 12px;
        color: #828394;
        text-align: right;
        transition: color 200ms ease;
    }
        .btn-text-end:hover {
            cursor: pointer;
            color: #787A99
        }

.input-box-largeBot {
    margin-top: 10px;
    margin-bottom: 0px;
}
.input-row-past {
    margin-top: 18px;
    margin-left: -4px;
}

 
</style>
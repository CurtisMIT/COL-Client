<template>
    <div class="form-main-job">                
        <div class="input-elem">
            <div class="input-title">💼 Job Title</div>
            <input class="input-box-large" placeholder="e.g. Professional Napper"/>
        </div>
        <div class="btn-elem">
            <div class="btn-title">+ Add Past Titles</div>
            <div class="btn-circle">
                <div class="btn-circle-icon">?</div>
            </div>
        </div>          
        <div class="input-elem">
            <div class="input-title">️🏙 Industry</div>
            <input class="input-box-large" placeholder="e.g. Automotive"/>
        </div>
        <div class="input-elem">
            <div class="input-title">🗓️ Year of Experience</div>
            <div class="input-row">
                <input class="input-box-small" placeholder="e.g. 18"/>  
                <div class="input-unit-preset">
                    <div class="input-unit-value">years</div>
                </div>              
            </div>            
        </div>
        <div class="input-elem">
            <div class="input-title">💰  Yearly Salary</div>
            <div class="input-row">
                <input class="input-box-small" placeholder="e.g. 35000"/>  
                <div class="input-box-toggle">
                    <div class="input-unit-valueToggle">$ USD</div>
                    <img src='@/assets/icons/currency.svg' class="input-unit-icon"/>
                </div>              
            </div>            
        </div>   
        <div class="btn-elem">
            <div class="btn-title">+ Add Breakdown</div>
            <div class="btn-circle">
                <div class="btn-circle-icon">?</div>
            </div>
        </div>   
        <div class="btn-elem-second">
            <div class="btn-title">+ Add Past Salaries</div>
            <div class="btn-circle">
                <div class="btn-circle-icon">?</div>
            </div>
        </div>
        <div class="input-elem-large">
            <div class="input-title-semi">Salary Breakdown</div>
            <div class="btn-elem-outside">
                <div class="btn-elem-column">
                    <div class="btn-icon-add">+</div>
                    <div class="btn-icon-del">-</div>
                </div>                
                <div class="input-elem-column">
                    <div class="input-title-small">Type</div>
                    <input class="input-box-typeSize" placeholder="e.g Bonus"/>
                </div>
                <div class="input-elem-colMarginLeft">
                    <div class="input-title-small">Amount</div>
                    <input class="input-box-amtSize" placeholder="e.g 35000"/>
                </div>   
                <div class="input-unit-presetSmall">                    
                    <div class="input-unit-value"> $ USD</div>
                </div>                                         
            </div>
            <textarea ref="test" class="textarea" placeholder="Add description (Optional) ..."/>
        </div>                     
        <Continue/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Continue from '../BottomButton/Continue.vue'
import autosize from 'autosize'

@Component({
    components: {
        Continue
    }
})
export default class Job extends Vue {
    mounted() {                
        // autosize(this.$refs.test)
    }
}

</script>

<style scoped>
.form-main-job {
    display: flex;
    flex-direction: column;    
    margin-left: 15px;   
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
    .input-box-large, .input-box-small {
        margin-top: 10px;        
        margin-bottom: 45px;
        
    }
        .form-input:focus {
            outline: none;
            border: 1.5px solid #BFC1DA;
        }
.input-row {
    display: flex;       
}
    .input-box-small {
        width: 205px;        
    }
    .input-unit-preset, .input-box-toggle {
        display: flex;
        margin-top: 10px;
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
        height: 66px;
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
.btn-elem, .btn-elem-second {
    display: flex;
    margin: -30px auto 10px;
    width: 300px;        
}
    .btn-title {
        margin-left: auto;
    }
    .btn-title:hover, .btn-circle:hover {
        cursor: pointer;
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
.btn-elem-second {
    margin: auto;    
}

.input-elem-large {        
    margin: 25px auto auto;    
    width: 300px;     
}
    .input-title-semi {
        font-size: 18px;
        margin-left: 2px;        
    }
    .btn-elem-outside {
        display: flex;        
        margin-top: 10px;        
    }
        .btn-elem-column{
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
    
</style>
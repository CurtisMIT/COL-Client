<template>
    <div class="form-main-about">                
        <div class="input-elem">
            <div class="input-title">Short Description</div>
            <textarea class="input-textarea" 
                placeholder="e.g Great WLB, usually don’t eat out that often and hike often."
                @input="typeAbout({prop: 'description', $event})"
            />
        </div>
        <div class="input-elem">
            <div class="input-title">Location</div>
            <input class="input-text"                 
                :value="submitAbout.location"
                @input="typeAbout({prop: 'location', $event})"
                @focusin="suggestOn('location')"
                @focusout="suggestionOff('location')"
                placeholder="e.g. Montreal"/>
            <Autosuggest
                :select="select"
                :type="'location'"
                :isSuggestion="isLocation"
                :dataList="getAllLocations"
                :input="submitAbout.location"/>            
        </div>        
        <div class="input-elem mTop">
            <div class="input-title">Tags</div>
            <input v-on:keyup.enter="addTag" class="input-text" 
                :value="submitAbout.tag"
                @input="typeAbout({prop: 'tag', $event})"
                @focusin="suggestOn('tag')"
                @focusout="suggestionOff('tag')"
                placeholder="e.g. 🌱 Vegan"/>
            <Autosuggest
                :select="select"
                :type="'tag'"
                :isSuggestion="isTag"
                :dataList="getAllTags"
                :input="submitAbout.tag"/>                   
        </div>
        <div class="input-elem-tag">
            <div v-for="(tag, index) in submitAbout.tagList" :key="`tag-${index}`" class="tagbox">
                <div v-on:click="removeTag(tag)" class="tagbox-unit">{{tag}}</div>
            </div>
        </div>
        <Continue
            :filled="submitAbout.description && submitAbout.tagList.length > 0 ? true : false"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Action } from 'vuex-class'
import { AboutState } from '@/types/modules/submitTypes'
import Continue from '../BottomButton/Continue.vue'
import Autosuggest from '../Autosuggest/Autosuggest.vue'
import autosize from 'autosize'

const namespace = 'submitAbout'


@Component({
    components: {
        Continue, 
        Autosuggest
    }
})
export default class About extends Vue {    
    @State('submitAbout') submitAbout!: AboutState
    @Getter('listings/getAllLocations') getAllLocations!: string[]
    @Getter('listings/getAllTags') getAllTags!: string[]
    @Action('select', { namespace }) select!: () => void
    @Action('typeAbout', { namespace }) typeAbout!: () => void    
    @Action('addTag', { namespace }) addTag!: AboutState
    @Action('removeTag', { namespace }) removeTag!: AboutState 
    
    private isLocation = false
    private isTag = false

    suggestOn(type: string) {
        if (type === "location") {
            this.isLocation = true
        } else if (type === "tag") {
            this.isTag = true
        }
    }
    suggestionOff(type: string) {
        if (type === "location") {
            this.isLocation = false
        } else if (type === "tag") {
            this.isTag = false
        }
    }

    mounted() {     
        const textarea = document.querySelectorAll(".input-textarea");           
        autosize(textarea)        
    }    
}

</script>

<style scoped>
@keyframes appear {
    from {
        opacity: 0;
    }   
    to {
        opacity: 1;
    }
}
.form-main-about {
    display: flex;
    flex-direction: column;    
}

.input-elem, .input-elem-tag, .top {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 300px;    
    animation: appear 500ms ease;  
}
    .input-title {
        margin-left: 10px;
        margin-right: auto;
        font-size: 20px;
        font-weight: bold;
    }
        .mTop{
            margin-top: 45px
        }
    .input-textarea {    
        margin-bottom: 45px;     
    }    
    .input-text, .input-textarea {
        margin-top: 5px;
    }
.input-elem-tag {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px auto;        
    
}
    .tagbox {        
        margin-right: 10px;
        margin-bottom: 10px;     
        border-radius: 5px;        
        background-color: #D7E4F0
    }
    .tagbox-unit {
        padding: 2.5px 10px;
    }
        .tagbox-unit:hover {
            cursor: pointer
        }
</style>
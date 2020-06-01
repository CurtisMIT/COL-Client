<template>
    <div class="form-main-about">                
        <div class="input-elem">
            <div class="input-title">Short Description</div>
            <textarea class="input-textarea" 
            placeholder="e.g Great WLB, usually don’t eat out that often and hike often."
            @input="typeDescription($event)"
            />
        </div>
        <div class="input-elem">
            <div class="input-title">Tags</div>
            <input v-on:keyup.enter="addTag" class="input-text" 
            :value="getTag"
            @input="typeTag($event)"
            placeholder="e.g. 🌱 Vegan"/>
        </div>
        <div class="input-elem-tag">
            <div v-for="tag in getTagList" :key="tag" class="tagbox">
                <div v-on:click="removeTag(tag)" class="tagbox-unit">{{tag}}</div>
            </div>
        </div>
        <Continue
            :filled="getDescription && getTagList.length > 0 ? true : false"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { SubmitState } from '@/types/modules/submitTypes'
import Continue from '../BottomButton/Continue.vue'
const namespace = 'submit'


@Component({
    components: {
        Continue
    }
})
export default class About extends Vue {
    @Getter('getDescription', { namespace }) getDescription!: SubmitState
    @Getter('getTag', { namespace }) getTag!: SubmitState
    @Getter('getTagList', { namespace }) getTagList!: SubmitState
    @Action('typeDescription', { namespace }) typeDescription!: SubmitState
    @Action('typeTag', { namespace }) typeTag!: SubmitState
    @Action('addTag', { namespace }) addTag!: SubmitState
    @Action('removeTag', { namespace }) removeTag!: SubmitState    
}

</script>

<style scoped>
.form-main-about {
    display: flex;
    flex-direction: column;    
}
.input-elem, .input-elem-tag {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 300px;
    /* border: 1px dotted black; */
}
    .input-title {
        margin-left: 10px;
        margin-right: auto;
        font-size: 20px;
        font-weight: bold;
    }
    .input-textarea {    
        margin-bottom: 45px;     
    }    
    .input-text, .input-textarea {
        margin-top: 10px;
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
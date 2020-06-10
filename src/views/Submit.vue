<template>
    <div class="mainSubmitView">      
        <Header/>
        <Content/>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Header from '@/components/SubmitPage/Header.vue'
import Content from '@/components/SubmitPage/Content.vue'
import { Action } from 'vuex-class'

@Component({
    name: 'Submit',
    components: {
        Header,
        Content
    }
})
export default class Submit extends Vue {
    @Action('submitAbout/resetAbout') resetAbout!: () => void
    @Action('submitHeader/resetHeader') resetHeader!: () => void
    @Action('submitJob/resetJob') resetJob!: () => void
    @Action('submitExpense/resetExpense') resetExpense!: () => void

    @Watch('$route', { immediate: true, deep: true })
    onUrlChange() {        
      this.resetAbout()
      this.resetHeader()
      this.resetJob()
      this.resetExpense()
    }      
}

</script>

<style scoped>
.mainSubmitView { 
  display: flex;
  flex-direction: column;   
    
}

</style>
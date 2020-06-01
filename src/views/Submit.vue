<template>
    <div class="mainSubmitView">      
        <Header/>
        <Content/>
    </div>
</template>

<script>
import Header from '@/components/SubmitPage/Header.vue'
import Content from '@/components/SubmitPage/Content.vue'

export default {
    name: 'Submit',
    components: {
        Header,
        Content
    }
}
</script>

<style scoped>
.mainSubmitView { 
  display: flex;
  flex-direction: column;   
    
}

</style>
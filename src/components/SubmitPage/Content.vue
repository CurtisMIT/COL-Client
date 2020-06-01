<template>
    <div class="form-main-content">
        <About v-if="submit.current == 0"/>
        <Job v-if="submit.current == 1"/>
        <Expense v-if="submit.current == 2"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { SubmitState } from '../../types/modules/submitTypes'
import Job from './Content/Job.vue'
import Expense from './Content/Expense.vue'
import About from './Content/About.vue'

@Component({
    components: {
        Job,
        Expense,
        About
    }
})
export default class Content extends Vue {
    @State('submit') submit!: SubmitState
}
    

</script>

<style scoped>
.form-main-content {
    margin: auto;
    width: 400px;    
}
</style>
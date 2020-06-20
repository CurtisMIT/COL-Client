<template>
    <div>
      <Main/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from '@/components/About/About.vue'

@Component({
  components: {
    Main
  }
})
export default class About extends Vue {

}
</script>

<style scoped>
</style>
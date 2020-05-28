<template>
  <div>
    <Timeline id="fontys" sourceType="profile" :options="{ tweetLimit: '3' }"/>
  </div>
</template>

<script>
  import { Timeline } from 'vue-tweet-embed'
  export default {
    name: 'Home',
    mounted() {

    },
    components: {
      Timeline
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

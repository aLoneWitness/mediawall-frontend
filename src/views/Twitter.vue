<template>
  <div class="twitter">

    <Tweet class="Tweet" error-message="This tweet could not be loaded" error-message-class="tweet--not-found" id="1258063153021300737"></Tweet>

  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  name: "Twitter",
  components: {
    Tweet,
  }
}
</script>
<template>
  <div class="instagram">

    <instagram-embed :url=" 'https://www.instagram.com/p/CACeYr6pjpM/' " error-message="This post could not be loaded" :max-width="500"/>

  </div>
</template>

<script>
import InstagramEmbed from 'vue-instagram-embed'

export default {
  name: "Instagram",
  components: {
    InstagramEmbed
  }
}
</script>

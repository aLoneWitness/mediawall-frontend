<template>
  <div>
    <h2>Instagram element here!</h2>
  </div>
</template>

<script>

  export default {
    name: "Instagram",
    mounted() {
      setTimeout(this.goBack, 5000)
    },
    methods: {
      goBack(){
        this.$router.push("/")
      }
    }
  }
</script>

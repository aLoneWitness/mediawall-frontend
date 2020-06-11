<template>
  <div class="head">
    <h2 class="text">Instagram element</h2>
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

<style scoped>
  .head {
    transition: background 6s ease;
    background-color: blueviolet;
    height: 100vh;
    width: 100vw;
  }
  .text {
    font-size: 300px;
  }
</style>

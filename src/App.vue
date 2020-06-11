<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import SockJS from "sockjs-client";
  import Stomp from "webstomp-client";
export default {
  name: 'App',
  components: {
  },
  props: {
    tweets: Object
  },
  methods: {

  },
  data() {
    return {
      connected: false
    }
  },
  mounted() {
    this.socket = new SockJS("http://localhost:8080/ws")
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.connect({}, frame => {
              this.connected = true;
              console.log(frame);
              this.stompClient.subscribe("/topic/website", tick => {
                let object  = JSON.parse(tick.body);
                console.log(object)
                switch (object.triggerType) {
                  case "TWITTER":
                    this.$router.push("Twitter")
                    break;
                  case "INSTAGRAM":
                    this.$router.push("/instagram")
                    break;
                  case "VIDEO":
                    this.$router.push("Youtube")
                    break;
                }
              });
            },
            error => {
              console.log(error);
              this.connected = false;
            })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

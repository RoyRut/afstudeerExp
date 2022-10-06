<template>
  <div class="container-fluid">
    <div class="justify-center" id="p5Canvas"></div>
    <pre>{{$data}}</pre>
  </div>
</template>
<style lang="sass" scoped>

</style>>

</style>
<script>
  if (process.browser) {
  var radar = require('@/assets/js/Radar.js')
  var db = require('@/assets/js/db_connection.js')
}
export default {
  name: "IndexPage",

async fetch() {
  this.planets = await fetch('https://api.nuxtjs.dev/planets')
  .then(res => res.json())
},
  data() {
    return {
      planets: [],
    }
  },
}

</script>

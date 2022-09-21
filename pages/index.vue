<template>
  <div class="colorBG">
    <div class="d-flex justify-content-center" id="p5Canvas"></div>
    <div class="message d-flex justify-content-center">
      {{message}}
    </div>


    <p v-for="name in names">{{ name.value }}</p>
  </div>
</template>
<style lang="sass" scoped>

</style>>

</style>
<script>
  if (process.browser) {
  var radar = require('@/assets/js/Radar.js')
}

export default {
  name: "IndexPage",

  async asyncData({ route, store }) {
    const data = await fetch(`${process.env.BASE_URL}/data.json`).then((res) =>
      res.json()
    );

    const headerNames = data.sheets.IP_LOANS_0.colHeaderData.dataTable[0]
    const valueSet =  data.sheets.IP_LOANS_0.data.dataTable
    return { jsonData: data, names: headerNames, valueSet, }
  },
  data() {
    return {
      jsonData: [],
      names: [],
      valueSet: [], 
      message: "" ,
    };
  },

  mounted() {
    const P5 = require('p5')
    new P5(radar.main)
    
    radar.setDelegate(this.callbackOnP5);

    for(let i = 0; i < this.names.length; i++){
      console.log(this.names[i].value)

      for(let x = 0; x < this.valueSet.length; x++) {
        console.log(this.valueSet[x][i].value)
      }
    }
    
  },

  methods: {
    callbackOnP5: function(timeStr) {
      this.message = timeStr;
    }
  }
};
</script>

<style>
.message {
  color: black;
}
</style>
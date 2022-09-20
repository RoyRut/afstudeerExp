<template>
  <div class="colorBG">
    <p v-for="name in names">{{ name.value }}</p>
  </div>
</template>
<style lang="sass" scoped>

</style>>

</style>
<script>
export default {
  name: "IndexPage",
  async asyncData({ route, store }) {
    const data = await fetch(`${process.env.BASE_URL}/data.json`).then((res) =>
      res.json()
    );
    const headerNames = data.sheets.IP_LOANS_0.colHeaderData.dataTable[0]
    const valueSet =  data.sheets.IP_LOANS_0.data.dataTable
  
    return { jsonData: data, names: headerNames, valueSet, };
  },
  data() {
    return {
      jsonData: [],
      names: [],
      valueZero: [], 
    };
  },
  mounted() {
    console.log(this.valueSet);
    for(let i = 0; i < this.names.length; i++){
      console.log(this.names[i].value)
      for(let x = 0; x < this.valueSet.length; x++) {
        console.log(this.valueSet[x][i].value)
      }
    }
    
  },
};
</script>

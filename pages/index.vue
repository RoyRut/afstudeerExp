<template>
  <div>
    <p v-for="name in names">{{ name.value }}</p>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ route, store }) {
    const data = await fetch(`${process.env.BASE_URL}/data.json`).then((res) =>
      res.json()
    );
    const headerNames = data.sheets.IP_LOANS_0.colHeaderData.dataTable[0];
    return { jsonData: data, names: headerNames };
  },
  data() {
    return {
      jsonData: [],
      names: [],
    };
  },
  mounted() {
    const names = this.jsonData.sheets.IP_LOANS_0.colHeaderData.dataTable[0];

    // console.log(names);
    return { names: names };
  },
};
</script>

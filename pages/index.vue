<template>
  <div>
    <h1>{{ jsonData }}</h1>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ route, store }) {
    const data = await fetch(`${process.env.BASE_URL}/countries.json`).then(
      (res) => res.json()
    );
    return { jsonData: data };
  },
  data() {
    return {
      jsonData: {},
    };
  },
};
</script>

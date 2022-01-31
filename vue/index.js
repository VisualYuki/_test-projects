new Vue({
  data() {
    return {
      message: "vue test",
    };
  },
  methods: {
    clickEvent() {
      console.log("it's click event");
    },
  },
  mounted() {
    console.log("it's mount lifecycle");
  },
}).$mount("#app");

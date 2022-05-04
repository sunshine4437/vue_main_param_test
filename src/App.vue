<template>
  <div>
    test
    <C1 />
    <C2 />
  </div>
</template>

<script>
import C1 from "./app_title.vue"
import C2 from "./app_content.vue"
export default {

  data() {
    return {};
  },
  components:{
    C1,
    C2,
  },
  mounted() {
    var xhr = new XMLHttpRequest();
    var method = "GET";
    var url = "http://localhost:8085/spring/api/get";

    xhr.open(method, url);
    // xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function(event) {
      var target = event.target;

      if (target.readyState === XMLHttpRequest.DONE) {
        var status = target.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          // var data = JSON.parse(xhr.responseText);
          // console.log(data);
          console.log(xhr.responseText);
        } else {
          // console.log(xhr.responseText);
        }
      }
    };

    xhr.send();
  },

  methods: {}
};
</script>

<style scoped></style>

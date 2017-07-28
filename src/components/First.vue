<template>
  <div class="first">
    <p>{{content}}</p>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'first',
  data () {
    return {
      content: '这里是first啊卧槽'
    }
  },
  mounted: function() {
    alert($("#app").attr("id"));
    this.$router.push("/second");
	}
}
</script>

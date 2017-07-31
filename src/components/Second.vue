<template>
  <div class="second">
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  name: 'second',
  data () {
    return {
      content: '这里是second啊卧槽'
    }
  },
  mounted: function(){
    this.hideFooter();
  }
}
</script>

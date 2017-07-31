<template>
  <div class="first">
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
    <p>{{content}}</p>
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
    this.showFooter();
    this.loadingToast();
	}
}
</script>

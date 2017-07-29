<template>
  <div id="app">
    <!-- router(路由) 插槽, 其中所有匹配的组件将在这里呈现 -->
    <router-view></router-view>
    <footer id="footer">
      <div class="weui-tabbar">
          <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
              <span style="display: inline-block;position: relative;">
                  <img src="" alt="" class="weui-tabbar__icon">
                  <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
              </span>
              <p class="weui-tabbar__label">微信</p>
          </a>
          <a href="javascript:;" class="weui-tabbar__item">
              <img src="" alt="" class="weui-tabbar__icon">
              <p class="weui-tabbar__label">通讯录</p>
          </a>
          <a href="javascript:;" class="weui-tabbar__item">
              <span style="display: inline-block;position: relative;">
                  <img src="" alt="" class="weui-tabbar__icon">
                  <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
              </span>
              <p class="weui-tabbar__label">发现</p>
          </a>
          <a href="javascript:;" class="weui-tabbar__item">
              <img src="" alt="" class="weui-tabbar__icon">
              <p class="weui-tabbar__label">我</p>
          </a>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<!-- 组件样式 -->
<style>

</style>

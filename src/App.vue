<template>
  <div id="app">
    <div class="weui-tab">
      <div class="page_main" id="main">
        <!-- router(路由) 插槽, 其中所有匹配的组件将在这里呈现 -->
        <router-view></router-view>
      </div>

      <div class="weui-tabbar" id="footer">
          <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
              <span style="display: inline-block;position: relative;">
                  <img src="" alt="" class="weui-tabbar__icon">
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
              </span>
              <p class="weui-tabbar__label">发现</p>
          </a>
          <a href="javascript:;" class="weui-tabbar__item">
              <img src="" alt="" class="weui-tabbar__icon">
              <p class="weui-tabbar__label">我</p>
          </a>
      </div>
    </div>

    <!--BEGIN toast-->
      <div id="toast" style="display: none;">
          <div class="weui-mask_transparent"></div>
          <div class="weui-toast">
              <i class="weui-icon-success-no-circle weui-icon_toast"></i>
              <p class="weui-toast__content">已完成</p>
          </div>
      </div>
      <!--end toast-->

      <!-- loading toast -->
      <div id="loadingToast" style="display:none;">
          <div class="weui-mask_transparent"></div>
          <div class="weui-toast">
              <i class="weui-loading weui-icon_toast"></i>
              <p class="weui-toast__content">数据加载中</p>
          </div>
      </div>

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

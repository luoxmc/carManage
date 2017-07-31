<template>
  <div class="map">
    <div id="mapContainer" class="mapDiv"></div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'first',
  data () {
    return {
      content: '这里是map啊卧槽',
      longitude:{},	//定义经度
      latitude:{}	//定义纬度
    }
  },
  mounted: function() {
     this.showFooter();
     var map = new BMap.Map("mapContainer");//创建地图实例
     //初始化地图 默认加载北京天安门
     var point = new BMap.Point(116.331398,39.897445);
     map.centerAndZoom(point,16);//初始化地图，point为中心点，缩放级别为16
     //处理定位后的信息
     var showLocation = function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){//定位成功
            //新建中心点 并将地图中心移动过去
            var centerPoint = new BMap.Point(r.longitude,r.latitude);
            map.panTo(centerPoint);
            map.setCenter(centerPoint);
            //新建标注
            var mk = new BMap.Marker(centerPoint);
            mk.disableDragging();// 不可拖拽
            map.addOverlay(mk);
        }else {
            alert('failed'+this.getStatus());//定位失败
        }
  	 };
     //判断手机浏览器是否支持定位
     if(navigator.geolocation){
         var geolocation = new BMap.Geolocation();//创建定位实例
         geolocation.getCurrentPosition(showLocation,{enableHighAccuracy: true});//enableHighAccuracy 要求浏览器获取最佳结果
     }else{
         map.addControl(new BMap.GeolocationControl());//添加定位控件 支持定位
     }
  }
}
</script>

<style>
  .mapDiv{
    height: 500px;
  }
</style>

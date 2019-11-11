 //封装获取当前时间函数
 function getTime() { //获取时间
   var date = new Date();

   var year = date.getFullYear();
   var month = date.getMonth();
   var day = date.getDate();

   var hour = date.getHours();
   var minute = date.getMinutes();
   var second = date.getSeconds();

   //这样写显示时间在1~9会挤占空间；所以要在1~9的数字前补零;
   if (hour < 10) {
     hour = '0' + hour;
   }
   if (minute < 10) {
     minute = '0' + minute;
   }
   if (second < 10) {
     second = '0' + second;
   }


   var x = date.getDay(); //获取星期


   var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
   return time

 }


 //鼠标进入图片，更换播放背景图
 $('.video img').mouseenter(function () {
   $(this).next().css('background', 'url(images/play.png)')

 })
 //鼠标离开图片，更换播放背景图
 $('.video img').mouseleave(function () {
   $(this).next().css('background', 'url(images/playoff.png)')
   // console.log($(this)) 
 })
 //鼠标进入strong，更换播放背景图
 $('.video strong').mouseenter(function () {
   $(this).css('background', 'url(images/play.png)')

 })
 //监听所有的a，点击跳转后暂停主视频
 $('a').click(function () {
   //  console.log($('.main-video video'))
   $('.main-video video')[0].pause()
 })
 //监听滚动条，离开首屏就暂停主视频
 $(window).scroll(function () {
   if ($(window).scrollTop() >= 797) {
     $('.main-video video')[0].pause()

   }
 })


 //进入页面埋点
 $(document).ready(function () {
   //session里保存当前ip，id
   sessionStorage.setItem('ip', ip)
   sessionStorage.setItem('id', id)
   //  console.log(ip)
   //  console.log(222)

   //  console.log(getTime())
   $.ajax({
     type: "GET",
     url: "http://log.ycapp.yiche.com/statistics/EventAgent",
     data: {
       enc: 0,
       ltype: 'view',
       appkey: 'ychtml',
       yc_log: {
         dvid: sessionStorage.getItem('ip'),
         uid: parseInt(sessionStorage.getItem('id')),
         itime: getTime(),
         lg_vl: {
           ptitle: 'PC2019guoqingzhuanti'
         }
       }
     },
     dataType: "JSON",
     success: function (res) {
       console.log(res)
     }
   });


 });
 //主视频点击播放埋点
 document.querySelector('video').addEventListener('play', function () {
   $.ajax({
     type: "GET",
     url: "http://log.ycapp.yiche.com/statistics/EventAgent",
     data: {
       enc: 0,
       ltype: 'click',
       appkey: 'ychtml',
       yc_log: {
         dvid: sessionStorage.getItem('ip'),
         uid: parseInt(sessionStorage.getItem('id')),
         itime: getTime(),
         lg_vl: {
           ptitle: 'PC2019guoqingzhuanti',
           ctitle: 'shipindianji'
         }
       }
     },
     dataType: "JSON",
     success: function (res) {
       console.log(res)
     }
   });
 })
 //内容点击跳转埋点
 $('.main-body a').click(function () {
   $.ajax({
     type: "GET",
     url: "http://log.ycapp.yiche.com/statistics/EventAgent",
     data: {
       enc: 0,
       ltype: 'click',
       appkey: 'ychtml',
       yc_log: {
         dvid: sessionStorage.getItem('ip'),
         uid: parseInt(sessionStorage.getItem('id')),
         itime: getTime(),
         lg_vl: {
           ptitle: 'PC2019guoqingzhuanti',
           ctitle: 'neirongdianji'
         }
       }
     },
     dataType: "JSON",
     success: function (res) {
       console.log(res)
     }
   });
 })
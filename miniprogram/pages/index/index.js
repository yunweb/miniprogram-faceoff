//index.js
Page({

  onReady: function(){
    getApp().index = this;
    wx.redirectTo({
      url: '/faceoff/pages/index/index'
    });
  }
})
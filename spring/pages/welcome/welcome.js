// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 5,
    isLoad: -1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      time: --that.data.time
    })

    if (getApp().globalData.messageDetail.length != 0 && getApp().globalData.swiperImages.length != 0) {
      that.setData({
        isLoad: 1
      })
    }

    if (that.data.time == 0) {
      that.setData({
        time: 0
      })

      if (that.data.isLoad != 1) {
        wx.showModal({
          title: '提示',
          content: '网络链接较慢或服务器正在维护中，请稍后再试',
        })
        return
      }
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
    setTimeout(function() {
      that.onLoad();
      //循环代码
    }, 1000)
  },
  next() {
    let that = this;
    if (that.data.isLoad != 1) {
      wx.showModal({
        title: '提示',
        content: '服务器维护中,请稍后再试',
      })
      clearInterval(this.onLoad());
      that.setData({
        time: 0
      })
      return
    }
    clearInterval(this.onLoad());
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: "芒果新生活，便利你的生活",
      imageUrl: "../../images/other/logo.png"
    }

  }
})
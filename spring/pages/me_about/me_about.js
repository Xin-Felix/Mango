//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '关于程序', //导航栏 中间的标题
      height: 0
    },

    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    isLoading: false
  },
  onLoad() {
    this.setData({
      height: app.globalData.height
    })
  },
  onReady() {
    let that = this
    setTimeout(function() {
      that.setData({
        isLoading: true
      })
    }, 200)
  },

  call() {
    wx.showModal({
      title: '提示',
      content: '是否要联系我？',
      success: function(e) {
        if (e.confirm) {
          wx.makePhoneCall({
            phoneNumber: '18996379281',
          })
        }
      }
    })
  }
})
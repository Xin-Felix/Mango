//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
      title: '小店', //导航栏 中间的标题
      height: 0
    },
    shopMessage: [],

    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    isLoading: false
  },
  onLoad() {
    this.setData({
      height: app.globalData.height
    })
    this.setData({
      shopMessage: getApp().globalData.shopMessage
    })

  },
  onReady() {
    let that = this
    setTimeout(function() {
      that.setData({
        isLoading: true
      })
    }, 500)
  },
  call(e) {
    wx.showModal({
      title: '提示',
      content: '是否联系（' + e.target.id + "）",
      cancelText: '取消',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if (result.confirm) {
          wx.makePhoneCall({
            phoneNumber: e.target.id,
          })
        }
      },

    });


  },
  to_look(e) {
    wx.navigateTo({
      url: '/pages/shop_detail/shop_detail?shopId=' + e.target.id,
    })
  }
})
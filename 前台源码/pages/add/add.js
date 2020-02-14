//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
      title: "添加", //导航栏 中间的标题
      height: 0
    },
    userId: -1,
    agree: false,

    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
  },
  onLoad() {
    let that = this
    this.setData({
      height: app.globalData.height,
      userId: getApp().globalData.userId
    })



  },

  to_add() {
    let that = this;


    if (that.data.userId == -1) {
      wx.showModal({
        title: '提示',
        content: '还没有登录噢~',
        confirmText: "去登陆",
        success: function(e) {
          if (e.confirm) {
            wx.switchTab({
              url: "/pages/me/me"
            })
          }
        }
      })
      return;
    }

    if (this.data.agree) {
      wx.navigateTo({
        url: '/pages/add_detail/add_detail',
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请先阅读约定',
        showCancel: false,
        confirmText: '去查看',
        success: function(e) {
          wx.navigateTo({
            url: '/pages/agreement/agreement',
          })
        }
      })
    }

  },
  look_agreement(e) {
    let that = this;
    this.setData({
      agree: !that.data.agree
    })
  },
  onShow() {
    let that = this
    this.setData({
      userId: getApp().globalData.userId
    })
    wx.getStorage({
      key: 'userId',
      success: function(res) {
        that.setData({
          userId: res.data
        })
      },
    })
  }

})
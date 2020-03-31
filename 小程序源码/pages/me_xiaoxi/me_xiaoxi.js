//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '我的消息', //导航栏 中间的标题
      height: 0
    },
    floorstatus: "none",
    activeIndex: 1,
    isLastPage: false, //是否最后一页
    me_message: [],
    userId: -1,
    messageType: [
      "有新留言啦~",
      "有新回复啦~",
      "管理员回复"
    ],
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    isLoading: false
  },
  onReady() {
    let that = this
    setTimeout(function() {
      that.setData({
        isLoading: true
      })
    }, 500)




  },
  onLoad() {

    this.setData({
      height: app.globalData.height
    })
    this.setData({
      userId: app.globalData.userId
    })
    this.loadMessage(1);

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    // 最后一页了，取消下拉功能
    if (this.data.isLastPage) {
      return
    }
    this.loadMessage(++this.data.activeIndex)
  },
  loadMessage(index) {

    wx.showLoading({
      title: '加载中~',
    })
    let that = this;
    wx.request({
      url: getApp().globalData.url + '/getMessage/getAllNewMessage/' + that.data.userId + '/' + index,
      method: "post",
      success: function(e) {

        if (e.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '出错啦，请稍后再试~',
          })
          return;
        }
        if (e.data == 200) {
          that.setData({
            isLastPage: true
          })
          return;
        }

        that.setData({
          me_message: that.data.me_message.concat(e.data)
        })
      },
      complete: function() {
        wx.hideLoading()
        wx.setStorage({
          key: 'lastNewMessage',
          data: that.data.me_message[0].newMessageId,
        })
      }
    })
  },
  to_message_detail: function(e) {
    wx.navigateTo({
      url: '/pages/message_detail/message_detail?messageId=' + e.currentTarget.id,
    })
  },

  //一键返回顶部
  onPageScroll: function(e) { //判断滚轮位置
    if (e.scrollTop > 200) {
      this.setData({
        floorstatus: "block"
      });
    } else {
      this.setData({
        floorstatus: "none"
      });
    }
  },
  goTop: function(e) { // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
})
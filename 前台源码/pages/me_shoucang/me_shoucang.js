//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '我的收藏', //导航栏 中间的标题
      height: 0
    },
<<<<<<< HEAD
=======
    imageUrl: "",
>>>>>>> 更新
    allCategoryMessage: [],
    userId: -1,
    activeIndex: 1,
    floorstatus: "none",
    user_message: [],
    floorstatus: "none",

    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    isLoading: false
  },
  onReady() {
    let that = this
<<<<<<< HEAD
    setTimeout(function() {
=======
    setTimeout(function () {
>>>>>>> 更新
      that.setData({
        isLoading: true
      })
    }, 500)
  },
  onLoad() {
    let that = this
    this.setData({
<<<<<<< HEAD
      allCategoryMessage: getApp().globalData.categoryMessage
=======
      allCategoryMessage: getApp().globalData.categoryMessage,
      imageUrl:  getApp().globalData.imageUrl,
>>>>>>> 更新
    })
    this.setData({
      height: app.globalData.height
    })
    this.setData({
      userId: getApp().globalData.userId
    })
    this.loadMessage(1)


  },
  loadMessage(index) {
    wx.showLoading({
      title: '加载中~',
    })
    var that = this;
    var app = getApp()
    wx.request({
      url: getApp().globalData.url + '/getMessage/getAllCollectionMessageByUserId/' + that.data.userId + '/' + index,
      method: "POST",
      success: (res) => {
        if (res.data == 200) {
          that.setData({
            isLastPage: true
          })
          return;
        }
        that.setData({
          user_message: that.data.user_message.concat(res.data)
        })
      },
<<<<<<< HEAD
      complete: function(res) {
=======
      complete: function (res) {
>>>>>>> 更新
        wx.hideLoading();
      },
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
<<<<<<< HEAD
  onReachBottom: function() {
=======
  onReachBottom: function () {
>>>>>>> 更新
    // 最后一页了，取消下拉功能
    if (this.data.isLastPage) {
      return
    }
    this.loadMessage(++this.data.activeIndex)
  },
  //一键返回顶部
<<<<<<< HEAD
  onPageScroll: function(e) { //判断滚轮位置
=======
  onPageScroll: function (e) { //判断滚轮位置
>>>>>>> 更新
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

<<<<<<< HEAD
  goTop: function(e) { // 一键回到顶部
=======
  goTop: function (e) { // 一键回到顶部
>>>>>>> 更新
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
  }, //跳转到详情页
<<<<<<< HEAD
  to_message_detail: function(e) {
=======
  to_message_detail: function (e) {
>>>>>>> 更新
    wx.navigateTo({
      url: '/pages/message_detail/message_detail?messageId=' + e.currentTarget.id,
    })
  },
})
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '搜索', //导航栏 中间的标题
      height: 0
    },
    imageUrl:"",
    allCategoryMessage: [],
    search: "",
    activeIndex: 1,
    isLastPage: false, //是否最后一页
    // 此页面 页面内容距最顶部的距离

    user_message: [],
    height: app.globalData.height * 2 + 20,
  },
  searchList: function(e) {
    let value = e.detail.detail.value;
    this.setData({
      search: value
    })
  },
  endsearchList: function(e) {
    let that = this;
    if (this.data.search.length < 2) {
      wx.showModal({
        title: '提示',
        content: '至少输入两个字噢~',
        showCancel: false
      })
      return;
    }
    that.setData({
      user_message: []
    })
    this.loadMessage(that.data.search, 1)

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    // 最后一页了，取消下拉功能
    if (this.data.isLastPage) {
      return
    }
    this.loadMessage(this.data.search, ++this.data.activeIndex)
  },

  loadMessage(keyword, index) {
    let that = this;
    wx.request({
      url: getApp().globalData.url + '/searchByKeyword/' + that.data.search + '/' + index,
      method: "post",
      success: function(e) {
        if (e.data.length == 0) {
          wx.showModal({
            title: '提示',
            content: '没有搜到噢，换个关键词吧',
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
          user_message: that.data.user_message.concat(e.data)
        })
      }
    })
  }, //跳转到详情页
  to_message_detail: function(e) {
    wx.navigateTo({
      url: '/pages/message_detail/message_detail?messageId=' + e.currentTarget.id,
    })
  },
  onLoad() {
    /**
     * 分类信息
     */
    this.setData({
      allCategoryMessage: getApp().globalData.categoryMessage,
      imageUrl:getApp().globalData.imageUrl,
    })
    this.setData({
      height: app.globalData.height
    })
  }
})
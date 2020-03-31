//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '分类', //导航栏 中间的标题
      height: 0
    },
    imageUrl:"",
    allCategoryMessage: [],
    search: "",
    floorstatus: "none",
    user_message: [],
    activeIndex: 1,
    isLastPage: false, //是否最后一页
    categoryId: -1,
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    isLoading: false
  },
  activity_clear() {
    this.setData({
      search: ""
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
    wx.request({
      url: getApp().globalData.url + '/search/' + that.data.categoryId + '/' + that.data.search,
      method: "post",
      success: function(e) {
        if (e.data.length == 0) {
          wx.showModal({
            title: '提示',
            content: '没有搜到噢，换个关键词吧',
          })
          return;
        }

        that.setData({
          user_message: e.data,
          isLastPage: true
        })
      }
    })
  },
  searchList: function(e) {
    let value = e.detail.detail.value;
    this.setData({
      search: value
    })
  },
  onLoad(options) {


    this.setData({
      allCategoryMessage: getApp().globalData.categoryMessage,
      imageUrl:getApp().globalData.imageUrl,
    })
    this.setData({
      height: app.globalData.height,
      categoryId: options.categoryId
    })
    this.setData({
      nvabarData: {
        showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
        title: options.categoryName, //导航栏 中间的标题
        height: 0
      }
    })
    this.loadMessage(options.categoryId, 1)

  },
  loadMessage(categoryId, page) {
    let that = this;

    var app = getApp()
    wx.request({
      url: getApp().globalData.url + '/getMessage/getAllMessageDetail/' + categoryId + '/' + page,
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
      complete: function(res) {

        setTimeout(function() {
          that.setData({
            isLoading: true
          })
        }, 300)


      },
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
  //跳转到详情页
  to_message_detail: function(e) {
    wx.navigateTo({
      url: '/pages/message_detail/message_detail?messageId=' + e.currentTarget.id,
    })
  },
  onReachBottom: function(e) {
    // 最后一页了，取消下拉功能
    if (this.data.isLastPage) {
      return
    }
    this.loadMessage(this.data.categoryId, ++this.data.activeIndex)
  },
})
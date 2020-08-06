//app.js
App({

  globalData: {
    share: false, // 分享默认为false
    height: 0,
    url: "这里是你的后台tomcat或者公网地址，地址最后面不加斜杠",
    imageUrl: "https://*.oss-cn-huhehaote.aliyuncs.com/",//这是你的oss地址,用来展示图片,后面加斜杠
    userId: -1,
    userInfo: {},
    userIsAdmin: -1,
    shopMessage: [],
    swiperImages: [],
    categoryMessage: [],
    noticeMessage: [],
    messageDetail: [],
    isUpdate: -1,

  },
  onLaunch: function (options) {

    wx.showLoading({
      title: '努力加载中~',
    })
    let that = this;
    // 判断是否由分享进入小程序
    if (options.scene == 1007 || options.scene == 1008) {
      this.globalData.share = true
    } else {
      this.globalData.share = false
    };
    //获取设备顶部窗口的高度（不同设备窗口高度不一样，根据这个来设置自定义导航栏的高度）
    //这个最初我是在组件中获取，但是出现了一个问题，当第一次进入小程序时导航栏会把
    //页面内容盖住一部分,当打开调试重新进入时就没有问题，这个问题弄得我是莫名其妙
    //虽然最后解决了，但是花费了不少时间
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight
      }
    })

    wx.getStorage({
      key: 'userId',
      success: function (res) {
        getApp().globalData.userId = res.data
      },
    })

    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        getApp().globalData.userInfo = res.data
      },
    })
    wx.getStorage({
      key: 'userIsAdmin',
      success: function (res) {
        getApp().globalData.userIsAdmin = res.data
      },
    })
    /**
     * 获取商店
     */
    wx.getStorage({
      key: 'shopMessage',
      success: function (res) {
        that.globalData.shopMessage = res.data
        if (that.globalData.shopMessage.length != res.data.length) {
          wx.request({
            url: that.globalData.url + '/getMessage/getAllShop',
            method: "post",
            success: function (e) {
              that.globalData.shopMessage = e.data
              wx.setStorage({
                key: 'shopMessage',
                data: e.data,
              })
            }
          })
        }
      },
      fail: function () {
        wx.request({
          url: that.globalData.url + '/getMessage/getAllShop',
          method: "post",
          success: function (e) {
            that.globalData.shopMessage = e.data
            wx.setStorage({
              key: 'shopMessage',
              data: e.data,
            })
          }
        })
      }
    })

    /**
     * 获取轮播图
     */
    wx.request({
      url: that.globalData.url + '/getMessage/getAllSwiperMessage',
      method: "post",
      success: function (e) {
        that.globalData.swiperImages = e.data
      }
    })

    /**
     * 获取分类
     */

    wx.getStorage({
      key: 'categoryMessage',
      success: function (res) {
        that.globalData.categoryMessage = res.data
      },
      fail: function () {
        wx.request({
          url: that.globalData.url + '/getMessage/getAllCategoryMessage',
          method: "post",
          success: function (e) {
            that.globalData.categoryMessage = e.data
            wx.setStorage({
              key: 'categoryMessage',
              data: e.data,
            })
          }
        })
      }
    })

    /**
     * 获取公告
     */
    wx.request({
      url: that.globalData.url + '/getMessage/getAllNoticeMessage',
      method: "post",
      success: function (e) {
        that.globalData.noticeMessage = e.data
      }
    })

    /**
     * 获取最新第一页消息
     */
    wx.request({
      url: that.globalData.url + '/getMessage/getAllMessageDetail/1',
      method: "post",
      success: function (e) {
        that.globalData.messageDetail = e.data
      }
    })
    /**
     * 获取最新失物招领
     */
    wx.request({
      url: that.globalData.url + '/getMessage/getLostMessage',
      method: "post",
      success: function (e) {
        that.globalData.lost_new = e.data
      }
    })
    wx.hideLoading()
  },


})

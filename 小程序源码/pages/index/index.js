//index.js
//获取应用实例
const app = getApp()
var bmap = require('../../utils/bmap-wx.min.js');
Page({
  data: {
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    currentIndex: 0,
    swiper_images: [],
    allCategoryMessage: [],
    weatherData: null,
    floorstatus: "none",
    category_first: [],
    category_second: [],
    notice: [],
    lost_new: {},
    takeout: [],
    ad_bottom: ["../../images/other/ad_bottom.jpg"],
    user_message: [],
    activeIndex: 1,
    isLastPage: false, //是否最后一页
    isUpdate: -1,
<<<<<<< HEAD
    isLoading: false //页面是否渲染完毕
  },
  onReady() {
    let that = this
    setTimeout(function() {
=======
    isLoading: false,//页面是否渲染完毕,
    imageUrl: ""
  },
  onReady() {
    let that = this
    setTimeout(function () {
>>>>>>> 更新
      that.setData({
        isLoading: true
      })
    }, 1000)

  },

  /**
   * 联系我
   */
  me_call() {
    wx.showModal({
      title: '提示',
      content: '如有需要请联系我',
      confirmText: "联系我",
<<<<<<< HEAD
      success: function(e) {
=======
      success: function (e) {
>>>>>>> 更新
        if (e.confirm) {
          wx.makePhoneCall({
            phoneNumber: '18996379281',
          })
        }
      }
    })
  },
  //查看失物招领详情
  lookLostMessage(e) {
    wx.showModal({
      title: '失物招领',
      content: e.target.id,
      showCancel: false,
      confirmText: '已查阅'
    })
  },
  //商家查看
  to_shop(e) {
    wx.navigateTo({
      url: "/pages/shop_detail/shop_detail?shopId=" + e.target.id
    })
  },
  //查看最新的失物招领
  new_lost_look(e) {
    wx.navigateTo({
      url: "/pages/message_detail/message_detail?messageId=" + e.currentTarget.id
    })
  },
  //点击查看图片
  look_image(e) {
    wx.previewImage({
      urls: [e.target.id],
    });
  },
  //查看公告
  checkNotice(e) {
    wx.showModal({
      title: '公告',
      content: e.target.id,
      showCancel: false,
      confirmText: '已查阅'
    })
  },
  //授权天气
  getWeatherData() {
    let that = this;
    wx.openSetting({
<<<<<<< HEAD
      success: function(res) {
=======
      success: function (res) {
>>>>>>> 更新
        if (res.authSetting && res.authSetting["scope.userLocation"]) {
          //允许授权,则自动获取定位，并关闭二确弹窗，否则返回首页不处理
          wx.showToast({
            title: '您已授权获取位置信息',
            icon: 'none'
          })
          that.getWeather();
        } else {
          wx.showToast({
            title: '需要授权才可以查看天气噢~',
            icon: 'none'
          })
        }
      }
    })
  },
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
  },
  //跳转到搜索页
<<<<<<< HEAD
  search: function() {
=======
  search: function () {
>>>>>>> 更新
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  //跳转到详情页
<<<<<<< HEAD
  to_message_detail: function(e) {
=======
  to_message_detail: function (e) {
>>>>>>> 更新
    wx.navigateTo({
      url: '/pages/message_detail/message_detail?messageId=' + e.currentTarget.id,
    })
  },

  getWeather() {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: '1yb9NASdSjEYoxhTj59uD1qdyCHgKE6U'
    });
<<<<<<< HEAD
    var fail = function(data) {

    };
    var success = function(data) {
=======
    var fail = function (data) {

    };
    var success = function (data) {
>>>>>>> 更新
      var weatherData = data.currentWeather[0];
      that.setData({
        weatherData: weatherData
      });

    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
  },

<<<<<<< HEAD
  onLoad: function(options) {
=======
  onLoad: function (options) {
>>>>>>> 更新

    let that = this
    this.getWeather();
    /**
     * 商家服务
     */
    this.setData({
<<<<<<< HEAD
=======
      imageUrl:  getApp().globalData.imageUrl,
>>>>>>> 更新
      takeout: getApp().globalData.shopMessage
    })

    /**
     * 轮播图
     */
    this.setData({
      swiper_images: getApp().globalData.swiperImages
    })
    /**
     * 分类信息
     */
    this.setData({
      allCategoryMessage: getApp().globalData.categoryMessage
    })
    var get_first = getApp().globalData.categoryMessage.slice(0, 10);
    var tem = [{}, {}, {}, {}, {}]
    var get_second = getApp().globalData.categoryMessage.slice(10, 13).concat(tem)
    this.setData({
      category_first: get_first,
      category_second: get_second,
      category_second: get_second
    })
    /**
     * 公告信息
     */
    this.setData({
      notice: getApp().globalData.noticeMessage
    })
    /**
     *第一页最新信息
     */
    this.setData({
      user_message: getApp().globalData.messageDetail
    })
    /**
     * 获取最新失物招领
     */
    this.setData({
      lost_new: getApp().globalData.lost_new
    })

  },
<<<<<<< HEAD
  handleImgChange: function(e) {
=======
  handleImgChange: function (e) {
>>>>>>> 更新
    this.setData({
      currentIndex: e.detail.current
    })
  },


  /**
   * 下拉
   */
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

  loadMessage(index) {
    wx.showLoading({
      title: '加载中~',
    })
    var that = this;
    var app = getApp()
    wx.request({
      url: getApp().globalData.url + '/getMessage/getAllMessageDetail/' + index,
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
  onShow() {
    let that = this
    wx.request({
      url: getApp().globalData.url + '/getMessage/getLastNewMessage/' + getApp().globalData.userId,
      method: 'post',
<<<<<<< HEAD
      complete: function(e) {
=======
      complete: function (e) {
>>>>>>> 更新

        if (e.statusCode != 200) {
          return
        }

        wx.getStorage({
          key: 'lastNewMessage',
<<<<<<< HEAD
          success: function(res) {
=======
          success: function (res) {
>>>>>>> 更新
            if (res.data != e.data.newMessageId) {
              wx.playBackgroundAudio({
                dataUrl: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201609/7824.wav',
                title: '提示',
              })
              wx.showModal({
                title: '新消息',
                content: '内容：' + e.data.newMessageDetail,
                confirmText: "去查看",
                cancelText: "稍后去看",
<<<<<<< HEAD
                success: function(e) {
=======
                success: function (e) {
>>>>>>> 更新
                  if (e.confirm) {
                    wx.navigateTo({
                      url: '/pages/me_xiaoxi/me_xiaoxi',
                    })
                  }
                }
              })
            }
          },
        })

        wx.setStorage({
          key: 'lastNewMessage',
          data: e.data.newMessageId,
        })
      }

    })
    /**
     * 判断是否更新
     */
    if (getApp().globalData.isUpdate == 1) {
      this.onLoad(),
        this.setData({
          activeIndex: 1,
          isLastPage: false, //是否最后一页
        })
      getApp().globalData.isUpdate = -1
    }

  }

})
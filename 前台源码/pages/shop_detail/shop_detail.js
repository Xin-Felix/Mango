//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '店面详情', //导航栏 中间的标题
      height: 0
    },
    markers: [],
    shopMessage: {},
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    isLoading: false
  },
  onLoad(options) {

    let that = this
    this.setData({
      height: app.globalData.height
    })

    wx.request({
      url: getApp().globalData.url + '/getMessage/getShopMessage/' + options.shopId,
      method: "post",
      success: function(e) {
        if (e.statusCode != 200) {
          wx.showModal({
            title: '错误',
            content: '出现错误啦，请联系管理员',
          })
          return;
        }
        that.setData({
          shopMessage: e.data
        })
      },
      complete: function() {

        that.setData({
          markers: [{
            iconPath: "../../images/other/mark.png",
            id: 0,
            latitude: that.data.shopMessage.shopLatitude,
            longitude: that.data.shopMessage.shopLongitude,
            width: 20,
            height: 40,
            title: "【 " + that.data.shopMessage.shopName + "】芒果微校园合作伙伴",
          }]
        })

        setTimeout(function() {
          that.setData({
            isLoading: true
          })
        }, 300)

      }

    })


  },

  to_index() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  onShareAppMessage() {
    return {
      title: "看看这家店，还不错~"
    }
  },
  look_image(e) {
    wx.previewImage({
      urls: [e.target.id]
    })
  },
  call(e) {
    wx.showModal({
      title: '提示',
      content: '是否联系（' + e.target.id + "）",
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      success: (result) => {
        if (result.confirm) {
          wx.makePhoneCall({
            phoneNumber: e.target.id,
          });
        }
      },
    });
  }
})
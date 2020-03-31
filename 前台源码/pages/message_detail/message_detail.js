//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '详情', //导航栏 中间的标题
      height: 0,
    },
    imageUrl:"",
    showDialog1: false,
    showDialog2: false,
    showDialog3: false,
    showDialog4: false,
    floorstatus: "none",
    userIsAdmin: -1, //是否为管理员
    userId: -1,
    userInfo: {},
    comment_input: "",
    comment_reply: "",
    liuyanName: "",
    pinglunName: "",
    commentId: -1,
    receiveUserId: -1,
    commentUserId: -1,
    messageDetail: {},
    isCollection: false,
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    isLoading: false //页面是否渲染完毕
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
  admin() {
    let that = this;
    if (that.data.userIsAdmin != 2) {
      return
    }
    wx.showModal({
      title: '信息',
      content: "手机号:" + that.data.messageDetail.userPhone + ",用户Id:" + that.data.messageDetail.userId + ",用户名:" + that.data.messageDetail.mangoUser.userNickname + ",文章id:" + that.data.messageDetail.messageId,
      cancelText: "复制号码",
      confirmText: "系统回复",
      success: function(e) {
        if (e.confirm) {
          that.setData({
            showDialog4: true
          })
        } else {
          wx.setClipboardData({
            data: that.data.messageDetail.userPhone + "",
          })
        }
      }
    })

  },

  toggleDialog4() {
    this.setData({
      showDialog4: false
    })
  },
  /**
   * 管理员回复消息
   */
  admin_reply() {
    let that = this;
    if (that.data.userId == -1) {
      wx.showModal({
        title: '提示',
        content: '好像没有登录噢~',
      })
      return
    }
    wx.showLoading({
      title: '回复中~',
    })
    that.setData({

      showDialog4: false
    })
    wx.request({
      url: getApp().globalData.url + '/addNewMessageByAdmin/' + that.data.userId + '/' + that.data.messageDetail.messageId + "/" + that.data.messageDetail.userId,
      data: that.data.comment_reply,
      method: "post",
      success: function(e) {
        that.setData({
          comment_reply: "",
        })
        if (e.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '系统错误',
          })
          return
        }

        if (e.data != 200) {
          wx.showModal({
            title: '提示',
            content: '系统错误',
          })
          return
        } else {
          wx.showModal({
            title: '提示',
            content: '回复成功',
          })

        }


      },
      complete: function() {
        wx.hideLoading()
      }
    })

  },

  delete_comment(e) {
    let that = this;
    if (that.data.userId == -1) {
      wx.showModal({
        title: '提示',
        content: '好像没有登录噢~',
        confirmText: "去登陆",
        success: function(e) {
          if (e.confirm) {
            wx.switchTab({
              url: '/pages/me/me',
            })
            return;
          }
        }
      })
    }

    wx.showModal({
      title: '提示',
      content: '是否删除当前内容~',
      success: function(res) {
        if (res.confirm) {
          wx.request({
            url: getApp().globalData.url + '/deleteCommentByCommentId/' + that.data.userId + '/' + e.target.id,
            method: "post",
            success: function(result) {

              if (result.statusCode != 200) {
                wx.showModal({
                  title: '提示',
                  content: '服务器出现问题，请稍后再试',
                })
                return;
              }

              if (result.data == 200) {
                wx.showModal({
                  title: '提示',
                  content: '删除成功~',
                  success: function() {
                    wx.request({
                      url: getApp().globalData.url + '/getMessageDetailById/' + that.data.messageDetail.messageId,
                      method: "post",
                      success: function(e) {
                        that.setData({
                          messageDetail: e.data,
                        })
                      }
                    })
                  }
                })
              }

            }
          })
        }
      }
    })

  },

  delete_comment_reply(e) {
    let that = this;
    if (that.data.userId == -1) {
      wx.showModal({
        title: '提示',
        content: '好像没有登录噢~',
        confirmText: "去登陆",
        success: function(e) {
          if (e.confirm) {
            wx.switchTab({
              url: '/pages/me/me',
            })
            return;
          }
        }
      })
    }
    wx.showModal({
      title: '提示',
      content: '是否删除当前内容~',
      success: function(res) {
        if (res.confirm) {
          wx.request({
            url: getApp().globalData.url + '/deleteCommentReplyByCommentId/' + that.data.userId + '/' + e.target.id,
            method: "post",
            success: function(result) {

              if (result.statusCode != 200) {
                wx.showModal({
                  title: '提示',
                  content: '服务器出现问题，请稍后再试',
                })
                return;
              }

              if (result.data == 200) {
                wx.showModal({
                  title: '提示',
                  content: '删除成功~',
                  success: function() {
                    wx.request({
                      url: getApp().globalData.url + '/getMessageDetailById/' + that.data.messageDetail.messageId,
                      method: "post",
                      success: function(e) {
                        that.setData({
                          messageDetail: e.data,
                        })
                      }
                    })
                  }
                })
              }

            }
          })
        }
      }
    })


  },
  test() {
    let that = this;
    let list = {
      replayUserId: this.data.userId,
      replayUserName: this.data.userInfo.nickName,
      replyDetail: this.data.comment_reply,
      receiveUserName: this.data.pinglunName,
      receiveUserId: this.data.commentUserId,
      commentUserId: this.data.commentUserId,
      commentId: this.data.commentId,
    }

    if (that.data.userId == -1) {
      wx.showModal({
        title: '提示',
        content: '好像没有登录噢~',
        confirmText: "去登陆",
        success: function(e) {
          if (e.confirm) {
            wx.switchTab({
              url: '/pages/me/me',
            })
            return;
          }
        }
      })
    }

    if (that.data.comment_reply.length < 3) {
      wx.showModal({
        title: '提示',
        content: '至少输入三个字噢~',
      })
      return
    }

    that.setData({
      showDialog3: false,
    })
    wx.showLoading({
      title: '稍等噢~',
    })
    wx.request({
      url: getApp().globalData.url + '/addCommentReply/' + that.data.messageDetail.messageId,
      method: "post",
      data: list,
      success: function(e) {
        wx.hideLoading()
        if (e.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '服务器出现问题，请稍后再试',
          })
          return;
        }

        if (e.data.code == 200) {
          wx.showModal({
            title: '提示',
            content: '回复成功~',
            success: function() {
              wx.request({
                url: getApp().globalData.url + '/getMessageDetailById/' + that.data.messageDetail.messageId,
                method: "post",
                success: function(e) {
                  that.setData({
                    comment_reply: "",
                    messageDetail: e.data,

                  })
                }
              })
            }
          })
        }

        if (e.data.code == 301) {
          wx.showModal({
            title: '提示',
            content: '你已被管理员禁止发布，详情请联系管理员',
            showCancel: false
          })
        }

      }
    })

  },
  /**
   * 回复，返回服务器
   */
  comment_reply_btn() {
    let that = this;
    let list = {
      replayUserId: this.data.userId,
      replayUserName: this.data.userInfo.nickName,
      replyDetail: this.data.comment_reply,
      receiveUserName: this.data.liuyanName,
      receiveUserId: this.data.commentUserId,
      commentUserId: this.data.commentUserId,
      commentId: this.data.commentId,
    }
    if (that.data.userId == -1) {
      wx.showModal({
        title: '提示',
        content: '好像没有登录噢~',
        confirmText: "去登陆",
        success: function(e) {
          if (e.confirm) {
            wx.switchTab({
              url: '/pages/me/me',
            })
            return;
          }
        }
      })
    }

    if (that.data.comment_reply.length < 3) {
      wx.showModal({
        title: '提示',
        content: '至少输入三个字噢~',
      })
      return
    }

    that.setData({
      showDialog2: false,
    })
    wx, wx.showLoading({
      title: '稍等噢~',

    })

    wx.request({
      url: getApp().globalData.url + '/addCommentReply/' + that.data.messageDetail.messageId,
      method: "post",
      data: list,
      success: function(e) {
        wx.hideLoading()
        if (e.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '服务器出现问题，请稍后再试',
          })
          return;
        }
        if (e.data.code == 200) {
          wx.showModal({
            title: '提示',
            content: '回复成功~',
            success: function() {

              wx.request({
                url: getApp().globalData.url + '/getMessageDetailById/' + that.data.messageDetail.messageId,
                method: "post",
                success: function(e) {
                  that.setData({
                    comment_reply: "",
                    messageDetail: e.data,
                  })
                }
              })
            }
          })
        }

        if (e.data.code == 301) {
          wx.showModal({
            title: '提示',
            content: '你已被管理员禁止发布，详情请联系管理员',
            showCancel: false
          })
        }

      }
    })
  },
  /**
   * 回复数据
   */
  comment_reply(e) {
    this.setData({
      comment_reply: e.detail.value
    })
  },
  comment() {
    let that = this;

    if (that.data.userId == -1) {
      wx.showModal({
        title: '提示',
        content: '好像没有登录噢~',
        confirmText: "去登陆",
        success: function(e) {
          if (e.confirm) {
            wx.switchTab({
              url: "/pages/me/me"
            })
          }
        }
      })
      return
    }

    if (that.data.comment_input.length < 3) {
      wx.showModal({
        title: '提示',
        content: '至少输入三个字噢~',
        showCancel: false
      })
      return;
    }
    that.setData({
      showDialog1: false
    })
    wx.showLoading({
      title: '稍等噢~',
    })
    wx.request({
      url: getApp().globalData.url + '/addComment/' + that.data.userId + '/' + that.data.messageDetail.messageId + '/' + that.data.messageDetail.userId,
      method: "post",
      data: that.data.comment_input,
      success: function(e) {
        wx.hideLoading()
        if (e.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '服务器出现问题，请稍后再试',
          })
          return;
        }
        if (e.data.code == 200) {

          wx.showModal({
            title: '提示',
            content: '留言成功',
            showCancel: false,
            success: function() {
              wx.request({
                url: getApp().globalData.url + '/getMessageDetailById/' + that.data.messageDetail.messageId,
                method: "post",
                success: function(e) {
                  that.setData({
                    comment_input: "",
                    messageDetail: e.data,

                  })
                }
              })
            }
          })
        }
        if (e.data.code == 301) {
          wx.showModal({
            title: '提示',
            content: '你已被管理员禁止发布，详情请联系管理员',
            showCancel: false
          })
        }
      }
    })


  },
  /**
   * 删除信息
   */
  delete_message() {
    let that = this

    if (that.data.userId == -1) {
      wx.showModal({
        title: '提示',
        content: '出现错误，请稍后再试~',
      })
      return;
    }

    wx.showModal({
      title: '提示',
      content: '是否删除?',
      confirmColor: "#f00",
      success: function(e) {
        if (e.confirm) {
          wx.showLoading({
            title: '稍等噢~',
          })
          that.setData({
            showDialog1: false
          });
          wx.request({
            url: getApp().globalData.url + '/deleteMessageById/' + that.data.userId + '/' + that.data.messageDetail.messageId,
            method: "post",
            success: function(e) {
              wx.hideLoading()
              if (e.statusCode != 200) {
                wx.showModal({
                  title: '提示',
                  content: '服务器出现错误，请稍后再试',
                  showCancel: false
                })
                return;
              }
              if (e.data.code == 200) {
                wx.showModal({
                  title: '提示',
                  content: '删除成功',
                  showCancel: false,
                  success: function() {
                    wx.showLoading({
                      title: '更新主页信息中~',
                    })
                    that.updateAllMessage();
                    wx.hideLoading();
                  },

                })

              } else {
                wx.showModal({
                  title: '提示',
                  content: '非法操作，请联系管理员',
                  showCancel: false,
                  success: function() {
                    that.setData({
                      user_message: []
                    })
                    that.loadMessage(1)
                  }
                })
              }
            }
          })
        }
      }
    })
  },
  updateAllMessage() {
    let that = this;
    /**
     * 获取最新失物招领
     */
    wx.request({
      url: getApp().globalData.url + '/getMessage/getLostMessage',
      method: "post",
      success: function(e) {
        getApp().globalData.lost_new = e.data
      }
    })
    wx.request({
      url: getApp().globalData.url + '/getMessage/getAllMessageDetail/' + 1,
      method: "POST",
      success: (res) => {
        getApp().globalData.messageDetail = res.data
      },
      complete: function() {
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
    })
    getApp().globalData.isUpdate = 1;
  },
  /**
   * 收藏
   */
  collection() {
    let that = this;
    if (that.data.userId == -1) {
      wx.showModal({
        title: '提示',
        content: '好像没有登录噢~',
        confirmText: "去登陆",
        success: function(e) {
          if (e.confirm) {
            wx.switchTab({
              url: "/pages/me/me"
            })
          }
        }
      })
      return
    }

    if (that.data.messageDetail.userIdAnonymity == 1) {
      wx.showModal({
        title: '提示',
        content: '匿名信息无法收藏',
      })
      return
    }

    if (that.data.isCollection) {
      wx.request({
        url: getApp().globalData.url + '/deleteCollection/' + that.data.userId + '/' + that.data.messageDetail.messageId,
        method: "post",
        success: function(e) {
          if (e.statusCode != 200) {
            return
          }
          if (e.data == 200) {
            that.setData({
              isCollection: false
            })
          }

        }
      })
    } else {
      wx.request({
        url: getApp().globalData.url + '/addCollection/' + that.data.userId + '/' + that.data.messageDetail.messageId,
        method: "post",
        success: function(e) {

          if (e.statusCode != 200) {
            return
          }
          if (e.data.code == 200) {
            that.setData({
              isCollection: true
            })
          }
        }
      })
    }
  },
  onReady() {
    let that = this;
    /**页面渲染完毕 */
    setTimeout(function() {
      that.setData({
        isLoading: true
      })
    }, 500)
  },
  /**
   * 查看图片
   */
  look_image(e) {

    wx.previewImage({
      urls: [e.currentTarget.id],
    })
  },
  toggleDialog1(e) {
    this.setData({
      showDialog1: !this.data.showDialog1
    });
  },
  toggleDialog2(e) {
    this.setData({
      showDialog2: !this.data.showDialog2,
      liuyanName: e.target.dataset.name,
      commentId: e.target.dataset.commentid,
      commentUserId: e.target.id,
    });
  },
  toggleDialog3(e) {
    this.setData({
      showDialog3: !this.data.showDialog3,
      pinglunName: e.currentTarget.dataset.name,
      commentId: e.target.dataset.commentid,
      commentUserId: e.target.id,
    });
  },

  onLoad(options) {
    let that = this;
    this.setData({
      height: app.globalData.height,
      userInfo: getApp().globalData.userInfo,
      imageUrl:getApp().globalData.imageUrl,
    })

    wx.getStorage({
      key: 'userId',
      success: function(res) {
        that.setData({
          userId: res.data
        })
      },
    })

    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        that.setData({
          userInfo: res.data
        })
      },
    })


    this.setData({
      messageId: options.messageId
    })
    this.setData({
      userId: getApp().globalData.userId
    })


    wx.request({
      url: getApp().globalData.url + '/getMessageDetailById/' + options.messageId,
      method: "post",
      success: function(e) {
        if (e.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '好像出问题啦，稍后再试吧~',
          })
          return
        }

        if (e.data == "" || e.data == null) {
          wx.showModal({
            title: '提示',
            content: '文章不存在或已被删除',
            showCancel: false,
            confirmColor: "返回",
            success: function() {
              wx.navigateBack({
                delta: 1
              })
            }
          })
          return
        }
        that.setData({
          messageDetail: e.data
        })
      },
      complete: function() {


      }
    })

    that.setData({
      userIsAdmin: getApp().globalData.userIsAdmin
    })

    if (that.data.userId == -1) {
      return;
    }

    wx.request({
      url: getApp().globalData.url + '/addCollection/checkIsCollection/' + that.data.userId + '/' + options.messageId,
      method: "post",
      success: function(e) {
        if (e.statusCode != 200) {
          return
        }
        if (e.data == 1) {
          that.setData({
            isCollection: true
          })
        }
      }
    })

  },
  share_message() {

    let that = this;
    wx.request({
      url: getApp().globalData.url + '/share/addShareCount/' + that.data.messageDetail.messageId,
      method: "post",
      success: function(e) {}
    })
  },
  /**
  更新留言信息 */
  comment_input(e) {
    this.setData({
      comment_input: e.detail.value
    })
  },
  onShareAppMessage(e) {
    return {
      title: "来看看~",
      success: function(res) {},
    }
  }
})
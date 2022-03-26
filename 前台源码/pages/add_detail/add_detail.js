//index.js
//获取应用实例
const app = getApp()
var uploadImage = require('../../utils/uploadFile.js');
var util = require('../../utils/util.js');


Page({
    data: {
        // 组件所需的参数
        nvabarData: {
            showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
            title: '发布-详情', //导航栏 中间的标题
            height: 0
        },
        userId: -1,
        // 此页面 页面内容距最顶部的距离
        height: app.globalData.height * 2 + 20,
        result_image_url: [],
        img_url: [],
        hideAdd: false,
        array: [],
        category_index: null,

        input_intro: "",
        input_phone: "",
        input_level: "",
        input_major: "",
        input_anonymity: false,

    },
    input_intro: function(e) {
        let value = e.detail.value;
        this.setData({
            input_intro: value
        })
    },
    input_phone: function(e) {
        let value = e.detail.value;
        this.setData({
            input_phone: value
        })
    },
    input_level: function(e) {
        let value = e.detail.value;
        this.setData({
            input_level: value
        })
    },
    input_major: function(e) {
        let value = e.detail.value;
        this.setData({
            input_major: value
        })
    },

    onLoad() {
        this.setData({
            height: app.globalData.height
        })
        var arrays = [];
        for (var i = 0; i < getApp().globalData.categoryMessage.length; i++) {
            arrays.push(getApp().globalData.categoryMessage[i].categoryName)
        }
        this.setData({
            array: arrays
        })

        this.setData({
            userId: getApp().globalData.userId
        })

    },
    /**
     * 删除选择的图片
     */
    deleteImg: function(res) {

        let that = this;
        wx.showModal({
            title: '提示',
            content: '是否删除',
            success: function(e) {
                if (e.confirm) {
                    var image = [];
                    var i = 0;
                    for (var j = 0; j < that.data.img_url.length; j++) {
                        if (that.data.img_url[j] != res.target.id) {
                            image.push(that.data.img_url[j])
                        }
                    }
                    that.setData({
                        img_url: image
                    })
                    if (that.data.img_url.length < 9) {
                        that.setData({
                            hideAdd: false
                        })
                    } else {
                        that.setData({
                            hideAdd: true
                        })
                    }
                }

            }
        })

    },
    /**
     * 匿名开关
     */
    switch1Change() {
        this.setData({
            input_anonymity: !this.data.input_anonymity
        })
    },
    chooseimage: function() {
        var that = this;
        wx.chooseImage({
            count: 9 - that.data.img_url.length, // 默认9 
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
            success: function(res) {

                if (res.tempFilePaths.length > 0) {
                    //图如果满了9张，不显示加图
                    if (that.data.img_url.length == 9) {
                        that.setData({
                            hideAdd: true
                        })
                    } else {
                        that.setData({
                            hideAdd: false
                        })
                    }
                    //把每次选择的图push进数组
                    let img_url = that.data.img_url;

                    for (let i = 0; i < res.tempFilePaths.length; i++) {
                        if (i <= 8) {
                            img_url.push(res.tempFilePaths[i])
                        }

                    }
                    that.setData({
                            img_url: img_url
                        })
                        /**
                         * 如果选择多于九张,停止添加
                         */

                    if (that.data.img_url.length == 9) {
                        that.setData({
                            hideAdd: true
                        })
                    } else {
                        that.setData({
                            hideAdd: false
                        })
                    }
                }
            }
        })
    }, //图片上传
    img_upload: function(res) {
        let that = this;
        let img_url = that.data.img_url;

        let images_url = [];
        //由于图片只能一张一张地上传，所以用循环
        for (let i = 0; i < img_url.length; i++) {
            var tempFilePaths = img_url[i];
            var nowTime = util.formatTime(new Date());
            //支持多图上传

            //显示消息提示框
            wx.showLoading({
                title: '上传中' + (i + 1) + '/' + img_url.length,
                mask: true
            })

            //上传图片
            //你的域名下的/images/文件下的/当前年月日文件下的/图片.png
            //图片路径可自行修改

            var path = 'images/' + nowTime + '/' + new Date().getTime() + Math.floor(Math.random() * 150) + '.png';
            uploadImage(img_url[i], path,
                function(result) {
                    console.log("======上传成功图片地址为：", result);
                    wx.hideLoading();
                },
                function(result) {
                    console.log("======上传失败======", result);
                    wx.hideLoading()
                }
            )
            images_url.push(path);


            that.setData({
                result_image_url: images_url
            })
        }
    },
    isPhone(val) {

        var isPhone = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/; //手机号码
        var isMob = /^0?1[3|4|5|8][0-9]\d{8}$/; // 座机格式
        if (isMob.test(val) || isPhone.test(val)) {

            return true;
        } else {

            return false;
        }
    },
    //去左右空格;
    trim(s) {
        return s.replace(/(^\s*)|(\s*$)/g, "");
    },
    submit() {


        var that = this;



        if (that.trim(that.data.input_intro) == "" || that.trim(that.data.input_intro) < 2) {
            wx.showModal({
                title: '提示',
                content: '内容有点少噢~(至少两个字)',
                showCancel: false
            })
            return;
        }
        if (!that.isPhone(that.data.input_phone)) {
            wx.showModal({
                title: '提示',
                content: '手机格式不对噢~',
                showCancel: false
            })
            return;
        }
        if (new Number(that.data.input_level) < 14) {
            wx.showModal({
                title: '提示',
                content: '年级不对噢~',
                showCancel: false
            })
            return;
        }
        if (that.trim(that.data.input_major) < "" || that.trim(that.data.input_major).length < 3) {
            wx.showModal({
                title: '提示',
                content: '专业貌似不对噢~',
                showCancel: false
            })
            return;
        }

        if (that.data.category_index == null) {
            wx.showModal({
                title: '提示',
                content: '选择一个分类噢~',
                showCancel: false
            })
            return;
        }
        wx.showModal({
            title: '提示',
            content: '是否发布',
            success: function(e) {
                if (e.confirm) {

                    wx.showLoading({
                        title: '发布中~',
                    })

                    that.img_upload();


                    let list = {
                        "categoryId": new Number(that.data.category_index) + 1,
                        "userPhone": that.data.input_phone,
                        "userMajor": that.data.input_major,
                        "userLevel": that.data.input_level,
                        "messageDetail": that.data.input_intro,
                        "userIdAnonymity": that.data.input_anonymity ? "1" : "0",
                        "userId": that.data.userId,
                        "resultImage": that.data.result_image_url
                    }
                    if (that.data.userId == -1) {
                        wx.showModal({
                            title: '提示',
                            content: '数据出现错误,请稍后重试',
                        })
                        return;
                    }

                    wx.request({
                        url: getApp().globalData.url + '/addMessage/' + that.data.userId,
                        method: "post",
                        data: list,
                        success: function(e) {
                            wx.hideLoading()
                            if (e.statusCode != 200) {
                                wx.showModal({
                                    title: '提示',
                                    content: '服务器出现问题啦，请稍后再试~',
                                })
                                return;
                            }

                            if (e.data.code == 200) {
                                wx.showModal({
                                    title: '提示',
                                    content: '发布成功',
                                    showCancel: false,
                                    success: function(res) {
                                        if (res.confirm) {
                                            wx.showLoading({
                                                title: '更新主页信息中~',
                                            })
                                            wx.request({
                                                url: getApp().globalData.url + '/getMessage/getAllMessageDetail/' + 1,
                                                method: "POST",
                                                success: (res) => {
                                                    getApp().globalData.messageDetail = res.data
                                                        /**
                                                         * 获取最新失物招领
                                                         */
                                                    wx.request({
                                                        url: getApp().globalData.url + '/getMessage/getLostMessage',
                                                        method: "post",
                                                        success: function(e) {
                                                            getApp().globalData.lost_new = e.data
                                                            wx.hideLoading();
                                                        },
                                                        complete: function() {
                                                            getApp().globalData.isUpdate = 1
                                                            wx.switchTab({
                                                                url: '/pages/index/index',
                                                            })
                                                        }
                                                    })
                                                },

                                            })
                                        }
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
                }
            }
        })

    },
    bindPickerChange: function(e) {
        this.setData({
            category_index: e.detail.value
        })

    }
})
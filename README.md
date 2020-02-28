# Mango
### 微信小程序|校园|表白墙|失物招领|二手交易|论坛|兼职|拼车|活动等

## 微信搜索(芒果New Life)即可查看效果
![项目地址](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/65bbcd21b2ef621e566d394b21657d53fc39fe8a7ee0ca872eaebe74f3694de9f34954c4e1f92a5b926c0cda4b9304bc?pictype=scale&from=30013&version=3.3.3.3&uin=1538933906&fname=gh_ad262db22c54_1280.jpg&size=750 "项目查看")


# 2020-2-14后台源码公开

### 项目使用技术
 1.前台微信小程序(Vue)
 
 2.后台(springBoot+mybatis+mysql)
 
### 如何使用
 1.打开前台代码先修改app.js去配置服务器地址
 
 2.打开前台util/config.js配置阿里云oss(如果有自己需求可以直接在后台增加上传的代码)
 
 3.后台就不多说了,创建sql表,去修改yml文件内容
 
 4.数据库请提前储存部分信息,不然无法正常进入小程序
 
 5.因为微信小程序登录需要用到appid和密钥,登陆微信公众平台查看小程序的appid和密钥,然后找到后台源码Controller层的LoginController.java修改你的appid和密钥
 
 6.因为用到oss,帖子部分的图片地址都是手动添加的,如果有自己的oss记得替换,不然可能图片无法正常显示
 
 7.数据库是mysql,版本需要大于5.5,否则会有冲突无法导入sql文件
 

### 程序本身的一些功能
 1.发布帖子

 2.收藏

 3.转发
 
 4.帖子的增删改查
 
 5.最新消息的提醒
 
 5.管理员可以前台管理帖子
 
 6.匿名发布,封禁用户
 
 7.消息提醒等

 8.管理员以及禁用的功能(数据库表mango_user中的user_is_admin为2是管理员,user_allow为1

# Mango
### 微信小程序|校园|表白墙|失物招领|二手交易|论坛|兼职|拼车|活动等

## 微信搜索(芒果New Life)即可查看效果


![项目地址](https://images.gitee.com/uploads/images/2020/0228/193310_c2cc3774_4760255.jpeg "在这里输入图片标题")



### 另一个小程序(优化版本,预留核心功能,美化界面)[直达链接](https://github.com/Xin-Felix/Share)https://github.com/Xin-Felix/Share


# 2020-2-14后台源码公开

### 项目使用技术
 1.前台微信小程序(Vue)
 
 2.后台(springBoot+mybatis+mysql)
 
### 如何使用
 * ## 工具(IDEA(maven),tomcat,mysql(5.6以上)使用maven下载依赖以后方可启动,默认使用外置tomcat,不懂设置就默认启动就行)

 1.打开前台代码先修改app.js去配置服务器地址和oss的地址(用于展示图片)
 
 2.打开前台util/config.js配置阿里云oss(如果有自己需求可以直接在后台增加上传的代码)
 
 3.后台就不多说了,创建sql表,去修改yml文件内容
 
 4.数据库请提前储存部分信息(sql文件带测试数据,进入程序自己可以添加数据),不然无法正常进入小程序
 
 5.因为微信小程序登录需要用到appid和密钥,登陆微信公众平台查看小程序的appid和密钥,然后找到后台源码Controller层的LoginController.java修改你的appid和密钥
 
 6.去后台源码/Mango/src/main/java/work/huangxin/mango/util/isDelete/IsDelete.java添加你自己的oss信息(删除oss的文件的操作)
 
 7.数据库是mysql,版本需要大于5.5,否则会有冲突无法导入sql文件
 
 8.[oss购买地址,几块钱](https://www.aliyun.com/minisite/goods?userCode=ztot6i1n),创建bucket,请将bucket默认权限改为公共读写,否则外界无法访问
 
### 程序本身的一些功能
 1.发布帖子

 2.收藏

 3.转发
 
 4.帖子的增删改查
 
 5.最新消息的提醒
 
 5.管理员可以前台管理帖子
 
 6.匿名发布,封禁用户
 
 7.消息提醒等

 8.管理员以及禁用的功能(数据库表mango_user中的user_is_admin为2是管理员,user_allow为1正常使用,其他数字禁止用户使用程序功能)
 
 [管理员可以修改用户的帖子以及删除,在帖子页面,点击头像可以查看用户的信息并可以禁用Ta,可以回复消息给Ta]


### 程序的缺陷以及问题
 1.由于技术欠佳,后台一人维护,并没有后台,大部分数据(轮播图,添加管理员)等操作需要直接操作数据库
 
 2.图片的上传,由于服务器网速限制,文件均在阿里云oss存储
 
 3.如果自己搭建修改可以修改小程序上传的代码,保存在服务器也可以
 
# 程序还在正常上线,请拿去测试的小伙伴自行搭建服务器,不要共享我的服务器数据,如果喜欢欢迎star

## 本来是想用来给自己学校学生用,但是由于经营不佳出现后续问题,如果想在自己学校可以试试.或者拿去当毕业设计

# 如果你有什么问题可以私聊我
### QQ/WeChat 1538933906

# 如果你觉得程序帮到了你,可以请我喝杯coffee,谢谢

![weixin](https://images.gitee.com/uploads/images/2020/0228/192541_a630d5a7_4760255.jpeg "markdown")




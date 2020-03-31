var fileHost = "https://*.aliyuncs.com/"; //你的阿里云地址最后面跟上一个/   在你当前小程序的后台的uploadFile 合法域名也要配上这个域名
var config = {
  //aliyun OSS config
  uploadImageUrl: `${fileHost}`, // 默认存在根目录，可根据需求改
  //这两个你可以去阿里云购买,也就几块钱,测试没什么问题,我的就不公布了
  AccessKeySecret: '', // AccessKeySecret 去你的阿里云上控制台上找
  OSSAccessKeyId: '', // AccessKeyId 去你的阿里云上控制台上找
  timeout: 87600 //这个是上传文件时Policy的失效时间
};
module.exports = config

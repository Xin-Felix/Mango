package work.huangxin.mango.util.isDelete;

import com.aliyun.oss.OSSClient;
import work.huangxin.mango.model.*;
import work.huangxin.mango.otherMethod.DeleteAliyunFile;
import work.huangxin.mango.service.*;

import java.util.List;

public class IsDelete {


    private Integer code;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    /**
     * 500 服务器错误
     * 200 上传成功
     * 403 不允许发布,拉黑
     * 400 数据出现问题
     * 401  未登录
     * 1000 非法入侵
     */
    public IsDelete isDelete(Integer userId, Integer messageId, MangoMessageImagesService mangoMessageImagesService, MangoUserService mangoUserService, MangoMessageDetailService mangoMessageDetailService, MangoAttendService mangoAttendService, MangoCollectService mangoCollectService,MangoNewMessageService mangoNewMessageService) {
        IsDelete isDelete = new IsDelete();
        isDelete.setCode(500);

        MangoUser user = mangoUserService.getById(userId);

        if (user == null) {
            isDelete.setCode(1000);
            return isDelete;
        }

        MangoMessage message = mangoMessageDetailService.getById(messageId);

        if (user.getUserIsAdmin() == 2 || message.getUserId() == user.getUserId()) {

            /**
             * 删除对应评论
             */
            mangoMessageDetailService.deleteCommentAndReply(messageId);
            /**
             * 删除我的参与
             */
            MangoAttend mangoAttend = new MangoAttend();
            mangoAttend.setMessageId(messageId);
            mangoAttendService.delete(mangoAttend);
            /**
             * 删除收藏
             */
            MangoCollect mangoCollect = new MangoCollect();
            mangoCollect.setMessageId(messageId);
            mangoCollectService.delete(mangoCollect);

            /**
             * 删除消息
             */
            MangoNewMessage mangoNewMessage = new MangoNewMessage();
            mangoNewMessage.setMessageId(messageId);
            mangoNewMessageService.delete(mangoNewMessage);

            mangoMessageDetailService.deleteById(messageId);
            MangoMessageImages mangoMessageImages = new MangoMessageImages();
            mangoMessageImages.setMessageId(messageId);
            List<MangoMessageImages> images = mangoMessageImagesService.findList(mangoMessageImages);
            mangoMessageImagesService.delete(mangoMessageImages);

            // Endpoint以杭州为例，其它Region请按实际情况填写。
            String endpoint = "你的阿里云实际位置地址";
            // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录 https://ram.console.aliyun.com 创建RAM账号。
            String accessKeyId = "你的阿里云id";
            String accessKeySecret = "你的阿里云密钥";
            String bucketName = "oss名称";


            // 创建OSSClient实例。
            OSSClient ossClient = new OSSClient(endpoint, accessKeyId, accessKeySecret);
            DeleteAliyunFile deleteAliyunFile = new DeleteAliyunFile();

            for (int i = 0; i < images.size(); i++) {
                String objectName = images.get(i).getImageUrl();
                deleteAliyunFile.DeleteAliyunFile(objectName, ossClient, bucketName);
            }

            // 关闭OSSClient。
//            ossClient.shutdown();

            isDelete.setCode(200);
        }
        return isDelete;
    }
}

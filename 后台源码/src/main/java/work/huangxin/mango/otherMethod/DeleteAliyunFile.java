package work.huangxin.mango.otherMethod;

import com.aliyun.oss.OSSClient;

public class DeleteAliyunFile {

    public Boolean DeleteAliyunFile(String filePath, OSSClient ossClient, String bucketName) {
        try {

            // 删除文件。
            ossClient.deleteObject(bucketName, filePath);


            return true;
        } catch (Exception e) {
            return false;
        }
    }
}

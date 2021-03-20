package work.huangxin.mango.util.isComment;

import work.huangxin.mango.model.MangoAttend;
import work.huangxin.mango.model.MangoComment;
import work.huangxin.mango.model.MangoNewMessage;
import work.huangxin.mango.model.MangoUser;
import work.huangxin.mango.service.MangoAttendService;
import work.huangxin.mango.service.MangoCommentService;
import work.huangxin.mango.service.MangoNewMessageService;
import work.huangxin.mango.service.MangoUserService;

public class IsComment {

    private Integer code;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public IsComment isTrue(Integer userId, Integer messageId, String userComment, Integer messageUserId, MangoUserService mangoUserService, MangoCommentService mangoCommentService, MangoNewMessageService mangoNewMessageService, MangoAttendService mangoAttendService) {
        IsComment isComment = new IsComment();
        isComment.setCode(500);
        MangoUser user = mangoUserService.getById(userId);
        if (user == null) {
            isComment.setCode(400);
            return isComment;
        }

        if(user.getUserAllow()!=1){
            isComment.setCode(301);
            return isComment;
        }

        MangoComment mangoComment = new MangoComment();
        mangoComment.setMessageId(messageId);
        mangoComment.setUserId(userId);
        mangoComment.setCommentDetail(userComment);
        mangoCommentService.add(mangoComment);

      if(userId!=messageUserId) {
          MangoNewMessage mangoNewMessage = new MangoNewMessage();
          mangoNewMessage.setUserId(messageUserId);
          mangoNewMessage.setNewMessageType(1);
          mangoNewMessage.setNewMessageDetail(userComment);
          mangoNewMessage.setMessageId(messageId);
          mangoNewMessageService.add(mangoNewMessage);
      }
        MangoAttend mangoAttend = new MangoAttend();

        mangoAttend.setMessageId(messageId);
        mangoAttend.setUserId(userId);

        if (mangoAttendService.findCount(mangoAttend) != 0) {
            isComment.setCode(200);
            return isComment;
        }


        mangoAttendService.add(mangoAttend);

        isComment.setCode(200);
        return isComment;
    }
}

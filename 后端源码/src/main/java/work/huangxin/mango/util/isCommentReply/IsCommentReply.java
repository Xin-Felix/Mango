package work.huangxin.mango.util.isCommentReply;

import work.huangxin.mango.model.MangoAttend;
import work.huangxin.mango.model.MangoCommentReply;
import work.huangxin.mango.model.MangoNewMessage;
import work.huangxin.mango.model.MangoUser;
import work.huangxin.mango.service.MangoAttendService;
import work.huangxin.mango.service.MangoCommentReplayService;
import work.huangxin.mango.service.MangoNewMessageService;
import work.huangxin.mango.service.MangoUserService;

public class IsCommentReply {
    private Integer code;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public IsCommentReply isTrue(Integer messageId, MangoCommentReply mangoCommentReply, MangoUserService mangoUserService, MangoCommentReplayService mangoCommentReplayService, MangoNewMessageService mangoNewMessageService, MangoAttendService mangoAttendService) {
        IsCommentReply isCommentReply = new IsCommentReply();
        isCommentReply.setCode(500);
        MangoUser user = mangoUserService.getById(mangoCommentReply.getReplayUserId());
        if (user == null) {
            isCommentReply.setCode(400);
            return isCommentReply;
        }

        if(user.getUserAllow()!=1){
            isCommentReply.setCode(301);
            return isCommentReply;
        }

        mangoCommentReplayService.add(mangoCommentReply);


        if (mangoCommentReply.getReceiveUserId() == mangoCommentReply.getReplayUserId()) {
            isCommentReply.setCode(200);
            return isCommentReply;
        }

        if(mangoCommentReply.getReplayUserId()!=mangoCommentReply.getReceiveUserId()) {
            MangoNewMessage mangoNewMessage = new MangoNewMessage();
            mangoNewMessage.setUserId(mangoCommentReply.getReceiveUserId());
            mangoNewMessage.setNewMessageType(2);
            mangoNewMessage.setMessageId(messageId);
            mangoNewMessage.setNewMessageDetail(mangoCommentReply.getReplyDetail());
            mangoNewMessageService.add(mangoNewMessage);
        }

        MangoAttend mangoAttend = new MangoAttend();
        mangoAttend.setMessageId(messageId);
        mangoAttend.setUserId(mangoCommentReply.getReplayUserId());

        if (mangoAttendService.findCount(mangoAttend) != 0) {
            isCommentReply.setCode(200);
            return isCommentReply;
        }

        mangoAttendService.add(mangoAttend);


        isCommentReply.setCode(200);
        return isCommentReply;
    }
}

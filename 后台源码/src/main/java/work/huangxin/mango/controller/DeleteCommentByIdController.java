package work.huangxin.mango.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import work.huangxin.mango.model.MangoComment;
import work.huangxin.mango.model.MangoCommentReply;
import work.huangxin.mango.model.MangoUser;
import work.huangxin.mango.service.MangoCommentReplayService;
import work.huangxin.mango.service.MangoCommentService;
import work.huangxin.mango.service.MangoUserService;

@RestController
public class DeleteCommentByIdController {

    @Autowired
    private MangoCommentService mangoCommentService;
    @Autowired
    private MangoUserService mangoUserService;
    @Autowired
    private MangoCommentReplayService mangoCommentReplayService;

    @Transactional
    @PostMapping("/deleteCommentByCommentId/{userId}/{messageId}")
    public Integer deleteCommentByCommentId(@PathVariable Integer userId, @PathVariable Integer messageId) {
        MangoUser user = mangoUserService.getById(userId);
        if (user == null) {
            return 400;
        }
        MangoComment mangoComment = new MangoComment();

        if (user.getUserIsAdmin() == 2) {
            mangoComment.setCommentId(messageId);
        } else {
            mangoComment.setCommentId(messageId);
            mangoComment.setUserId(userId);
        }

        mangoCommentService.delete(mangoComment);

        MangoCommentReply mangoCommentReply = new MangoCommentReply();
        mangoCommentReply.setCommentId(messageId);
        mangoCommentReplayService.delete(mangoCommentReply);


        return 200;
    }


    @Transactional
    @PostMapping("/deleteCommentReplyByCommentId/{userId}/{commentReplyId}")
    public Integer deleteCommentReplyByCommentId(@PathVariable Integer userId, @PathVariable Integer commentReplyId) {
        MangoUser user = mangoUserService.getById(userId);
        if (user == null) {
            return 400;
        }
        MangoCommentReply mangoCommentReply = new MangoCommentReply();

        if (user.getUserIsAdmin() == 2) {
            mangoCommentReply.setCommentReplyId(commentReplyId);
        } else {
            mangoCommentReply.setCommentReplyId(commentReplyId);
            mangoCommentReply.setReplayUserId(userId);
        }

        mangoCommentReplayService.delete(mangoCommentReply);

        return 200;
    }

}



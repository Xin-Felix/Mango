package work.huangxin.mango.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import work.huangxin.mango.model.*;
import work.huangxin.mango.service.*;

import java.util.LinkedList;
import java.util.List;

@RestController
public class GetMessageDetailController {

    @Autowired
    private MangoMessageDetailService mangoMessageDetailService;
    @Autowired
    private MangoMessageImagesService mangoMessageImagesService;
    @Autowired
    private MangoCommentService mangoCommentService;
    @Autowired
    private MangoCommentReplayService mangoCommentReplayService;
    @Autowired
    private MangoUserService mangoUserService;

    @PostMapping("/getMessage/getAllMessageDetail/{pageNumber}")
    public List<MangoMessage> getAllMessageDetail(@PathVariable Integer pageNumber) {

        PageHelper.startPage(pageNumber, 8);

        PageInfo<MangoMessage> pageInfo = new PageInfo<MangoMessage>(mangoMessageDetailService.getAllMessage());

        if (pageInfo.getPageNum() < pageNumber) {
            List list1 = new LinkedList();
            list1.add(200);
            return list1;
        }
        List<MangoMessage> allMessage = pageInfo.getList();

        return getImage(allMessage, mangoUserService, mangoMessageImagesService);
    }

    @PostMapping("/getMessage/getAllMessageDetail/{categoryId}/{pageNumber}")
    public List<MangoMessage> getMessageByCategoryId(@PathVariable Integer categoryId, @PathVariable Integer pageNumber) {
        PageHelper.startPage(pageNumber, 8);

        PageInfo<MangoMessage> pageInfo = new PageInfo<MangoMessage>(mangoMessageDetailService.getMessageByCategoryId(categoryId));

        if (pageInfo.getPageNum() < pageNumber) {
            List list1 = new LinkedList();
            list1.add(200);
            return list1;
        }
        List<MangoMessage> allMessage = pageInfo.getList();
        return getImage(allMessage, mangoUserService, mangoMessageImagesService);
    }

    public List<MangoMessage> getImage(List<MangoMessage> allMessage, MangoUserService mangoUserService, MangoMessageImagesService mangoMessageImagesService) {
        for (int i = 0; i < allMessage.size(); i++) {
            allMessage.get(i).setMangoUser(mangoUserService.getById(allMessage.get(i).getUserId()));
            MangoMessageImages mangoMessageImages = new MangoMessageImages();
            mangoMessageImages.setMessageId(allMessage.get(i).getMessageId());
            allMessage.get(i).setMessageImages(mangoMessageImagesService.findList(mangoMessageImages));
        }
        return allMessage;
    }

    @PostMapping("/getMessageDetailById/{id}")
    public MangoMessage getMessageDetailById(@PathVariable Integer id) {
        MangoMessage mangoMessage = mangoMessageDetailService.getById(id);

        if (mangoMessage == null) {
            return null;
        }

        MangoComment mangoComment = new MangoComment();
        mangoComment.setMessageId(id);
        List<MangoComment> comments = mangoCommentService.findList(mangoComment);
        mangoMessage.setComments(comments);
        MangoUser user = mangoUserService.getById(mangoMessage.getUserId());
        mangoMessage.setMangoUser(user);


        MangoMessageImages mangoMessageImages = new MangoMessageImages();
        mangoMessageImages.setMessageId(id);
        mangoMessage.setMessageImages(mangoMessageImagesService.findList(mangoMessageImages));

        Integer messageWatch = mangoMessage.getMessageWatch();

        MangoMessage mangoMessage1 = new MangoMessage();
        mangoMessage1.setMessageId(id);
        mangoMessage1.setMessageWatch(messageWatch + 1);
        mangoMessage1.setMessageComment(comments.size());
        mangoMessageDetailService.update(mangoMessage1);

        if (comments.size() == 0) {
            return mangoMessage;
        }


        for (int i = 0; i < comments.size(); i++) {
            MangoCommentReply mangoCommentReply = new MangoCommentReply();
            mangoCommentReply.setCommentId(comments.get(i).getCommentId());
            comments.get(i).setCommentReplies(mangoCommentReplayService.findList(mangoCommentReply));
            comments.get(i).setMangoUser(mangoUserService.getById(comments.get(i).getUserId()));
        }
        mangoMessage.setComments(comments);
        return mangoMessage;
    }

    @PostMapping("/getMessage/getMessageDetailByUserId/{userId}/{pageNumber}")
    public List<MangoMessage> getMessageDetailByUserId(@PathVariable Integer userId, @PathVariable Integer pageNumber) {

        MangoUser user = mangoUserService.getById(userId);

        if (user.getUserIsAdmin() == 2) {
            PageHelper.startPage(pageNumber, 5);
            PageInfo<MangoMessage> pageInfo = new PageInfo<MangoMessage>(mangoMessageDetailService.getAllMessage());
            List<MangoMessage> list = pageInfo.getList();
            getImage(list, mangoUserService, mangoMessageImagesService);
            if (pageInfo.getPageNum() < pageNumber) {
                List list1 = new LinkedList();
                list1.add(200);
                return list1;
            }
            return list;
        } else {
            PageHelper.startPage(pageNumber, 3);
            PageInfo<MangoMessage> pageInfo = new PageInfo<MangoMessage>(mangoMessageDetailService.getMessageDetailByUserId(userId));
            List<MangoMessage> list = pageInfo.getList();
            getImage(list, mangoUserService, mangoMessageImagesService);
            if (pageInfo.getPageNum() < pageNumber) {
                List list1 = new LinkedList();
                list1.add(200);
                return list1;
            }
            return list;

        }


    }

}

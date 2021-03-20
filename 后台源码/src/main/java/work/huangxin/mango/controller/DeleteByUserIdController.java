package work.huangxin.mango.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import work.huangxin.mango.service.*;
import work.huangxin.mango.util.isDelete.IsDelete;

@RestController
public class DeleteByUserIdController {
    @Autowired
    private MangoMessageDetailService mangoMessageDetailService;
    @Autowired
    private MangoMessageImagesService mangoMessageImagesService;
    @Autowired
    private MangoAttendService mangoAttendService;
    @Autowired
    private MangoUserService mangoUserService;
    @Autowired
    private MangoCollectService mangoCollectService;
    @Autowired
    private MangoNewMessageService mangoNewMessageService;


    @Transactional
    @PostMapping("/deleteMessageById/{userId}/{messageId}")
    public IsDelete deleteByUserId(@PathVariable Integer userId, @PathVariable Integer messageId) {
        return new IsDelete().isDelete(userId, messageId, mangoMessageImagesService, mangoUserService, mangoMessageDetailService,mangoAttendService,mangoCollectService,mangoNewMessageService);
    }


}

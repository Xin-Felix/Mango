package work.huangxin.mango.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import work.huangxin.mango.model.MangoAttend;
import work.huangxin.mango.model.MangoMessage;
import work.huangxin.mango.service.MangoAttendService;
import work.huangxin.mango.service.MangoMessageDetailService;
import work.huangxin.mango.service.MangoMessageImagesService;
import work.huangxin.mango.service.MangoUserService;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@RestController
public class GetAttendMessageController {

    @Autowired
    private MangoUserService mangoUserService;
    @Autowired
    private MangoMessageDetailService mangoMessageDetailService;
    @Autowired
    private MangoMessageImagesService mangoMessageImagesService;
    @Autowired
    private MangoAttendService mangoAttendService;


    @PostMapping("/getMessage/getAttendMessageByUserId/{userId}/{pageNumber}")

    public List<MangoMessage> getAttendMessageByUserId(@PathVariable Integer userId, @PathVariable Integer pageNumber) {
        PageHelper.startPage(pageNumber, 5);
        PageInfo<MangoAttend> pageInfo = new PageInfo<MangoAttend>(mangoAttendService.getAllAttendMessageByUserId(userId));

        if (pageInfo.getPageNum() < pageNumber) {
            List list1 = new LinkedList();
            list1.add(200);
            return list1;
        }
        List<MangoAttend> list = pageInfo.getList();


        List<MangoMessage> list1 = new ArrayList<MangoMessage>();
        for (int i = 0; i < list.size(); i++) {
            Integer messageId = list.get(i).getMessageId();
            MangoMessage message = mangoMessageDetailService.getById(messageId);
            list1.add(message);
        }
        return new GetMessageDetailController().getImage(list1, mangoUserService, mangoMessageImagesService);
    }
}

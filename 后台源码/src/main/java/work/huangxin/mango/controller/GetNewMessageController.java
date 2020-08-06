package work.huangxin.mango.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import work.huangxin.mango.model.MangoNewMessage;
import work.huangxin.mango.model.MangoUser;
import work.huangxin.mango.service.MangoNewMessageService;
import work.huangxin.mango.service.MangoUserService;

import java.util.LinkedList;
import java.util.List;

@RestController
public class GetNewMessageController {


    @Autowired
    private MangoUserService mangoUserService;
    @Autowired
    private MangoNewMessageService mangoNewMessageService;

    @PostMapping("/getMessage/getAllNewMessage/{userId}/{pageNumber}")
    public List<MangoNewMessage> getAllNewMessage(@PathVariable Integer userId, @PathVariable Integer pageNumber) {
        MangoUser user = mangoUserService.getById(userId);
        if (user == null) {
            return null;
        }
        PageHelper.startPage(pageNumber, 10);
        PageInfo<MangoNewMessage> pageInfo = new PageInfo<MangoNewMessage>(mangoNewMessageService.getAllNewMessage(userId));

        if (pageInfo.getPageNum() < pageNumber) {
            List list1 = new LinkedList();
            list1.add(200);
            return list1;
        }
        List<MangoNewMessage> list = pageInfo.getList();
        return list;
    }

    @PostMapping("/getMessage/getLastNewMessage/{userId}")
    public MangoNewMessage getLastNewMessage(@PathVariable Integer userId) {

        if (userId == -1) {
            return null;
        }

        return mangoNewMessageService.getLastNewMessage(userId);

    }


}

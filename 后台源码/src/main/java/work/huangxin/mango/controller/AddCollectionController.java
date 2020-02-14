package work.huangxin.mango.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import work.huangxin.mango.model.MangoAttend;
import work.huangxin.mango.model.MangoCollect;
import work.huangxin.mango.model.MangoMessage;
import work.huangxin.mango.service.MangoCollectService;
import work.huangxin.mango.service.MangoMessageDetailService;
import work.huangxin.mango.service.MangoMessageImagesService;
import work.huangxin.mango.service.MangoUserService;
import work.huangxin.mango.util.isCollect.IsCollect;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@RestController
public class AddCollectionController {
    @Autowired
    private MangoCollectService mangoCollectService;
    @Autowired
    private MangoUserService mangoUserService;
    @Autowired
    private MangoMessageImagesService mangoMessageImagesService;
    @Autowired
    private MangoMessageDetailService mangoMessageDetailService;

    @PostMapping("/getMessage/getAllCollectionMessageByUserId/{userId}/{pageNumber}")

    public List<MangoMessage> getAllCollectionMessageByUserId(@PathVariable Integer userId, @PathVariable Integer pageNumber) {
        PageHelper.startPage(pageNumber, 5);
        PageInfo<MangoCollect> pageInfo = new PageInfo<MangoCollect>(mangoCollectService.getAllCollectionMessageByUserId(userId));

        if (pageInfo.getPageNum() < pageNumber) {
            List list1 = new LinkedList();
            list1.add(200);
            return list1;
        }
        List<MangoCollect> list = pageInfo.getList();


        List<MangoMessage> list1 = new ArrayList<MangoMessage>();
        for (int i = 0; i < list.size(); i++) {
            Integer messageId = list.get(i).getMessageId();
            MangoMessage message = mangoMessageDetailService.getById(messageId);
            list1.add(message);
        }
        return new GetMessageDetailController().getImage(list1, mangoUserService, mangoMessageImagesService);
    }


    @Transactional
    @PostMapping("/addCollection/{userId}/{messageId}")
    public IsCollect addCollection(@PathVariable Integer userId, @PathVariable Integer messageId) {
        return new IsCollect().isTrue(userId, messageId, mangoCollectService, mangoUserService);
    }

    @PostMapping("/addCollection/checkIsCollection/{userId}/{messageId}")
    public Integer checkIsCollection(@PathVariable Integer userId, @PathVariable Integer messageId) {
        MangoCollect mangoCollect = new MangoCollect();
        mangoCollect.setUserId(userId);
        mangoCollect.setMessageId(messageId);
        return mangoCollectService.findCount(mangoCollect);
    }

    @Transactional
    @PostMapping("/deleteCollection/{userId}/{messageId}")
    public Integer deleteCollection(@PathVariable Integer userId, @PathVariable Integer messageId) {


        MangoCollect mangoCollect = new MangoCollect();
        mangoCollect.setUserId(userId);
        mangoCollect.setMessageId(messageId);
        mangoCollectService.delete(mangoCollect);
        return 200;
    }
}

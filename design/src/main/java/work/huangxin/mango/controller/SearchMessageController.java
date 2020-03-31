package work.huangxin.mango.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import work.huangxin.mango.model.MangoMessage;
import work.huangxin.mango.service.MangoMessageDetailService;
import work.huangxin.mango.service.MangoMessageImagesService;
import work.huangxin.mango.service.MangoUserService;

import java.util.LinkedList;
import java.util.List;

@RestController
public class SearchMessageController {

    @Autowired
    private MangoMessageDetailService mangoMessageDetailService;
    @Autowired
    private MangoUserService mangoUserService;
    @Autowired
    private MangoMessageImagesService mangoMessageImagesService;

    @PostMapping("/search/{categoryId}/{keyword}")
    public List<MangoMessage> getMessageByCategoryAndKeyword(@PathVariable Integer categoryId, @PathVariable String keyword) {
        List<MangoMessage> allMessage = mangoMessageDetailService.getMessageByCategoryAndKeyword(categoryId, keyword);
        return new GetMessageDetailController().getImage(allMessage, mangoUserService, mangoMessageImagesService);

    }

    @PostMapping("/searchByKeyword/{keyword}/{pageNumber}")
    public List<MangoMessage> getMessageByCategoryAndKeyword(@PathVariable String keyword, @PathVariable Integer pageNumber) {

        PageHelper.startPage(pageNumber, 3);

        PageInfo<MangoMessage> pageInfo = new PageInfo<MangoMessage>(mangoMessageDetailService.getMessageByKeyword(keyword));

        if (pageInfo.getPageNum() < pageNumber) {
            List list1 = new LinkedList();
            list1.add(200);
            return list1;
        }

        List<MangoMessage> allMessage = pageInfo.getList();

        return new GetMessageDetailController().getImage(allMessage, mangoUserService, mangoMessageImagesService);

    }

}

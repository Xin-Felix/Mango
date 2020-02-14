package work.huangxin.mango.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import work.huangxin.mango.model.MangoMessage;
import work.huangxin.mango.service.MangoMessageDetailService;
import work.huangxin.mango.service.MangoMessageImagesService;
import work.huangxin.mango.service.MangoUserService;
import work.huangxin.mango.util.Upload.IsUpload;

@RestController
public class AddMessageDetailController {
    @Autowired
    private MangoMessageImagesService mangoMessageImagesService;
    @Autowired
    private MangoMessageDetailService mangoMessageDetailService;
    @Autowired
    private MangoUserService mangoUserService;

    @Transactional
    @PostMapping("/addMessage/{userId}")
    public IsUpload addMessage(@PathVariable Integer userId, @RequestBody MangoMessage mangoMessage) {
        return new IsUpload().isTrue(mangoMessage, mangoMessageDetailService, mangoMessageImagesService, mangoUserService);
    }
}

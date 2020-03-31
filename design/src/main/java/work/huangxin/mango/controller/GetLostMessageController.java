package work.huangxin.mango.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import work.huangxin.mango.model.MangoMessage;
import work.huangxin.mango.service.MangoMessageDetailService;

@RestController
public class GetLostMessageController {
    @Autowired
    private MangoMessageDetailService mangoMessageDetailService;

    @PostMapping("/getMessage/getLostMessage")
    public MangoMessage getLostMessage(){

        return mangoMessageDetailService.getLostMessage();
    }
}

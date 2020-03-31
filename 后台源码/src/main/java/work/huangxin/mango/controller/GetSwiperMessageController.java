package work.huangxin.mango.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import work.huangxin.mango.model.MangoSwiper;
import work.huangxin.mango.service.MangoSwiperService;

import java.util.List;

@RestController
public class GetSwiperMessageController {

    @Autowired
    private MangoSwiperService mangoSwiperService;

    @PostMapping("/getMessage/getAllSwiperMessage")
    public List<MangoSwiper> getAllSwiperMessage() {
        return mangoSwiperService.findAll();
    }
}

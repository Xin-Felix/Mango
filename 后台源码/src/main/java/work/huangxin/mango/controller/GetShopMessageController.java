package work.huangxin.mango.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import work.huangxin.mango.model.MangoShop;
import work.huangxin.mango.model.MangoShopBusiness;
import work.huangxin.mango.model.MangoShopImages;
import work.huangxin.mango.service.MangoShopBusinessService;
import work.huangxin.mango.service.MangoShopImagesService;
import work.huangxin.mango.service.MangoShopService;

import java.util.List;

@RestController
public class GetShopMessageController {
    @Autowired
    private MangoShopService mangoShopService;

    @Autowired
    private MangoShopImagesService mangoShopImagesService;
    @Autowired
    private MangoShopBusinessService mangoShopBusinessService;

    @PostMapping("/getMessage/getAllShop")
    public List<MangoShop> getAllShopMessage() {
        return mangoShopService.findAll();
    }

    @PostMapping("/getMessage/getShopMessage/{id}")
    public MangoShop getShopMessageById(@PathVariable Integer id) {
        MangoShop mangoShop = mangoShopService.getById(id);
        MangoShopImages mangoShopImages = new MangoShopImages();
        mangoShopImages.setShopId(id);
        mangoShop.setShopImages(mangoShopImagesService.findList(mangoShopImages));
        MangoShopBusiness mangoShopBusiness = new MangoShopBusiness();
        mangoShopBusiness.setShopId(id);
        mangoShop.setShopBusinesses(mangoShopBusinessService.findList(mangoShopBusiness));
        return mangoShop;
    }

}

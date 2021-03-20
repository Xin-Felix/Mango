package work.huangxin.mango.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import work.huangxin.mango.mapper.MangoShopMapper;
import work.huangxin.mango.model.MangoShop;
import work.huangxin.mango.util.SameService;

@Service
public class MangoShopService extends SameService<MangoShop> {
    @Autowired
    private MangoShopMapper mangoShopMapper;


}

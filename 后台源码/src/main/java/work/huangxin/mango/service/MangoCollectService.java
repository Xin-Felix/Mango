package work.huangxin.mango.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import work.huangxin.mango.mapper.MangoCollectMapper;
import work.huangxin.mango.model.MangoCollect;
import work.huangxin.mango.util.SameService;

import java.util.List;

@Service
public class MangoCollectService extends SameService<MangoCollect> {

    @Autowired
    private MangoCollectMapper mangoCollectMapper;

    public List<MangoCollect> getAllCollectionMessageByUserId(Integer userId) {
        return mangoCollectMapper.getAllCollectionMessageByUserId(userId);
    }
}

package work.huangxin.mango.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import work.huangxin.mango.mapper.MangoNewMessageMapper;
import work.huangxin.mango.model.MangoNewMessage;
import work.huangxin.mango.util.SameService;

import java.util.List;

@Service
public class MangoNewMessageService extends SameService<MangoNewMessage> {


    @Autowired
    private MangoNewMessageMapper mangoNewMessageMapper;

    public List<MangoNewMessage> getAllNewMessage(Integer userId) {
        return mangoNewMessageMapper.getAllNewMessage(userId);
    }

    public MangoNewMessage getLastNewMessage(Integer id) {
        return mangoNewMessageMapper.getLastNewMessage(id);
    }
}

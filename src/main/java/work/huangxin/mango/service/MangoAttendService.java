package work.huangxin.mango.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import work.huangxin.mango.mapper.MangoAttendMapper;
import work.huangxin.mango.model.MangoAttend;
import work.huangxin.mango.util.SameService;

import java.util.List;

@Service
public class MangoAttendService extends SameService<MangoAttend> {

    @Autowired
    private MangoAttendMapper mangoAttendMapper;

    public List<MangoAttend> getAllAttendMessageByUserId(Integer id) {
        return mangoAttendMapper.getAllAttendMessageByUserId(id);
    }
}

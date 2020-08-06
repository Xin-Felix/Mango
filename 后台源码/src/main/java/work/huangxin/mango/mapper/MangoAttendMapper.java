package work.huangxin.mango.mapper;

import tk.mybatis.mapper.common.Mapper;
import work.huangxin.mango.model.MangoAttend;

import java.util.List;

public interface MangoAttendMapper extends Mapper<MangoAttend> {
    List<MangoAttend> getAllAttendMessageByUserId(Integer id);
}
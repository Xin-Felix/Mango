package work.huangxin.mango.mapper;

import tk.mybatis.mapper.common.Mapper;
import work.huangxin.mango.model.MangoNewMessage;

import java.util.List;

public interface MangoNewMessageMapper extends Mapper<MangoNewMessage> {

    List<MangoNewMessage> getAllNewMessage(Integer id);


    MangoNewMessage getLastNewMessage(Integer id);
}
package work.huangxin.mango.mapper;

import org.apache.ibatis.annotations.Param;
import tk.mybatis.mapper.common.Mapper;
import work.huangxin.mango.model.MangoMessage;

import java.util.List;

public interface MangoMessageMapper extends Mapper<MangoMessage> {

    MangoMessage getLostMessage();

    Integer insertMessageDetail(MangoMessage mangoMessage);

    List<MangoMessage> getAllMessage();

    List<MangoMessage> getMessageByCategoryId(Integer id);

    List<MangoMessage> getMessageByCategoryAndKeyword(@Param("id") Integer id,@Param("keyword") String keyword);

    List<MangoMessage> getMessageDetailByUserId (Integer userId);

    List<MangoMessage> getMessageByKeyword(@Param("keyword") String keyword);

    void deleteCommentAndReply(@Param("id") Integer id);



}
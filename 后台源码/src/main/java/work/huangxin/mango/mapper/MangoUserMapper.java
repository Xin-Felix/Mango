package work.huangxin.mango.mapper;

import tk.mybatis.mapper.common.Mapper;
import work.huangxin.mango.model.MangoUser;

public interface MangoUserMapper extends Mapper<MangoUser> {

    Integer insertUserMessage(MangoUser mangoUser);

}
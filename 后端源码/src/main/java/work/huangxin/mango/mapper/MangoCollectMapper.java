package work.huangxin.mango.mapper;

import tk.mybatis.mapper.common.Mapper;
import work.huangxin.mango.model.MangoAttend;
import work.huangxin.mango.model.MangoCollect;

import java.util.List;

public interface MangoCollectMapper extends Mapper<MangoCollect> {
    List<MangoCollect>  getAllCollectionMessageByUserId(Integer id);

}
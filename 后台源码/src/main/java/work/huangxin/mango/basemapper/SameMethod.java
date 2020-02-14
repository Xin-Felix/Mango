package work.huangxin.mango.basemapper;

import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.common.MySqlMapper;

public interface SameMethod<T> extends Mapper<T>, MySqlMapper<T> {
}

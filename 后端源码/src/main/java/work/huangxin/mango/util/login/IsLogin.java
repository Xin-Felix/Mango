package work.huangxin.mango.util.login;

import org.springframework.stereotype.Component;
import work.huangxin.mango.model.MangoUser;
import work.huangxin.mango.service.MangoUserService;

import java.util.List;

@Component
public class IsLogin {


    private Integer code;

    private Integer userId;


    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * 用户登录判断
     *
     * @param mangoUser
     * @param openid
     * @param mangoUserService
     * @return
     */

    public IsLogin isTrue(MangoUser mangoUser, String openid, MangoUserService mangoUserService) {
        MangoUser mangoUser1 = new MangoUser();
        mangoUser1.setUserOpenid(openid);

        IsLogin isLogin = new IsLogin();
        isLogin.setCode(500);
        List<MangoUser> userMessageByOtherMessage = mangoUserService.getUserMessageByOtherMessage(mangoUser1);

        try {
            if (userMessageByOtherMessage.size() == 1) {
                mangoUserService.updateUserMessage(mangoUser);
                isLogin.setCode(200);//老用户
                isLogin.setUserId(userMessageByOtherMessage.get(0).getUserId());
            } else {
                mangoUserService.insertUserMessage(mangoUser);
                isLogin.setUserId(mangoUser.getUserId());
                isLogin.setCode(300);//新用户
            }
        } catch (Exception e) {
            e.printStackTrace();
            isLogin.setCode(500);//出现错误
        }
        return isLogin;
    }


}

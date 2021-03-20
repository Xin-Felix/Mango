package work.huangxin.mango.model;

import javax.persistence.*;

@Table(name = "`mango_attend`")
public class MangoAttend {
    @Id
    @Column(name = "`attend_id`")
    private Integer attendId;

    @Column(name = "`user_id`")
    private Integer userId;

    @Column(name = "`message_id`")
    private Integer messageId;

    /**
     * @return attend_id
     */
    public Integer getAttendId() {
        return attendId;
    }

    /**
     * @param attendId
     */
    public void setAttendId(Integer attendId) {
        this.attendId = attendId;
    }

    /**
     * @return user_id
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * @param userId
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * @return message_id
     */
    public Integer getMessageId() {
        return messageId;
    }

    /**
     * @param messageId
     */
    public void setMessageId(Integer messageId) {
        this.messageId = messageId;
    }
}
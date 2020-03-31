package work.huangxin.mango.model;

import javax.persistence.*;

@Table(name = "`mango_collect`")
public class MangoCollect {
    @Id
    @Column(name = "`collect_id`")
    private Integer collectId;

    @Column(name = "`user_id`")
    private Integer userId;

    @Column(name = "`message_id`")
    private Integer messageId;

    /**
     * @return collect_id
     */
    public Integer getCollectId() {
        return collectId;
    }

    /**
     * @param collectId
     */
    public void setCollectId(Integer collectId) {
        this.collectId = collectId;
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
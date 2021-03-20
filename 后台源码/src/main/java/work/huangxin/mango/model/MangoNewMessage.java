package work.huangxin.mango.model;

import javax.persistence.*;
import java.util.Date;

@Table(name = "`mango_new_message`")
public class MangoNewMessage {
    @Id
    @Column(name = "`new_message_id`")
    private Integer newMessageId;

    @Column(name = "`user_id`")
    private Integer userId;

    @Column(name = "`new_message_type`")
    private Integer newMessageType;

    @Column(name = "`message_id`")
    private Integer messageId;

    @Column(name = "`new_message_detail`")
    private String newMessageDetail;

    public Date getNewMessageTime() {
        return newMessageTime;
    }

    public void setNewMessageTime(Date newMessageTime) {
        this.newMessageTime = newMessageTime;
    }

    @Column(name = "`new_message_time`")
    private Date newMessageTime;
    /**
     * @return new_message_id
     */
    public Integer getNewMessageId() {
        return newMessageId;
    }

    /**
     * @param newMessageId
     */
    public void setNewMessageId(Integer newMessageId) {
        this.newMessageId = newMessageId;
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
     * @return new_message_type
     */
    public Integer getNewMessageType() {
        return newMessageType;
    }

    /**
     * @param newMessageType
     */
    public void setNewMessageType(Integer newMessageType) {
        this.newMessageType = newMessageType;
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

    /**
     * @return new_message_detail
     */
    public String getNewMessageDetail() {
        return newMessageDetail;
    }

    /**
     * @param newMessageDetail
     */
    public void setNewMessageDetail(String newMessageDetail) {
        this.newMessageDetail = newMessageDetail;
    }
}
package work.huangxin.mango.model;

import java.util.Date;
import javax.persistence.*;

@Table(name = "`mango_comment_reply`")
public class MangoCommentReply {

    @Override
    public String toString() {
        return "MangoCommentReply{" +
                "commentReplyId=" + commentReplyId +
                ", commentId=" + commentId +
                ", commentUserId=" + commentUserId +
                ", replayUserId=" + replayUserId +
                ", replayUserName='" + replayUserName + '\'' +
                ", receiveUserId=" + receiveUserId +
                ", receiveUserName='" + receiveUserName + '\'' +
                ", replyDetail='" + replyDetail + '\'' +
                ", replyTime=" + replyTime +
                '}';
    }

    @Id
    @Column(name = "`comment_reply_id`")
    private Integer commentReplyId;

    @Column(name = "`comment_id`")
    private Integer commentId;

    @Column(name = "`comment_user_id`")
    private Integer commentUserId;

    @Column(name = "`replay_user_id`")
    private Integer replayUserId;

    @Column(name = "`replay_user_name`")
    private String replayUserName;

    @Column(name = "`receive_user_id`")
    private Integer receiveUserId;

    @Column(name = "`receive_user_name`")
    private String receiveUserName;

    @Column(name = "`reply_detail`")
    private String replyDetail;

    @Column(name = "`reply_time`")
    private Date replyTime;

    /**
     * @return comment_reply_id
     */
    public Integer getCommentReplyId() {
        return commentReplyId;
    }

    /**
     * @param commentReplyId
     */
    public void setCommentReplyId(Integer commentReplyId) {
        this.commentReplyId = commentReplyId;
    }

    /**
     * @return comment_id
     */
    public Integer getCommentId() {
        return commentId;
    }

    /**
     * @param commentId
     */
    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    /**
     * @return comment_user_id
     */
    public Integer getCommentUserId() {
        return commentUserId;
    }

    /**
     * @param commentUserId
     */
    public void setCommentUserId(Integer commentUserId) {
        this.commentUserId = commentUserId;
    }

    /**
     * @return replay_user_id
     */
    public Integer getReplayUserId() {
        return replayUserId;
    }

    /**
     * @param replayUserId
     */
    public void setReplayUserId(Integer replayUserId) {
        this.replayUserId = replayUserId;
    }

    /**
     * @return replay_user_name
     */
    public String getReplayUserName() {
        return replayUserName;
    }

    /**
     * @param replayUserName
     */
    public void setReplayUserName(String replayUserName) {
        this.replayUserName = replayUserName;
    }

    /**
     * @return receive_user_id
     */
    public Integer getReceiveUserId() {
        return receiveUserId;
    }

    /**
     * @param receiveUserId
     */
    public void setReceiveUserId(Integer receiveUserId) {
        this.receiveUserId = receiveUserId;
    }

    /**
     * @return receive_user_name
     */
    public String getReceiveUserName() {
        return receiveUserName;
    }

    /**
     * @param receiveUserName
     */
    public void setReceiveUserName(String receiveUserName) {
        this.receiveUserName = receiveUserName;
    }

    /**
     * @return reply_detail
     */
    public String getReplyDetail() {
        return replyDetail;
    }

    /**
     * @param replyDetail
     */
    public void setReplyDetail(String replyDetail) {
        this.replyDetail = replyDetail;
    }

    /**
     * @return reply_time
     */
    public Date getReplyTime() {
        return replyTime;
    }

    /**
     * @param replyTime
     */
    public void setReplyTime(Date replyTime) {
        this.replyTime = replyTime;
    }
}
package work.huangxin.mango.model;

import javax.persistence.*;

@Table(name = "`mango_notice`")
public class MangoNotice {
    @Id
    @Column(name = "`notice_id`")
    private Integer noticeId;

    @Column(name = "`notice_detail`")
    private String noticeDetail;

    /**
     * @return notice_id
     */
    public Integer getNoticeId() {
        return noticeId;
    }

    /**
     * @param noticeId
     */
    public void setNoticeId(Integer noticeId) {
        this.noticeId = noticeId;
    }

    /**
     * @return notice_detail
     */
    public String getNoticeDetail() {
        return noticeDetail;
    }

    /**
     * @param noticeDetail
     */
    public void setNoticeDetail(String noticeDetail) {
        this.noticeDetail = noticeDetail;
    }
}
package work.huangxin.mango.model;

import javax.persistence.*;

@Table(name = "`mango_message_images`")
public class MangoMessageImages {
    @Id
    @Column(name = "`image_id`")
    private Integer imageId;

    @Column(name = "`message_id`")
    private Integer messageId;

    @Column(name = "`image_url`")
    private String imageUrl;

    /**
     * @return image_id
     */
    public Integer getImageId() {
        return imageId;
    }

    /**
     * @param imageId
     */
    public void setImageId(Integer imageId) {
        this.imageId = imageId;
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
     * @return image_url
     */
    public String getImageUrl() {
        return imageUrl;
    }

    /**
     * @param imageUrl
     */
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
package work.huangxin.mango.model;

import javax.persistence.*;

@Table(name = "`mango_swiper`")
public class MangoSwiper {
    @Id
    @Column(name = "`swiper_id`")
    private Integer swiperId;

    @Column(name = "`swiper_image_url`")
    private String swiperImageUrl;

    /**
     * @return swiper_id
     */
    public Integer getSwiperId() {
        return swiperId;
    }

    /**
     * @param swiperId
     */
    public void setSwiperId(Integer swiperId) {
        this.swiperId = swiperId;
    }

    /**
     * @return swiper_image_url
     */
    public String getSwiperImageUrl() {
        return swiperImageUrl;
    }

    /**
     * @param swiperImageUrl
     */
    public void setSwiperImageUrl(String swiperImageUrl) {
        this.swiperImageUrl = swiperImageUrl;
    }
}
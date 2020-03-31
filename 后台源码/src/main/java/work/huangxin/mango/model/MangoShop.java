package work.huangxin.mango.model;

import java.util.Date;
import java.util.List;
import javax.persistence.*;

@Table(name = "`mango_shop`")
public class MangoShop {
    @Id
    @Column(name = "`shop_id`")
    private Integer shopId;

    @Column(name = "`shop_name`")
    private String shopName;

    @Column(name = "`shop_intro`")
    private String shopIntro;

    @Column(name = "`shop_phone`")
    private String shopPhone;

    @Column(name = "`shop_avatar`")
    private String shopAvatar;

    @Column(name = "`shop_latitude`")
    private String shopLatitude;

    @Column(name = "`shop_longitude`")
    private String shopLongitude;

    @Column(name = "`shop_creat_time`")
    private Date shopCreatTime;

    private List<MangoShopImages> shopImages;

    private List<MangoShopBusiness> shopBusinesses;


    public List<MangoShopImages> getShopImages() {
        return shopImages;
    }

    public void setShopImages(List<MangoShopImages> shopImages) {
        this.shopImages = shopImages;
    }

    public List<MangoShopBusiness> getShopBusinesses() {
        return shopBusinesses;
    }

    public void setShopBusinesses(List<MangoShopBusiness> shopBusinesses) {
        this.shopBusinesses = shopBusinesses;
    }

    /**
     * @return shop_id
     */
    public Integer getShopId() {
        return shopId;
    }

    /**
     * @param shopId
     */
    public void setShopId(Integer shopId) {
        this.shopId = shopId;
    }

    /**
     * @return shop_name
     */
    public String getShopName() {
        return shopName;
    }

    /**
     * @param shopName
     */
    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    /**
     * @return shop_intro
     */
    public String getShopIntro() {
        return shopIntro;
    }

    /**
     * @param shopIntro
     */
    public void setShopIntro(String shopIntro) {
        this.shopIntro = shopIntro;
    }

    /**
     * @return shop_phone
     */
    public String getShopPhone() {
        return shopPhone;
    }

    /**
     * @param shopPhone
     */
    public void setShopPhone(String shopPhone) {
        this.shopPhone = shopPhone;
    }

    /**
     * @return shop_avatar
     */
    public String getShopAvatar() {
        return shopAvatar;
    }

    /**
     * @param shopAvatar
     */
    public void setShopAvatar(String shopAvatar) {
        this.shopAvatar = shopAvatar;
    }

    /**
     * @return shop_latitude
     */
    public String getShopLatitude() {
        return shopLatitude;
    }

    /**
     * @param shopLatitude
     */
    public void setShopLatitude(String shopLatitude) {
        this.shopLatitude = shopLatitude;
    }

    /**
     * @return shop_longitude
     */
    public String getShopLongitude() {
        return shopLongitude;
    }

    /**
     * @param shopLongitude
     */
    public void setShopLongitude(String shopLongitude) {
        this.shopLongitude = shopLongitude;
    }

    /**
     * @return shop_creat_time
     */
    public Date getShopCreatTime() {
        return shopCreatTime;
    }

    /**
     * @param shopCreatTime
     */
    public void setShopCreatTime(Date shopCreatTime) {
        this.shopCreatTime = shopCreatTime;
    }
}
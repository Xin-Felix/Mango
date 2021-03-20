package work.huangxin.mango.model;

import java.math.BigDecimal;
import javax.persistence.*;

@Table(name = "`mango_shop_business`")
public class MangoShopBusiness {
    @Id
    @Column(name = "`business_id`")
    private Integer businessId;

    @Column(name = "`shop_id`")
    private Integer shopId;

    @Column(name = "`shop_goods_image`")
    private String shopGoodsImage;

    @Column(name = "`shop_goods_title`")
    private String shopGoodsTitle;

    @Column(name = "`shop_goods_price`")
    private BigDecimal shopGoodsPrice;

    /**
     * @return business_id
     */
    public Integer getBusinessId() {
        return businessId;
    }

    /**
     * @param businessId
     */
    public void setBusinessId(Integer businessId) {
        this.businessId = businessId;
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
     * @return shop_goods_image
     */
    public String getShopGoodsImage() {
        return shopGoodsImage;
    }

    /**
     * @param shopGoodsImage
     */
    public void setShopGoodsImage(String shopGoodsImage) {
        this.shopGoodsImage = shopGoodsImage;
    }

    /**
     * @return shop_goods_title
     */
    public String getShopGoodsTitle() {
        return shopGoodsTitle;
    }

    /**
     * @param shopGoodsTitle
     */
    public void setShopGoodsTitle(String shopGoodsTitle) {
        this.shopGoodsTitle = shopGoodsTitle;
    }

    /**
     * @return shop_goods_price
     */
    public BigDecimal getShopGoodsPrice() {
        return shopGoodsPrice;
    }

    /**
     * @param shopGoodsPrice
     */
    public void setShopGoodsPrice(BigDecimal shopGoodsPrice) {
        this.shopGoodsPrice = shopGoodsPrice;
    }
}
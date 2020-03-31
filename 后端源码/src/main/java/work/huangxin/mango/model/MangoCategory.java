package work.huangxin.mango.model;

import javax.persistence.*;

@Table(name = "`mango_category`")
public class MangoCategory {
    @Id
    @Column(name = "`category_id`")
    private Integer categoryId;

    @Column(name = "`category_name`")
    private String categoryName;

    @Column(name = "`category_image`")
    private String categoryImage;

    /**
     * @return category_id
     */
    public Integer getCategoryId() {
        return categoryId;
    }

    /**
     * @param categoryId
     */
    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    /**
     * @return category_name
     */
    public String getCategoryName() {
        return categoryName;
    }

    /**
     * @param categoryName
     */
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    /**
     * @return category_image
     */
    public String getCategoryImage() {
        return categoryImage;
    }

    /**
     * @param categoryImage
     */
    public void setCategoryImage(String categoryImage) {
        this.categoryImage = categoryImage;
    }
}
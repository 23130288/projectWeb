package org.example.projectweb.dao;

import org.example.projectweb.model.ImageProduct;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ImageProductDao extends BaseDao {
    static Map<Integer, ImageProduct> imageData = new HashMap<>();

    static {
        imageData.put(1, new ImageProduct(1, 1, "images/balos/apollo/apollo1.webp", true));
        imageData.put(2, new ImageProduct(2, 1, "images/balos/apollo/apollo2.webp", false));
        imageData.put(3, new ImageProduct(3, 2, "images/valies/ValiJOYWAYxMELALINIA/vali1.webp", true));
        imageData.put(4, new ImageProduct(4, 2, "images/valies/ValiJOYWAYxMELALINIA/vali2.webp", false));
    }

    public List<ImageProduct> getImagesByProductId(int productId) {
        return get().withHandle(h -> h.createQuery("select image from image_product where pid = :pid")
                .bind("pid", productId)
                .mapToBean(ImageProduct.class).list());

    }
    public ImageProduct getMainImageByProductId(int productId) {
        return get().withHandle(h -> h.createQuery("select image from image_product where pid = :pid and is_main = 1")
                .bind("pid", productId)
                .mapToBean(ImageProduct.class).first());
    }
}

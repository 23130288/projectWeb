package org.example.projectweb.dao;

import org.example.projectweb.model.ImageProduct;

import java.util.List;

public class ImageProductDao extends BaseDao {

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

    public List<ImageProduct> getMainImgsForWishlist(int userId) {
        return get().withHandle(h -> h.createQuery("select ip.image from wishlist wl join product p on wl.pid = p.pid " +
                "join image_product ip on ip.pid = p.pid where wl.uid = :uid and is_main = 1")
                .bind("uid", userId)
                .mapToBean(ImageProduct.class).list());
    }
}

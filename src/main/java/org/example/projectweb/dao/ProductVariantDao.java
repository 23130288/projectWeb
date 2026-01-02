package org.example.projectweb.dao;

import org.example.projectweb.model.ProductVariant;

import java.util.List;

public class ProductVariantDao extends BaseDao {
    public List<ProductVariant> getVariantsByProductId(int productId) {
        return get().withHandle(h -> h.createQuery("select size, color, price, quantity from product_variant where pid = :pid")
                .bind("pid", productId)
                .mapToBean(ProductVariant.class).list());
    }

    public ProductVariant getVariantByPvid(int pvid) {
        return get().withHandle(h -> h.createQuery("select size, color, price, quantity from product_variant where pvid = :pvid")
                .bind("pvid", pvid)
                .mapToBean(ProductVariant.class).first());
    }
}

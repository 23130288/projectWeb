package org.example.projectweb.dao;

import org.example.projectweb.model.ProductVariant;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductVariantDao extends BaseDao {
    static Map<Integer, ProductVariant> variantData = new HashMap<>();

    static {
        variantData.put(1, new ProductVariant(1, 1, "XL", "black", 850000, 10));
        variantData.put(2, new ProductVariant(2, 1, "XL", "grey", 900000, 5));
        variantData.put(3, new ProductVariant(3, 2, "XL", "grey", 1500000, 7));
        variantData.put(4, new ProductVariant(4, 2, "L", "black", 1800000, 4));
    }

    public List<ProductVariant> getVariantsByProductId(int productId) {
        return get().withHandle(h -> h.createQuery("select size, color, price from product_variant where pid = :pid")
                .bind("pid", productId)
                .mapToBean(ProductVariant.class).list());
    }
}

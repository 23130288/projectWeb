package org.example.projectweb.dao;

import org.example.projectweb.model.ProductVariant;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductVariantDao {
    static Map<Integer, ProductVariant> variantData = new HashMap<>();

    static {
        // Product 1 - Balo Apollo
        variantData.put(1, new ProductVariant(1, 1, "XL", "Đen", 850000, 10));
        variantData.put(2, new ProductVariant(2, 1, "XL", "Xám", 900000, 5));

        // Product 2 - Vali1
        variantData.put(3, new ProductVariant(3, 2, "XL", "Bạc", 1500000, 7));
        variantData.put(4, new ProductVariant(4, 2, "L", "Đen", 1800000, 4));

        // Product 3 - Balo1
        variantData.put(5, new ProductVariant(5, 3, "XL", "Xanh", 700000, 12));

        // Product 4 - Vali2
        variantData.put(6, new ProductVariant(6, 4, "XL", "Xám", 2200000, 3));

        // Product 5 - Balo2
        variantData.put(7, new ProductVariant(7, 5, "XL", "Hồng", 650000, 8));
    }

    public List<ProductVariant> getVariantsByProductId(int productId) {
        List<ProductVariant> result = new ArrayList<>();

        for (ProductVariant v : variantData.values()) {
            if (v.getPid() == productId) {
                result.add(v);
            }
        }

        return result;
    }
}

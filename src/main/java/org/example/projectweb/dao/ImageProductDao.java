package org.example.projectweb.dao;

import org.example.projectweb.model.ImageProduct;
import org.example.projectweb.model.ProductVariant;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ImageProductDao {
    static Map<Integer, ImageProduct> imageData = new HashMap<>();

    static {
        // Product 1
        imageData.put(1, new ImageProduct(1, 1, "balo_apollo_1.jpg", true));
        imageData.put(2, new ImageProduct(2, 1, "balo_apollo_2.jpg", false));

        // Product 2
        imageData.put(3, new ImageProduct(3, 2, "images/valies/ValiJOYWAYxMELALINIA/vali1.webp", true));
        imageData.put(4, new ImageProduct(4, 2, "images/valies/ValiJOYWAYxMELALINIA/vali2.webp", false));

        // Product 3
        imageData.put(5, new ImageProduct(5, 3, "balo1_1.jpg", true));

        // Product 4
        imageData.put(6, new ImageProduct(6, 4, "vali2_1.jpg", true));

        // Product 5
        imageData.put(7, new ImageProduct(7, 5, "balo2_1.jpg", true));
    }

    public List<ImageProduct> getImagesByProductId(int productId) {
        List<ImageProduct> result = new ArrayList<>();
        for (ImageProduct v : imageData.values()) {
            if (v.getPid() == productId) {
                result.add(v);
            }
        }
        return result;
    }
    public ImageProduct getMainImageById(int productId) {
        for (ImageProduct img : imageData.values()) {
            if (img.getPid() == productId && img.isMain()) {
                return img;
            }
        }
        return null;
    }

}

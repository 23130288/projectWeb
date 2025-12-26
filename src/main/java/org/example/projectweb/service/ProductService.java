package org.example.projectweb.service;

import org.example.projectweb.dao.ImageProductDao;
import org.example.projectweb.dao.ProductDao;
import org.example.projectweb.dao.ProductVariantDao;
import org.example.projectweb.model.ImageProduct;
import org.example.projectweb.model.Product;

import java.util.List;

public class ProductService {
    ProductDao pDao = new ProductDao();
    ProductVariantDao pvDao = new ProductVariantDao();
    ImageProductDao ipDao = new ImageProductDao();

    public Product getProductDetail(int productId) {
        Product p = pDao.getProductById(productId);
        if (p == null) return null;
        p.setVariants(pvDao.getVariantsByProductId(productId));
        p.setImages(ipDao.getImagesByProductId(productId));
        return p;
    }

    public ImageProduct getMainImg(int productId) {
        return ipDao.getMainImageByProductId(productId);
    }

    public List<Product> searchProducts(String keyword) {
        List<Product> results = pDao.searchByName(keyword);
        for (Product p : results) {
            p.setVariants(pvDao.getVariantsByProductId(p.getPid()));
            p.setImages(ipDao.getImagesByProductId(p.getPid()));
        }
        return results;
    }
}

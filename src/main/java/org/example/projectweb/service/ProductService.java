package org.example.projectweb.service;

import org.example.projectweb.dao.ImageProductDao;
import org.example.projectweb.dao.ProductDao;
import org.example.projectweb.dao.ProductVariantDao;
import org.example.projectweb.dao.ReviewDao;
import org.example.projectweb.model.Product;

public class ProductService {
    ProductDao pDao = new ProductDao();
    ProductVariantDao pvDao = new ProductVariantDao();
    ImageProductDao ipDao = new ImageProductDao();
    ReviewDao rDao = new ReviewDao();

//    public List<Product> getListProductId() {
//        return pDao.getListProductId();
//    }

    public Product getProductDetail(int productId) {
        Product p = pDao.getProductById(productId);
        if (p == null) return null;
        p.setVariants(pvDao.getVariantsByProductId(productId));
        p.setImages(ipDao.getImagesByProductId(productId));
        return p;
    }
}

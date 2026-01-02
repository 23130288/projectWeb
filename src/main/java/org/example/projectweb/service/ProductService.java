package org.example.projectweb.service;

import org.example.projectweb.dao.ImageProductDao;
import org.example.projectweb.dao.ProductDao;
import org.example.projectweb.dao.ProductVariantDao;
import org.example.projectweb.model.ImageProduct;
import org.example.projectweb.model.Product;
import org.example.projectweb.model.ProductVariant;
import org.example.projectweb.model.User;

import java.util.ArrayList;
import java.util.List;

public class ProductService {
    private ProductDao pDao = new ProductDao();
    private ProductVariantDao pvDao = new ProductVariantDao();
    private ImageProductDao ipDao = new ImageProductDao();

    public List<Product> getAllProducts() {
        return pDao.getListProduct();
    }

    public Product getProductById(int productId) {
        return pDao.getProductById(productId);
    }
    public ProductVariant getVariantByPvid(int pvid) {
        return pvDao.getVariantByPvid(pvid);
    }
    public List<ProductVariant> getVariantsByPid(int productId) {
        return pvDao.getVariantsByProductId(productId);
    }
    public List<ImageProduct> getImgsByPid(int productId) {
        return ipDao.getImagesByProductId(productId);
    }
    public ImageProduct getMainImg(int productId) {
        return ipDao.getMainImageByProductId(productId);
    }

    public Product getProductDetail(int productId) {
        Product p = pDao.getProductById(productId);
        if (p == null) return null;
        p.setVariants(pvDao.getVariantsByProductId(productId));
        p.setImages(ipDao.getImagesByProductId(productId));
        return p;
    }

    public List<Product> searchProducts(String keyword) {
        List<Product> results = pDao.searchByName(keyword);
        for (Product p : results) {
            p.setVariants(pvDao.getVariantsByProductId(p.getPid()));
            p.setImages(ipDao.getImagesByProductId(p.getPid()));
        }
        return results;
    }

    public List<Product> searchInFilter(String query, String category, String sort) {
        List<Product> list = pDao.searchInFilter(query, category, sort);
        for (Product p : list) {
            p.setVariants(pvDao.getVariantsByProductId(p.getPid()));
            p.setImages(ipDao.getImagesByProductId(p.getPid()));
        }
        return list;
    }
}

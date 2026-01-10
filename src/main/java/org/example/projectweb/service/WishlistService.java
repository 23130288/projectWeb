package org.example.projectweb.service;

import org.example.projectweb.dao.ImageProductDao;
import org.example.projectweb.dao.ProductDao;
import org.example.projectweb.dao.ProductVariantDao;
import org.example.projectweb.dao.WishlistDao;
import org.example.projectweb.model.ImageProduct;
import org.example.projectweb.model.Product;
import org.example.projectweb.model.ProductVariant;

import java.util.List;

public class WishlistService {
    private WishlistDao wDao = new WishlistDao();
    private ProductDao pDao = new ProductDao();
    private ProductVariantDao pvDao = new ProductVariantDao();
    private ImageProductDao ipDao = new ImageProductDao();

    public List<Product> getProductsForWishlist(int userId) {
        List<Product> res = pDao.getProductsForWishlist(userId);
        for (Product p : res) {
            p.setVariants(pvDao.getVariantsByProductId(p.getPid()));
        }
        return res;
    }

    public List<ImageProduct> getMainImgsForWishlist(int userId) {
        return ipDao.getMainImgsForWishlist(userId);
    }

    public boolean inWishlist(int userId, int productId) {
        return wDao.inWishlist(userId, productId);
    }

    public void removeFromWishlist(int userId, int productId) {
        wDao.removeFromWishlist(userId, productId);
    }

    public void addToWishlist(int userId, int productId) {
        wDao.addToWishlist(userId, productId);
    }

    public List<Integer> getQuantitiesForWishlist(int userId) {
        return pDao.getQuantitesForWishlist(userId);
    }


}

package org.example.projectweb.service;

import org.example.projectweb.dao.ProductDao;
import org.example.projectweb.dao.WishlistDao;
import org.example.projectweb.model.Product;
import org.example.projectweb.model.Wishlist;

import java.util.ArrayList;
import java.util.List;

public class WishlistService {
    private WishlistDao wDao = new WishlistDao();
    private ProductDao pDao = new ProductDao();

    public List<Product> getWishlistByUid(int userId) {
        List<Wishlist> wishlists = wDao.getWishlistByUid(userId);
        List<Product> products = new ArrayList<>();

        for (Wishlist wl : wishlists) {
            if (wl != null) {
                Product p = pDao.getProductById(wl.getPid());
                if (p != null) products.add(p);
            }
        }
        return products;
    }

}

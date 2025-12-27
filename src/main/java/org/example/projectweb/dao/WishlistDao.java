package org.example.projectweb.dao;

import org.example.projectweb.model.Wishlist;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WishlistDao extends BaseDao {
    public boolean inWishlist(int userId, int productId) {
        return !get().withHandle(h -> h.createQuery("select pid from wishlist where uid = :uid and pid = :pid")
                .bind("uid", userId)
                .bind("pid", productId)
                .mapToBean(Wishlist.class).list()).isEmpty();
    }

    public void removeFromWishlist(int userId, int productId) {
        get().useHandle(h -> h.createUpdate("delete from wishlist where uid = :uid and pid = :pid")
                .bind("uid", userId)
                .bind("pid", productId)
                .execute());
    }

    public void addToWishlist(int userId, int productId) {
        get().useHandle(h -> h.createUpdate("insert into wishlist (uid, pid) values (:uid,:pid)")
                .bind("uid", userId)
                .bind("pid", productId)
                .execute());
    }
}

package org.example.projectweb.dao;

import org.example.projectweb.model.Wishlist;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WishlistDao {
    // key = uid, values = pid
//    static Map<Integer, List<Integer>> wishlistData = new HashMap<>();
//
//    static {
//        wishlistData.put(1, new ArrayList<>(List.of(2, 3)));
//        wishlistData.put(2, new ArrayList<>(List.of(1)));
//    }
    static Map<Integer, List<Wishlist>> wishlistData = new HashMap<>();
    static {
        wishlistData.put(1, new ArrayList<>(List.of(new Wishlist(1, 1), new Wishlist(1, 2))));
    }

    // get wishlist by user's id
    public List<Wishlist> getWishlistByUid(int userId) {
        return wishlistData.getOrDefault(userId, new ArrayList<>());
    }
}

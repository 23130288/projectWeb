package org.example.projectweb.dao;

import org.example.projectweb.model.Product;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class ProductDao extends BaseDao {

    static Map<Integer, Product> data = new HashMap<>();

    public void addProduct(String name, String type, String style, String material, String producer, String status, String description) {
        get().useHandle(h -> h.createUpdate("INSERT INTO product (name, type, style, material, producer, status, description) VALUES (:name, :type, :style, :material, :producer, :status, :description)")
                .bind("name", name).bind("type", type).bind("style", style).bind("material", material).bind("producer", producer).bind("status", status).bind("description", description).execute()
        );
    }

    public List<Product> getListProduct() {
        return get().withHandle(h -> h.createQuery("select pid, name, producer, type, material, style, status from product")
                .mapToBean(Product.class).list());
    }

    public List<Integer> getListProductID() {
        return get().withHandle(h ->
                h.createQuery("select pid from product")
                        .mapTo(Integer.class).list()
        );
    }

    public Map<Integer, String> getProductNameMap() {
        return get().withHandle(h ->
                h.createQuery("SELECT pid, name FROM product")
                        .map((rs, ctx) -> Map.entry(rs.getInt("pid"), rs.getString("name")))
                        .list().stream() .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue))
        );
    }

    public Product getProductById(int productId) {
        return get().withHandle(h -> h.createQuery("select pid, name, producer, type, material, style, description, status from product where pid = :pid")
                .bind("pid", productId)
                .mapToBean(Product.class).first());
    }

    public Product getProductByName(String name) {
        return get().withHandle(h -> h.createQuery("select pid, name, producer, type, material, style, description, status from product where name = :name")
                .bind("name", name)
                .mapToBean(Product.class).findFirst().orElse(null)
        );
    }

    public List<Product> searchByName(String keyword) {
        List<Product> result = new ArrayList<>();
        if (keyword == null || keyword.trim().isEmpty()) {
            return result;
        }
        String lowerKeyword = keyword.toLowerCase().trim();
        for (Product p : data.values()) {
            if (p.getName().toLowerCase().contains(lowerKeyword)) {
                result.add(p);
            }
        }
        return result;
    }

    public List<Product> searchInFilter(String query, String category, String sort) {
        List<Product> result = new ArrayList<>();

        for (Product p : data.values()) {
            boolean checkQuery = true;
            boolean checkCategory = true;
            if (query != null && !query.trim().isEmpty()) {
                if (!p.getName().toLowerCase().contains(query.toLowerCase().trim())) {
                    checkQuery = false;
                }
            }
            if (category != null && !category.isEmpty()) {
                if (!p.getType().equalsIgnoreCase(category)) {
                    checkCategory = false;
                }
            }
            if (checkQuery && checkCategory) {
                result.add(p);
            }
        }
        if (sort != null && !sort.isEmpty()) {
            result.sort((p1, p2) -> {
                switch (sort) {
                    case "nameA-Z":
                        return p1.getName().compareToIgnoreCase(p2.getName());
                    case "nameZ-A":
                        return p2.getName().compareToIgnoreCase(p1.getName());
                    case "priceLow-High":
                        return Double.compare(p1.getVariants().get(0).getPrice(),
                                p2.getVariants().get(0).getPrice());
                    case "priceHigh-Low":
                        return Double.compare(p2.getVariants().get(0).getPrice(),
                                p1.getVariants().get(0).getPrice());
                    default:
                        return 0;
                }
            });
        }
        return result;
    }

    public List<Product> getProductsForWishlist(int userId) {
        return get().withHandle(h -> h.createQuery("select p.pid, p.name from product p join wishlist wl on p.pid = wl.pid " +
                        "where wl.uid = :uid")
                .bind("uid", userId)
                .mapToBean(Product.class).list());
    }

    public void updateStatus(int pid, String sta) {
        get().useHandle(h -> h.createUpdate("UPDATE product SET status = :sta WHERE pid = :pid")
                .bind("pid", pid).bind("sta", sta).execute()
        );
    }

    public List<Product> search(String query, String category, String color, String size, String minPrice, String maxPrice, String sort) {
        return null;
    }
}

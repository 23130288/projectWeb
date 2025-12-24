package org.example.projectweb.dao;

import org.example.projectweb.model.Product;
import org.jdbi.v3.core.statement.PreparedBatch;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductDao extends BaseDao {

    static Map<Integer, Product> data = new HashMap<>();
    static {
        data.put(1, new Product(1, "Balo Apollo đựng laptop", "Producer1", "balo", "Vai", "Deo lung", "des", "status"));
        data.put(2, new Product(2, "Vali1", "Producer1", "vali", "Nhom", "Keo", "des", "status"));
        data.put(3, new Product(3, "Balo1", "Producer2", "balo", "Vai", "Deo lung", "des", "status"));
        data.put(4, new Product(4, "Vali2", "Producer3", "vali", "Nhom", "Keo", "des", "status"));
        data.put(5, new Product(5, "Balo2", "Producer3", "balo", "Vai", "Xach tay", "des", "status"));
    }

    public List<Product> getListProduct() {
        return get().withHandle(h -> h.createQuery("select name, producer, type, material, style, description, status from product")
                .mapToBean(Product.class).list());
    }

    public Product getProductById(int productId) {
        return get().withHandle(h -> h.createQuery("select name, producer, type, material, style, description from product where pid = :pid")
                .bind("pid", productId)
                .mapToBean(Product.class).first());
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

    public void insert(List<Product> list) {
        get().useHandle(h -> {
            PreparedBatch pb = h.prepareBatch("insert into product (name, producer, type, material, style, description, status) " +
                    "values (:name,:producer,:type,:material,:style,:description,:status)");
            list.forEach(l -> {
                pb.bindBean(l).add();
            });
            pb.execute();
        });
    }

    public static void main(String[] args) {
        ProductDao pd = new ProductDao();
//        pd.insert(pd.getListProduct());
    }
}

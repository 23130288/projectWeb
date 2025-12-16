package org.example.projectweb.dao;

import org.example.projectweb.model.Product;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductDao {

    static Map<Integer, Product> data = new HashMap<>();
    static {
        data.put(1, new Product(1, "Balo Apollo đựng laptop", "Producer1", "balo", "Vai", "Deo lung", "des", "status"));
        data.put(2, new Product(2, "Vali1", "Producer1", "vali", "Nhom", "Keo", "des", "status"));
        data.put(3, new Product(3, "Balo1", "Producer2", "balo", "Vai", "Deo lung", "des", "status"));
        data.put(4, new Product(4, "Vali2", "Producer3", "vali", "Nhom", "Keo", "des", "status"));
        data.put(5, new Product(5, "Balo2", "Producer3", "balo", "Vai", "Xach tay", "des", "status"));
    }

    public List<Product> getListProductId() {
        return new ArrayList<>(data.values());
    }
    public Product getProductById(int productId) {
        return data.getOrDefault(productId, null);
    }
}

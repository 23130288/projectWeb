package org.example.projectweb.cart;

import org.example.projectweb.model.Product;
import org.example.projectweb.model.ProductVariant;

import java.io.Serializable;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;

public class Cart implements Serializable {
    Map<Integer, CartItem> data;

    public Cart() {
        data = new HashMap<>();
    }

    public void addProduct(Product p, ProductVariant pv, String mainImg, int quantity) {
        if (data.containsKey(p.getPid()))
            data.get(p.getPid()).upQuantity(quantity);
        else
            data.put(p.getPid(), new CartItem(p, pv, pv.getPrice(), mainImg, quantity));
    }

    public CartItem deleteProduct(int pid) {
        return data.remove(pid);
    }

    public List<CartItem> removeAll() {
        Collection<CartItem> values = data.values();
        data.clear();
        return new ArrayList<>(values);
    }

    public List<CartItem> getList() {
        return new ArrayList<>(data.values());
    }

    public int getTotalQuantity() {
        AtomicInteger total = new AtomicInteger();
        data.values().stream().forEach(p -> {
            total.addAndGet(p.getQuantity());});
        return total.get();
    }

    public double getTotalPrice() {
        AtomicReference<Double> total = new AtomicReference<>((double) 0);
        data.values().stream().forEach(p -> total.updateAndGet(v -> (v + (p.getQuantity() * p.getPrice()))));
        return total.get();
    }

    public boolean update(int pid, ProductVariant pv) {
        if (data.containsKey(pid)) {
            data.get(pid).setProductVariant(pv);
            return true;
        }
        return false;
    }
}

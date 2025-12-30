package org.example.projectweb.service;

import org.example.projectweb.dao.OrderDao;

public class OrderService {
    private OrderDao od = new OrderDao();

    public boolean hasPurchased(int userId, int productId) {
        return od.hasPurchased(userId, productId);
    }
}

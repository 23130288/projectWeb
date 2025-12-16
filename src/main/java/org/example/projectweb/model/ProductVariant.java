package org.example.projectweb.model;

import java.io.Serializable;

public class ProductVariant implements Serializable {
    private int pvid;
    private int pid;
    private String size;
    private String color;
    private double price;
    private int quantity;

    public ProductVariant(int pvid, int pid, String size, String color, double price, int quantity) {
        this.pvid = pvid;
        this.pid = pid;
        this.size = size;
        this.color = color;
        this.price = price;
        this.quantity = quantity;
    }

    public int getPid() {
        return this.pid;
    }

    public String getColor() {
        return color;
    }

    public String getSize() {
        return size;
    }

    public double getPrice() {
        return price;
    }
}

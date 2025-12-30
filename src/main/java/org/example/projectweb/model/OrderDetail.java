package org.example.projectweb.model;

import java.io.Serializable;

public class OrderDetail implements Serializable {
    private int odid;
    private int oid;
    private int pvid;
    private int quantity;

    public OrderDetail() {}
    public OrderDetail(int odid, int oid, int pvid, int quantity) {
        this.odid = odid;
        this.oid = oid;
        this.pvid = pvid;
        this.quantity = quantity;
    }

    public void setOdid(int odid) {
        this.odid = odid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public void setPvid(int pvid) {
        this.pvid = pvid;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

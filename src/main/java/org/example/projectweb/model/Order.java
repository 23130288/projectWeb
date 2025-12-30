package org.example.projectweb.model;

import java.io.Serializable;

public class Order implements Serializable {
    private int oid;
    private int uid;
    private int vid;
    private String createdDate;

    public Order() {}
    public Order(int oid, int uid, int vid, String createdDate) {
        this.oid = oid;
        this.uid = uid;
        this.vid = vid;
        this.createdDate = createdDate;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public void setVid(int vid) {
        this.vid = vid;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }
}

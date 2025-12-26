package org.example.projectweb.model;

import java.io.Serializable;

public class Wishlist implements Serializable {
    private int uid;
    private int pid;

    public Wishlist() {}
    public Wishlist(int uid, int pid) {
        this.uid = uid;
        this.pid = pid;
    }

    public int getUid() {
        return uid;
    }

    public int getPid() {
        return pid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }
}

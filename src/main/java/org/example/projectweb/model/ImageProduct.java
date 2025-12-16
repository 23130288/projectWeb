package org.example.projectweb.model;

import java.io.Serializable;

public class ImageProduct implements Serializable {
    private int imgId;
    private int pid;
    private String image;
    private boolean isMain;

    public ImageProduct(int imgId, int pid, String image, boolean isMain) {
        this.imgId = imgId;
        this.pid = pid;
        this.image = image;
        this.isMain = isMain;
    }

    public int getPid() {
        return this.pid;
    }

    public String getImage() {
        return image;
    }

    public boolean isMain() {
        return this.isMain;
    }
}

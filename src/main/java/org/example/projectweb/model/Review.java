package org.example.projectweb.model;

import java.io.Serializable;

public class Review implements Serializable {
    private int uid;
    private int pid;
    private String comment;
    private int rating;
    private String createdDate;

    public Review() {}
    public Review(int uid, int pid, String comment, int rating, String created_date) {
        this.uid = uid;
        this.pid = pid;
        this.comment = comment;
        this.rating = rating;
        this.createdDate = created_date;
    }

    public int getUid() {
        return uid;
    }

    public int getPid() {
        return pid;
    }

    public String getComment() {
        return comment;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public int getRating() {
        return rating;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }
}

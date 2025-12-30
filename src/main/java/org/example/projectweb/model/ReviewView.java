package org.example.projectweb.model;

public class ReviewView {
    private String userName;
    private String comment;
    private int rating;
    private String createdDate;

    public ReviewView() {}
    public ReviewView(String userName, String comment, int rating, String createdDate) {
        this.userName = userName;
        this.comment = comment;
        this.rating = rating;
        this.createdDate = createdDate;
    }

    public String getUserName() {
        return userName;
    }

    public String getComment() {
        return comment;
    }

    public int getRating() {
        return rating;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setUserName(String userName) {
        this.userName = userName;
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


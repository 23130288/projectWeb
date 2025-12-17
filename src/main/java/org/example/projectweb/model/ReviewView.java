package org.example.projectweb.model;

public class ReviewView {
    private String userName;
    private String comment;
    private int rating;
    private String createdDate;

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
}


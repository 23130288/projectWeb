package org.example.projectweb.service;

import org.example.projectweb.dao.ReviewDao;
import org.example.projectweb.model.Product;
import org.example.projectweb.model.Review;
import org.example.projectweb.model.ReviewView;

import java.util.ArrayList;
import java.util.List;

public class ReviewService {
    private ReviewDao rDao = new ReviewDao();

    public Review getReviewByUidAndPid(int uid, int pid) {
        return rDao.getReviewByUidAndPid(uid, pid);
    }

    public List<ReviewView> getReviewsForProduct(int productId) {
        return rDao.getReviewsForProduct(productId);
    }

    public double getAvgRating(int productId) {
        return rDao.getAvgRating(productId);
    }

    public void addReview(int userId, int productId, int rating, String comment) {
        rDao.addReview(userId, productId, rating, comment);
    }

    public void updateReview(int userId, int productId, int rating, String comment) {
        rDao.updateReview(userId, productId, rating, comment);
    }

    public List<Double> getAvgRatingsForWishlist(int userId) {
        return rDao.getAvgRatingsForWishlist(userId);
    }
}

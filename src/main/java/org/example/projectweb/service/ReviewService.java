package org.example.projectweb.service;

import org.example.projectweb.dao.ReviewDao;
import org.example.projectweb.dao.userDao;
import org.example.projectweb.model.Review;
import org.example.projectweb.model.ReviewView;

import java.util.ArrayList;
import java.util.List;

public class ReviewService {
    ReviewDao rDao = new ReviewDao();
    userDao uDao = new userDao();

    public List<ReviewView> getReviewsForProduct(int productId) {
        List<Review> reviews = rDao.getReviewsByProductId(productId);
        List<ReviewView> result = new ArrayList<>();

        for (Review r : reviews) {
            ReviewView rv = new ReviewView(
                uDao.getUserById(r.getUid()).getName(),
                r.getComment(),
                r.getRating(),
                r.getCreatedDate()
            );
            result.add(rv);
        }
        return result;
    }
    public double getAvgRating(int productId) {
        List<Review> reviews = rDao.getReviewsByProductId(productId);
        double res = 0;
        if (reviews == null)
            return res;
        for (Review r : reviews) {
            res += r.getRating();
        }
        return res/reviews.size();
    }
}

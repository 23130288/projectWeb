package org.example.projectweb.dao;

import org.example.projectweb.model.Review;
import org.example.projectweb.model.ReviewView;

import java.util.List;

public class ReviewDao extends BaseDao {
    public Review getReviewByUidAndPid(int uid, int pid) {
        return get().withHandle(h -> h.createQuery("select rating, comment, created_date from review where uid = :uid and pid = :pid")
                .bind("uid", uid).bind("pid", pid)
                .mapToBean(Review.class).findOne().orElse(null));
    }

    public List<ReviewView> getReviewsForProduct(int productId) {
        return get().withHandle(h -> h.createQuery("select u.name as username, r.comment, r.rating, r.created_date " +
                        "from review r join user u on r.uid = u.uid " +
                        "where r.pid = :pid")
                .bind("pid", productId).mapToBean(ReviewView.class).list());
    }

    public double getAvgRating(int productId) {
        return get().withHandle(h -> h.createQuery("select ifnull(round(avg(rating), 2), 0) from review where pid = :pid")
                .bind("pid", productId).mapTo(Double.class).first());
    }

    public void addReview(int userId, int productId, int rating, String comment) {
        get().useHandle(h -> h.createUpdate("insert into review (uid, pid, comment, rating, created_date) " +
                "values (:uid, :pid, :comment, :rating, NOW())")
                .bind("uid", userId).bind("pid", productId).bind("comment", comment).bind("rating", rating)
                .execute());

    }

    public void updateReview(int userId, int productId, int rating, String comment) {
        get().useHandle(h -> h.createUpdate("update review set rating = :rating, comment = :comment, created_date = NOW() where uid = :uid and pid = :pid")
                .bind("uid", userId).bind("pid", productId).bind("comment", comment).bind("rating", rating)
                .execute());
    }

    /**
     * Wishlist
     */
    public List<Double> getAvgRatingsForWishlist(int userId) {
        return get().withHandle(h -> h.createQuery("""
                select AVG(rating)
                from wishlist wl join review r on wl.pid = r.pid
                where wl.uid = :uid
                group by r.pid
                """)
                .bind("uid", userId).mapTo(Double.class).list());
    }
}

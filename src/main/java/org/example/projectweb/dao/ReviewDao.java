package org.example.projectweb.dao;

import org.example.projectweb.model.Review;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ReviewDao {
//    static Map<Integer, Review> reviewData = new HashMap<>();
//    static {
//        reviewData.put(1, new Review(1, 2, "Tốt", 3, "03/12/2005"));
//        reviewData.put(2, new Review(2, 2, "Rất đáng tiền", 5, "03/12/2005"));
//        reviewData.put(3, new Review(3, 2,"Tạm ổn", 3, "03/12/2005"));
//    }
    static List<Review> reviewData = new ArrayList<>();
    static {
        reviewData.add(new Review(1, 1, "Tốt", 3, "03/12/2005"));
        reviewData.add(new Review(1, 2, "Tốt", 3, "03/12/2005"));
        reviewData.add(new Review(2, 2, "Rất đáng tiền", 5, "03/12/2005"));
        reviewData.add(new Review(3, 2,"Tạm ổn", 3, "03/12/2005"));
    }

    public List<Review> getReviewsByProductId(int productId) {
        List<Review> result = new ArrayList<>();

        for (Review r : reviewData) {
            if (r.getPid() == productId) {
                result.add(r);
            }
        }

        return result;
    }
}

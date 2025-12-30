package org.example.projectweb.controller.reviewController;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.example.projectweb.service.ReviewService;

import java.io.IOException;

@WebServlet(name = "AddReviewController", value = "/add-review")
public class AddReviewController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ReviewService rs = new ReviewService();

        int userId = 1;
        int productId = Integer.parseInt(request.getParameter("productId"));
        int rating = Integer.parseInt(request.getParameter("rating"));
        String comment = request.getParameter("comment");

        rs.addReview(userId, productId, rating, comment);
        response.sendRedirect("productPage?pid=" + productId);
    }
}


package org.example.projectweb.controller;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.example.projectweb.model.Product;
import org.example.projectweb.model.Review;
import org.example.projectweb.service.*;

import java.io.IOException;

@WebServlet(name = "ProductPageController", value = "/productPage")
public class ProductPageController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ProductService ps = new ProductService();
        ReviewService rs = new ReviewService();
        WishlistService ws = new WishlistService();
        UserService us = new UserService();
        OrderService os = new OrderService();

        int userId = 1;
        int productId = Integer.parseInt(request.getParameter("pid"));
        Product p = ps.getProductById(productId);
        Review userReview = rs.getReviewByUidAndPid(userId, productId);

        request.setAttribute("p", p);
        request.setAttribute("pvs", ps.getVariantsByPid(productId));
        request.setAttribute("imgs", ps.getImgsByPid(productId));
        request.setAttribute("mainImg", ps.getMainImg(productId));
        request.setAttribute("avgRating", rs.getAvgRating(productId));
        request.setAttribute("inWishlist", ws.inWishlist(userId, productId));
        request.setAttribute("user", us.getUserById(userId));

        request.setAttribute("canReview", os.hasPurchased(userId, productId));
        request.setAttribute("userReview", userReview);
        request.setAttribute("reviews", rs.getReviewsForProduct(productId));

        request.getRequestDispatcher("productPage/productPage.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int userId = 1;
        int productId = Integer.parseInt(request.getParameter("productId"));

        WishlistService ws = new WishlistService();

        if (ws.inWishlist(userId, productId)) {
            ws.removeFromWishlist(userId, productId);
        } else {
            ws.addToWishlist(userId, productId);
        }

        response.sendRedirect("productPage?pid=" + productId);
    }
}


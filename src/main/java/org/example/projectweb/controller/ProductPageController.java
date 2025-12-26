package org.example.projectweb.controller;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.example.projectweb.model.Product;
import org.example.projectweb.service.ProductService;
import org.example.projectweb.service.ReviewService;
import org.example.projectweb.service.UserService;
import org.example.projectweb.service.WishlistService;

import java.io.IOException;

@WebServlet(name = "ProductPageController", value = "/productPage")
public class ProductPageController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ProductService ps = new ProductService();
        ReviewService rs = new ReviewService();
        WishlistService ws = new WishlistService();
        UserService us = new UserService();

        Product p = ps.getProductDetail(2);

        request.setAttribute("p", p);
        request.setAttribute("mainImg", ps.getMainImg(2));
        request.setAttribute("reviews", rs.getReviewsForProduct(2));
        request.setAttribute("avgRating", rs.getAvgRating(2));
        request.setAttribute("inWishlist", ws.inWishlist(1, 2));
        request.setAttribute("user", us.getUserById(1));

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

        response.sendRedirect("productPage");
    }
}


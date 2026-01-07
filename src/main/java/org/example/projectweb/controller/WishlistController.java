package org.example.projectweb.controller;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.example.projectweb.model.Product;
import org.example.projectweb.service.ReviewService;
import org.example.projectweb.service.WishlistService;

import java.io.IOException;
import java.util.List;

@WebServlet(name = "WishlistController", value = "/wishlist")
public class WishlistController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        WishlistService ws = new WishlistService();
        ReviewService rs = new ReviewService();

        List<Product> list = ws.getProductsForWishlist(1);

        request.setAttribute("list", list);

        request.setAttribute("listMainImgs", ws.getMainImgsForWishlist(1));
        request.setAttribute("avgs", rs.getAvgRatingsForProducts(list));
        request.getRequestDispatcher("wishList/wishListPage.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int userId = 1;
        String action = request.getParameter("action");

        if ("remove".equals(action)) {
            int productId = Integer.parseInt(request.getParameter("productId"));
            WishlistService ws = new WishlistService();
            ws.removeFromWishlist(userId, productId);
        }

        response.sendRedirect("wishlist");
    }
}


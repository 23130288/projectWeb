package org.example.projectweb.controller;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.example.projectweb.service.ProductService;
import org.example.projectweb.model.Product;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "searchController", value = "/search")
public class searchController extends HttpServlet {
    private final ProductService productService = new ProductService();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String query = request.getParameter("query");

        List<Product> results = productService.searchProducts(query);

        request.setAttribute("searchResults", results);
        request.setAttribute("searchNotResults", query);

        request.getRequestDispatcher("trang_tim_kiem/trang_tim_kiem.jsp").forward(request, response);
    }
}
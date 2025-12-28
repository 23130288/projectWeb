package org.example.projectweb.controller;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.example.projectweb.dao.ProductDao;
import org.example.projectweb.service.ProductService;
import org.example.projectweb.model.Product;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "searchController", value = "/search")
public class searchController extends HttpServlet {
    private final ProductService productService = new ProductService();
    private final ProductDao productDao = new ProductDao();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String query = request.getParameter("query");
        String category = request.getParameter("category");
        String sort = request.getParameter("sort");

        List<Product> results = productService.searchProducts(query);
        List<Product> resultFilter = productDao.searchInFilter(query, category, sort);

        for (Product p : resultFilter) {
            productService.getProductDetail(p.getPid());
        }
        request.setAttribute("searchResults", results);
        request.setAttribute("searchResults", resultFilter);
        request.setAttribute("results", query);
        request.setAttribute("currentCategory", category);
        request.setAttribute("currentSort", sort);

        request.getRequestDispatcher("trang_tim_kiem/trang_tim_kiem.jsp").forward(request, response);
    }
}
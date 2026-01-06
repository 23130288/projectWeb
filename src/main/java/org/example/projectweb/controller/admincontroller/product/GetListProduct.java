package org.example.projectweb.controller.admincontroller.product;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.example.projectweb.model.Product;
import org.example.projectweb.service.ProductService;

import java.io.IOException;
import java.util.List;

@WebServlet(name = "GetListProduct", value = "/admin/product_load")
public class GetListProduct extends HttpServlet {

    final ProductService productService = new ProductService();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        response.setContentType("application/json;charset=UTF-8");

        List<Product> products = productService.getAllProducts();

        String json = new Gson().toJson(products);
        response.getWriter().write(json);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
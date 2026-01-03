package org.example.projectweb.controller.admincontroller.product;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.example.projectweb.service.ProductService;

import java.io.IOException;

@WebServlet(name = "AddProduct", value = "/admin/product_add")
public class AddProduct extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ProductService ps = new ProductService();

        String name = request.getParameter("name");
        String type = request.getParameter("type");
        String style = request.getParameter("style");
        String material = request.getParameter("material");
        String producer = request.getParameter("producer");
        String status = request.getParameter("status");
        String description = request.getParameter("description");

        boolean ok = ps.addProduct( name, type, style, material, producer, status, description);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        if (ok) {
            response.getWriter().write("{\"success\":true}");
        } else {
            response.getWriter().write("{\"success\":false,\"message\":\"Product đã tồn tại\"}");
        }
    }
}
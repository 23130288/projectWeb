package org.example.projectweb.controller.admincontroller.product;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.example.projectweb.dao.ProductDao;
import org.example.projectweb.model.Product;

import java.io.IOException;

@WebServlet(name = "ProductStatus", value = "/admin/product/toggle_product_status")
public class ProductStatus extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    final ProductDao productDao = new ProductDao();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {

        int pid = Integer.parseInt(req.getParameter("pid"));

        Product product = productDao.getProductById(pid);
        if (product == null) {
            resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        if ("selling".equals(product.getStatus()) || "hot".equals(product.getStatus())) {
            product.setStatus("non_selling");
        } else if ("non_selling".equals(product.getStatus())) {
            product.setStatus("selling");
        }
        productDao.updateStatus(product.getPid(), product.getStatus());

        resp.setContentType("application/json");
        resp.getWriter().write(
                "{\"message\":\"Cập nhật trạng thái thành công\"}"
        );
    }
}
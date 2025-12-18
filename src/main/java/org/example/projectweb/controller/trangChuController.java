package org.example.projectweb.controller;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.example.projectweb.dao.ImageProductDao;
import org.example.projectweb.dao.ProductDao;
import org.example.projectweb.dao.ProductVariantDao;
import org.example.projectweb.model.Product;

import java.io.IOException;
import java.util.List;
import java.util.ArrayList;

@WebServlet(name = "trangChuController", value = "/trangChu")
public class trangChuController extends HttpServlet {
    private final ProductDao productDao = new ProductDao();
    private final ImageProductDao imageProductDao = new ImageProductDao();
    private final ProductVariantDao productVariantDao = new ProductVariantDao();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Product> allProducts = productDao.getListProductId();

        for (Product p : allProducts) {
            p.setImages(imageProductDao.getImagesByProductId(p.getPid()));
            p.setVariants(productVariantDao.getVariantsByProductId(p.getPid()));
        }

        List<Product> hotProducts = new ArrayList<>();
        List<Product> valiProducts = new ArrayList<>();
        List<Product> baloProducts = new ArrayList<>();

        for (Product p : allProducts) {
            String type = p.getType();
            String status = p.getStatus();

            if (status != null && status.equalsIgnoreCase("hot")) {
                hotProducts.add(p);
            }

            if (type != null && type.equalsIgnoreCase("Du Lich")) {
                valiProducts.add(p);
            }

            if (type != null && type.equalsIgnoreCase("Du Lich")) {
                baloProducts.add(p);
            }

        }

        request.setAttribute("hotProducts", hotProducts);
        request.setAttribute("valiProducts", valiProducts);
        request.setAttribute("baloProducts", baloProducts);

        request.getRequestDispatcher("trang_chu.jsp").forward(request, response);
    }
}
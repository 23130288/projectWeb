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
//        List<Product> hotProducts = productDao.getHotProducts();
//        List<Product> valiProducts = productDao.getValiProducts();
//        List<Product> baloProducts = productDao.getBaloProducts();
//
//        loadExtraData(hotProducts);
//        loadExtraData(valiProducts);
//        loadExtraData(baloProducts);
//
//        request.setAttribute("hotProducts", hotProducts);
//        request.setAttribute("valiProducts", valiProducts);
//        request.setAttribute("baloProducts", baloProducts);

        request.getRequestDispatcher("trang_chu/trang_chu.jsp").forward(request, response);
    }

//    private void loadExtraData(List<Product> products) {
//        for (Product p : products) {
//            p.setImages(imageProductDao.getImagesByProductId(p.getPid()));
//            p.setVariants(productVariantDao.getVariantsByProductId(p.getPid()));
//        }
//    }
}
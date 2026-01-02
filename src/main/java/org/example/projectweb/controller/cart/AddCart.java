package org.example.projectweb.controller.cart;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.example.projectweb.cart.Cart;
import org.example.projectweb.model.Product;
import org.example.projectweb.model.ProductVariant;
import org.example.projectweb.service.ProductService;

import java.io.IOException;

@WebServlet(name = "AddCart", value = "/add-cart")
public class AddCart extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int pid = Integer.parseInt(request.getParameter("pid"));
        int pvid = Integer.parseInt(request.getParameter("pvid"));
        String mainImg = request.getParameter("mainImg");
        int q = Integer.parseInt(request.getParameter("q"));

        ProductService ps = new ProductService();

        Product product = ps.getProductById(pid);
        ProductVariant productVariant = ps.getVariantByPvid(pvid);
        if (product == null) {
            return;
        }
        HttpSession session = request.getSession();
        Cart c = (Cart) session.getAttribute("cart");
        if (c==null)
            c = new Cart();
        c.addProduct(product, productVariant, mainImg, q);
        session.setAttribute("cart", c);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}


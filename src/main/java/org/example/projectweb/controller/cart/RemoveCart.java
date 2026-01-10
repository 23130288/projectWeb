package org.example.projectweb.controller.cart;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.example.projectweb.cart.Cart;

import java.io.IOException;

@WebServlet(name = "RemoveCart", value = "/remove-cart")
public class RemoveCart extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int pid = Integer.parseInt(request.getParameter("pid"));

        HttpSession session = request.getSession();
        Cart c = (Cart) session.getAttribute("cart");
        if (c == null)
            c = new Cart();

        c.deleteProduct(pid);
        session.setAttribute("cart", c);

        response.sendRedirect("cart");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}


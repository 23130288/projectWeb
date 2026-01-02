package org.example.projectweb.controller.cart;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.example.projectweb.cart.Cart;

import java.io.IOException;

@WebServlet(name = "ShowCart", value = "/cart")
public class ShowCart extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        Cart cart = (Cart) session.getAttribute("cart");

        if (cart == null) {
            cart = new Cart();
        }

        request.setAttribute("cart", cart);
        request.setAttribute("cartItems", cart.getList());

        request.getRequestDispatcher("cartPage/cartPage.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}


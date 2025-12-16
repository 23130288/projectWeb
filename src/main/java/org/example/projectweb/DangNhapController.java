package org.example.projectweb;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "DangNhapController", value = "/dang_nhap")
public class DangNhapController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("dang_nhap/dang_nhap.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String email = request.getParameter("email");
        String pass = request.getParameter("password");

        // GIẢ LẬP xác thực (sau này thay bằng DB)
        if ("user@gmail.com".equals(email) && "123".equals(pass)) {
            response.sendRedirect("tai_khoan");
        } else {
            request.setAttribute("err", "bạn nhập sai email hoặc mật khẩu");
            request.getRequestDispatcher("dang_nhap/dang_nhap.jsp").forward(request, response);
        }
    }
}
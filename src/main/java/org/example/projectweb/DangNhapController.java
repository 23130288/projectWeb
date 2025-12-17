package org.example.projectweb;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import org.example.projectweb.dao.userDao;
import org.example.projectweb.model.User;

@WebServlet(name = "DangNhapController", value = "/dang_nhap")
public class DangNhapController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("dang_nhap/dang_nhap.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String email = request.getParameter("email");
        String pass = request.getParameter("password");

        userDao dao = new userDao();
        User user = dao.login(email, pass);

        if (user != null) {
            // đăng nhập thành công
            HttpSession session = request.getSession();
            session.setAttribute("user", user);

            response.sendRedirect("tai_khoan");
        } else {
            // đăng nhập thất bại
            request.setAttribute("err", "Bạn nhập sai email hoặc mật khẩu");
            request.getRequestDispatcher("dang_nhap/dang_nhap.jsp").forward(request, response);
        }
    }
}
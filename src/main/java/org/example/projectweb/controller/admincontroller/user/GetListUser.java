package org.example.projectweb.controller.admincontroller.user;

import com.google.gson.Gson;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.example.projectweb.model.User;
import org.example.projectweb.service.admin.user.AdminGetUserService;

import java.io.IOException;
import java.util.List;

@WebServlet(name = "GetListUser", value = "/admin/users")
public class GetListUser extends HttpServlet {

    final AdminGetUserService userService = new AdminGetUserService();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        response.setContentType("application/json;charset=UTF-8");

        List<User> users = userService.getAllUsers();

        String json = new Gson().toJson(users);
        response.getWriter().write(json);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {

    }
}
package org.example.projectweb.service;

import org.example.projectweb.dao.userDao;
import org.example.projectweb.model.User;

public class DangNhapService {

    private userDao userDao = new userDao();

    public User login(String email, String password) {
        User user = userDao.findByEmail(email);
        //không tìm thấy email
        if (user == null) return null;

        //sai mật khẩu
        if (!user.getPassword().equals(password)) return null;

        return user;
    }
}

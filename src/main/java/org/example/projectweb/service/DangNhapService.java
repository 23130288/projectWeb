package org.example.projectweb.service;

import org.example.projectweb.dao.userDao;
import org.example.projectweb.model.User;

public class DangNhapService {

    private userDao userDao = new userDao();

    public User login(String email, String password) {
        if (email == null || password == null) {
            return null;
        }
        User user = userDao.login(email, password);

        return user;
    }
}

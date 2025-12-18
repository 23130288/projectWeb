package org.example.projectweb.service;

import org.example.projectweb.dao.userDao;
import org.example.projectweb.model.User;

public class DangKyService {

    private static userDao userDao = new userDao();

    public static boolean addUser(String email, String password, String name) {
        // Check email đã tồn tại
        if (userDao.findByEmail(email) != null) {
            return false;
        }

        // Tạo user mới
        userDao.addUser(email, password, name);
        return true;
    }
}
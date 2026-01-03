package org.example.projectweb.service;

import org.example.projectweb.dao.userDao;

public class DangKyService {

    private static userDao userDao = new userDao();

    public static boolean addUser(String email, String password, String name) {
        // Check email đã tồn tại
        if (userDao.findByEmail(email) != null) {
            return false;
        }

        // Tạo user mới
        HashService hs = new HashService();
        userDao.addUser(email, hs.hashMd5(password), name);
        return true;
    }
}
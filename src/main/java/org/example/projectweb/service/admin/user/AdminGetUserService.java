package org.example.projectweb.service.admin.user;

import org.example.projectweb.dao.userDao;
import org.example.projectweb.model.User;

import java.util.List;

public class AdminGetUserService {
    private final userDao userDao = new userDao();

    public List<User> getAllUsers() {
        return userDao.getListUserId();
    }

    public User getUserById(int id) {
        return userDao.getUserById(id);
    }
}

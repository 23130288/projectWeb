package org.example.projectweb.dao;

import org.example.projectweb.model.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class userDao {
    static Map<Integer, User> data = new HashMap<>();

    static {
        data.put(1, new User(1, "nguyen van a", "nguyenvana@gmail.com", "123", "duong abc", "12/11/2010", "nguyenvana.jpg", "user", "09444423670", true));
        data.put(2, new User(2, "nguyen van b", "nguyenvanb@gmail.com", "123", "duong abc", "15/5/2009", "nguyenvanb.jpg", "user", "09638256192", true));
        data.put(3, new User(3, "nguyen van c", "nguyenvanc@gmail.com", "123", "duong abc", "24/1/2008", "nguyenvanc.jpg", "user", "09628237362", true));
        data.put(4, new User(4, "tran van a", "tranvana@gmail.com", "123", "duong abc", "2/7/2004", "tranvana.jpg", "user", "092129352761", true));
        data.put(4, new User(5, "admin a", "admina@gmail.com", "123", null, "2/7/2004", "tranvana.jpg", "admin", null, true));
    }

    public User login(String email, String password) {
        for (User u : data.values()) {
            if (u.getEmail().equals(email) && u.getPassword().equals(password)) {
                return u;
            }
        }
        return null;
    }

    public User findByEmail(String email) {
        for (User u : data.values()) {
            if (u.getEmail().equals(email)) {
                return u;
            }
        }
        return null;
    }

    public void addUser(String email, String pass, String name) {
        int uid = data.size() + 1;
        data.put(uid, new User(uid, name, email, pass, null, null, null, "user", null, true));
    }

    public List<User> getListUserId() {
        return new ArrayList<>(data.values());
    }

    public User getUserById(int userId) {
        return data.getOrDefault(userId, null);
    }
}
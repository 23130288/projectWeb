package org.example.projectweb.service;

import org.example.projectweb.dao.SupportDao;

public class SupportService {
    private SupportDao spDao = new SupportDao();

    public void createSupport(int userId, String topic, String title, String message) {
        spDao.createSupport(userId, topic, title, message);
    }
}

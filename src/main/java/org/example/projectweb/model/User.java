package org.example.projectweb.model;

import java.util.ArrayList;

public class User {
    private int uid;
    private String name;
    private String email;
    private String password;
    private String address;
    private String bdate;
    private String avatar;
    private String role;
    private String phone;
    private boolean status;

    public User(int uid, String name, String email, String password, String address, String bdate, String avatar, String role, String phone, boolean status) {
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.bdate = bdate;
        this.avatar = avatar;
        this.role = role;
        this.phone = phone;
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getAddress() {
        return address;
    }

    public String getBDate() {
        return bdate;
    }

    public String getAvatar() {
        return avatar;
    }

    public String getPhone() { return phone;}

    public boolean getStatus() {
        return status;
    }

}

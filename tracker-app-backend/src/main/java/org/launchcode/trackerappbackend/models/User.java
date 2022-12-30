package org.launchcode.trackerappbackend.models;

import com.sun.istack.NotNull;

import javax.persistence.Entity;

@Entity
public class User {

    @NotNull
    private String name;

    @NotNull
    private String email;

    @NotNull
    private String password;

    public User(){};

    public User(String name, String email, String password) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}

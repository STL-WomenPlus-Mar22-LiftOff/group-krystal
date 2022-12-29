package org.launchcode.trackerappbackend.models;

import com.sun.istack.NotNull;

import javax.persistence.Entity;

@Entity
public class User {

    @NotNull
    private String email;

    @NotNull
    private String pwHash;

    public User(){};

    public User(String email, String pwHash) {
        this.email = email;
        this.pwHash = pwHash;
    }

    public String getEmail() {
        return email;
    }


}

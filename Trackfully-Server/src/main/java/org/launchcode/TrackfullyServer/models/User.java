package org.launchcode.TrackfullyServer.models;

import com.sun.istack.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Entity
public class User extends AbstractEntity{

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @NotNull
    private String name;

    @NotNull
    @Email
    private String email;

    @NotNull
    @Size(min = 8)
    private String pwHash;
    
    public User(){};

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.pwHash = encoder.encode(password);
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

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    public String getPwHash() {
        return pwHash;
    }

    public void setPwHash(String pwHash) {
        this.pwHash = pwHash;
    }

}

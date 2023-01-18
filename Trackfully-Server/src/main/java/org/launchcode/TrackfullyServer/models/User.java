package org.launchcode.TrackfullyServer.models;

import com.sun.istack.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;

@Entity
public class User extends AbstractEntity{

    @NotNull
    private String name;

    @NotNull
    private String email;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @NotNull
    private String pwHash;

    @NotNull
    private String confirmPassword;
    
    public User(){};

    public User(String name, String email, String password, String confirmPassword) {
        this.email = email;
        this.pwHash = encoder.encode(password);
        this.name = name;
        this.confirmPassword = confirmPassword;
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

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

}

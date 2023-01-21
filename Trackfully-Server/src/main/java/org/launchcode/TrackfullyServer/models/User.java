package org.launchcode.TrackfullyServer.models;

import com.sun.istack.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;

@Entity
public class User extends AbstractEntity{

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @NotNull
    private String name;

    @NotNull
    private String email;

    @NotNull
    private String pwHash;

    @NotNull
    private String confirmPassword;
    
    public User(){};

    public User(String email, String pwHash) {
        this.email = email;
        this.pwHash = pwHash;
    }

    public User(String name, String email, String pwHash, String confirmPassword) {
        this.name = name;
        this.email = email;
        this.pwHash = pwHash;
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

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    public String getPwHash() {
        return pwHash;
    }

    public void setPwHash(String pwHash) {
        this.pwHash = pwHash;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    @Override
    public String toString() {
        return "User{" +
                "pwHash='" + pwHash + '\'' +
                '}';
    }

    //    public User(String name, String email, String password, String confirmPassword) {
//        this.email = email;
//        this.name = name;
//        this.pwHash = encoder.encode(password);
//        this.confirmPassword = confirmPassword;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public String getPassword() {
//        return pwHash;
//    }
//
////    public void setPassword(String password) {
////        this.password = password;
////    }
//
//    public String getConfirmPassword() {
//        return confirmPassword;
//    }
//
//    public void setConfirmPassword(String confirmPassword) {
//        this.confirmPassword = confirmPassword;
//    }
//
//    public boolean isMatchingPassword(String password) {
//        return encoder.matches(password, pwHash);
//    }



}

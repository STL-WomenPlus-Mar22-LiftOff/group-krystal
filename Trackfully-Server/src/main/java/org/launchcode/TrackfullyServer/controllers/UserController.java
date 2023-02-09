package org.launchcode.TrackfullyServer.controllers;

import org.launchcode.TrackfullyServer.data.UserRepository;
import org.launchcode.TrackfullyServer.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    @GetMapping("")
    public Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }


    @GetMapping("search/{id}")
    public Optional <User> getUserByUserId(@PathVariable("id") Integer userId) {
        Optional <User> user = userRepository.findById(userId);
        return user;
    }


    @GetMapping("{email}")
    public HashMap<String, String> getUserInfo (@PathVariable("email") String email) {

        Optional<User> userData = userRepository.findByEmail(email);

        HashMap<String, String> map = new HashMap<>();

        if (userData.isPresent()) {
            User user = userData.get();
             map.put("id",Integer.toString(user.getId()));
             map.put("email",user.getEmail());
             map.put("name", user.getName());
        }
        return map;
    }

    @PostMapping("")
    void addUser(@RequestBody User user) {
        User newUser = new User(user.getName(), user.getEmail(), user.getPwHash());
        userRepository.save(newUser);
    }

    @PostMapping("authenticate")
    public HashMap<String, String> authenticate (@RequestBody @Valid User user, Errors errors) {

        Optional<User> userData = userRepository.findByEmail(user.getEmail());
        HashMap<String, String> map = new HashMap<>();

        if (errors.hasErrors()){
            map.put("status", "errors");
        }
        if (userData.isPresent()) {
            User userInfo = userData.get();
            if (encoder.matches(user.getPwHash(), userInfo.getPwHash())) {
                map.put("status","success");
            } else {
                map.put("status","failure");
            }
        } else {
            map.put("status","failure");
        }
        return map;
    }

    @PostMapping("/confirm/email")
    public boolean checkEmail(@RequestBody String email) {
        Iterable<User> allUsers = getAllUsers();
        for (User user : allUsers) {
            if (email.equalsIgnoreCase(user.getEmail())) {
                return false;
            }
        }
        return true;
    }
}

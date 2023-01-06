package org.launchcode.trackerappbackend.controllers;

import org.launchcode.trackerappbackend.data.UserRepository;
import org.launchcode.trackerappbackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @GetMapping("")
    public Iterable<User> getUser(){

      //  uncomment this section for the first bootrun for hardcoded data to be added in MySQL, re-comment for any additional bootruns- otherwise will get error since you are adding the exact same data twice
//            userRepository.save(new User("Emma", "emma@gmail.com", "emma123"));
//            userRepository.save(new User("Emily", "emily@gmail.com", "emily123"));

        return userRepository.findAll();
    }

    @PostMapping("")
    void addUser(@RequestBody User user) {
        User newUser = new User(user.getId(), user.getName(), user.getEmail(), user.getPassword(), user.getConfirmPassword());
        userRepository.save(newUser);
    }
}

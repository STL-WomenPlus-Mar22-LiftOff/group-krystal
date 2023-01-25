package org.launchcode.TrackfullyServer.controllers;

import org.launchcode.TrackfullyServer.data.UserRepository;
import org.launchcode.TrackfullyServer.models.Symptom;
import org.launchcode.TrackfullyServer.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Iterator;
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


      //  uncomment this section for the first bootrun for hardcoded data to be added in MySQL, re-comment for any additional bootruns- otherwise will get error since you are adding the exact same data twice
//            userRepository.save(new User("Emma", "emma@gmail.com", "emma123"));
//            userRepository.save(new User("Emily", "emily@gmail.com", "emily123"));

        return userRepository.findAll();
    }

    //getSpecificUser and getUserId are similar functions, should remove one to keep code dry
    //neither are currently used in main branch

    @GetMapping("search/id")
    public Optional <User> getSpecificUser(@RequestParam User user) {
        Optional <User> userId = userRepository.findById(user.getId());
        return userId;
    }

    @GetMapping("{email}/id")
    public Integer getUserId(@PathVariable("email") String email) {
        Optional<User> userData = userRepository.findByEmail(email);
        User foundUser = userData.get();
        return foundUser.getId();
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

//    @GetMapping("{id}")
//    public Optional<User> getUserById(@PathVariable("id") int id) {
//        return userRepository.findById(id);
//    }

    @PostMapping("authenticate")
    public HashMap<String, String> authenticate (@RequestBody User user) {

        Optional<User> userData = userRepository.findByEmail(user.getEmail());

        HashMap<String, String> map = new HashMap<>();

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

    @GetMapping("/confirm/{email}")
    public boolean checkEmail(@PathVariable("email") String email) {
        Iterable<User> allUsers = getAllUsers();
        for (User user : allUsers) {
            if (email.equalsIgnoreCase(user.getEmail())) {
                return false;
            }
        }
        return true;
    }
}

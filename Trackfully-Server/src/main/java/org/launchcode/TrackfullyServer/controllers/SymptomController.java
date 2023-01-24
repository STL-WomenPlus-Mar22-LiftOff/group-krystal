package org.launchcode.TrackfullyServer.controllers;

import org.launchcode.TrackfullyServer.data.SymptomRepository;
import org.launchcode.TrackfullyServer.data.UserRepository;
import org.launchcode.TrackfullyServer.models.Symptom;
import org.launchcode.TrackfullyServer.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("symptom")
public class SymptomController {

    @Autowired
    private SymptomRepository symptomRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public Iterable<Symptom> getAllSymptoms(){
        return symptomRepository.findAll();
    }

    @GetMapping("user/{userId}")
    public Integer getSymptomId(@PathVariable("userId") String userId) {

        Optional<User> user = userRepository.findById(Integer.parseInt(userId));

        int symptomId = -1;

        if (user.isPresent()) {
            Optional<Symptom> symptom = symptomRepository.findByUser(user.get());
            if (symptom.isPresent()) {
                symptomId = symptom.get().getId();
            }
        }
        return symptomId;
    }

    @GetMapping("name/{symptomId}")
    public HashMap getSymptomName(@PathVariable("symptomId") String symptomId) {

        Optional<Symptom> symptom = symptomRepository.findById(Integer.parseInt(symptomId));

        HashMap<String, String> map = new HashMap<>();

        if (symptom.isPresent()) {
            map.put("name",symptom.get().getSymptomName());
        }
        return map;
    }



//     public HashMap<String, String> authenticate (@RequestBody User user) {
//
//        Optional<User> userData = userRepository.findByEmail(user.getEmail());
//
//        HashMap<String, String> map = new HashMap<>();
//
//        if (userData.isPresent()) {
//            User userInfo = userData.get();
//            if (encoder.matches(user.getPwHash(), userInfo.getPwHash())) {
//                map.put("status","success");
//            } else {
//                map.put("status","failure");
//            }
//        } else {
//            map.put("status","failure");
//        }
//        return map;
//    }
    @PostMapping("")
    void addSymptom(@RequestBody @Valid Symptom symptom, Errors errors) {
        if (!errors.hasErrors()) {
            Symptom newSymptom = new Symptom(symptom.getSymptomName());
            symptomRepository.save(newSymptom);
        }
    }
    //added in get User Id

    //no longer needed?
//   @GetMapping("/{id}")
//   public Optional<Symptom> getSymptomByUserId(@PathVariable("id") int userId) {
//       //get user by id
//       System.out.println(userId);
//       //sql file to fetch symptomID using userId?
//       // this controller takes in a user id, we want to use that to find and return symptom id or Symptom.
//       // doesnt work -->
//       Optional<Symptom> foundSymptom = symptomRepository.findById(userId);
//       System.out.println("user id " + foundSymptom);
//       return foundSymptom;
//   }
}

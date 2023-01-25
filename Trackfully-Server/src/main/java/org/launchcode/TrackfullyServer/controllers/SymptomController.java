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
    public Integer getSymptomIdByUserId(@PathVariable("userId") String userId) {

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

//    @GetMapping("name/{symptomId}")
//    public HashMap getSymptomName(@PathVariable("symptomId") String symptomId) {
//
//        Optional<Symptom> symptom = symptomRepository.findById(Integer.parseInt(symptomId));
//
//        HashMap<String, String> map = new HashMap<>();
//
//        if (symptom.isPresent()) {
//            map.put("name",symptom.get().getSymptomName());
//        }
//        return map;
//    }

    @GetMapping("/{id}")
    public Optional<Symptom> getSymptomById(@PathVariable("id") Integer id) {
        return symptomRepository.findById(id);
    }




    @PostMapping("")
    void addSymptom(@RequestBody @Valid Symptom symptom, Errors errors) {
        if (!errors.hasErrors()) {
            symptomRepository.save(symptom);
        }
    }

}

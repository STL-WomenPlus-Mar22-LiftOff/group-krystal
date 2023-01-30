package org.launchcode.TrackfullyServer.controllers;

import org.launchcode.TrackfullyServer.data.SymptomRepository;
import org.launchcode.TrackfullyServer.data.UserRepository;
import org.launchcode.TrackfullyServer.models.Symptom;
import org.launchcode.TrackfullyServer.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Optional;

import static java.lang.Integer.parseInt;

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
    public ArrayList<Integer> getSymptomIdsByUserId(@PathVariable("userId") String userId) {

        ArrayList<Integer> symptomIds = new ArrayList<Integer>();
        Iterable<Symptom> symptoms = symptomRepository.findAll();
        for (Symptom symptom : symptoms) {
            if (symptom.getUser().getId() == Integer.parseInt(userId)) {
                symptomIds.add(symptom.getId());
            }
        }
        return symptomIds;
    }

    @GetMapping("/{id}")
    public Optional<Symptom> getSymptomById(@PathVariable("id") Integer id) {
        return symptomRepository.findById(id);
    }

    // this checks if the user has more than 3 symptoms already.
    @GetMapping("check/{userId}")
    public boolean checkNumberOfSymptoms(@PathVariable("userId") Integer userId) {
        Integer numberOfSymptoms = 0;
        Iterable<Symptom> symptoms = symptomRepository.findAll();
        for (Symptom symptom : symptoms) {
            if (symptom.getUser().getId() == userId) {
                numberOfSymptoms++;
            }
        }
        if (numberOfSymptoms > 2) {
            return false;
        } else {
            return true;
        }
    }

    @PostMapping("")
    void addSymptom(@RequestBody @Valid Symptom symptom, Errors errors) {
        if (!errors.hasErrors()) {
            symptomRepository.save(symptom);
        }
    }

}

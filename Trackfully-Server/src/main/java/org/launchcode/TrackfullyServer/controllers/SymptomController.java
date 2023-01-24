package org.launchcode.TrackfullyServer.controllers;

import org.launchcode.TrackfullyServer.data.SymptomRepository;
import org.launchcode.TrackfullyServer.models.Symptom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("symptom")
public class SymptomController {

    @Autowired
    private SymptomRepository symptomRepository;

    @GetMapping("")
    public Iterable<Symptom> getAllSymptoms(){
        return symptomRepository.findAll();
    }

    @GetMapping("user/{userId}")
    public Integer getSymptomId(@PathVariable("userId") String userId) {

        Iterable<Symptom> symptoms = symptomRepository.findAll();

        for (Symptom symptom : symptoms) {
            if (symptom.getUser().getId() == Integer.valueOf(userId)) {
                System.out.println(symptom.getId());
                return symptom.getId();
            } ;
        }
        return -1;
    }
    @PostMapping("")
    void addSymptom(@RequestBody @Valid Symptom symptom, Errors errors) {
        if (!errors.hasErrors()) {
            Symptom newSymptom = new Symptom(symptom.getSymptomName());
            symptomRepository.save(newSymptom);
        }
    }
    //added in get User Id

   @GetMapping("/{id}")
   public Optional<Symptom> getSymptomByUserId(@PathVariable("id") int userId) {
       //get user by id
       System.out.println(userId);
       //sql file to fetch symptomID using userId?
       // this controller takes in a user id, we want to use that to find and return symptom id or Symptom.
       // doesnt work -->
       Optional<Symptom> foundSymptom = symptomRepository.findById(userId);
       System.out.println("user id " + foundSymptom);
       return foundSymptom;
   }
}

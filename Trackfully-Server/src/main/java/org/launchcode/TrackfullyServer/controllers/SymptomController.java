package org.launchcode.TrackfullyServer.controllers;

import org.launchcode.TrackfullyServer.data.SymptomRepository;
import org.launchcode.TrackfullyServer.models.Symptom;
import org.launchcode.TrackfullyServer.models.SymptomTracker;
import org.launchcode.TrackfullyServer.models.User;
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
    public Iterable<Symptom> getSymptom(){
        return symptomRepository.findAll();
    }

//    @GetMapping("")
//    public Optional<Symptom> getSymptomById(int id){
//        return symptomRepository.findById(id);
//    }

//    @PostMapping("")
//    void addSymptom(@RequestBody @Valid Symptom newSymptom, Errors errors) {
//        if (!errors.hasErrors()) {
//            symptomRepository.save(newSymptom);
//        }
//    }

    @PostMapping("")
    void addSymptom(@RequestBody @Valid Symptom symptom, Errors errors) {
        Symptom newSymptom = new Symptom(symptom.getSymptomName(), symptom.getUserId());
            symptomRepository.save(newSymptom);
        }

}

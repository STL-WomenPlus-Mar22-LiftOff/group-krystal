package org.launchcode.trackerappbackend.controllers;

import org.launchcode.trackerappbackend.data.SymptomRepository;
import org.launchcode.trackerappbackend.models.Symptom;
import org.launchcode.trackerappbackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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

    @PostMapping("")
    void addSymptom(@RequestBody @Valid Symptom symptom, Errors errors) {
        if (!errors.hasErrors()) {
            Symptom newSymptom = new Symptom(symptom.getSymptomName());
            symptomRepository.save(newSymptom);
        }
    }
}

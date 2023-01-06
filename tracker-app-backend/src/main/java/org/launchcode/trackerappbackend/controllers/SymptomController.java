package org.launchcode.trackerappbackend.controllers;

import org.launchcode.trackerappbackend.data.SymptomRepository;
import org.launchcode.trackerappbackend.models.Symptom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}

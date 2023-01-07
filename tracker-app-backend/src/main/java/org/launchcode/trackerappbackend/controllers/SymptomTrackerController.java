package org.launchcode.trackerappbackend.controllers;

import org.launchcode.trackerappbackend.data.SymptomTrackerRepository;
import org.launchcode.trackerappbackend.models.SymptomTracker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("symptomtracker")
public class SymptomTrackerController {

    @Autowired
    private SymptomTrackerRepository symptomTrackerRepository;

    @GetMapping("")
    public Iterable<SymptomTracker> getSymptomTrackerData() {
        return symptomTrackerRepository.findAll();
    }
}

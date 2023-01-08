package org.launchcode.trackerappbackend.controllers;

import org.launchcode.trackerappbackend.data.SymptomTrackerRepository;
import org.launchcode.trackerappbackend.models.Rating;
import org.launchcode.trackerappbackend.models.SymptomTracker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("symptomtracker")
public class SymptomTrackerController {

    @Autowired
    private SymptomTrackerRepository symptomTrackerRepository;

    @GetMapping("")
    public ArrayList<ArrayList<String>> getSymptomTrackerData() {

        //this is the ArrayList that will house both the x axis and y axis arraylists
        ArrayList<ArrayList<String>> data = new ArrayList<>();

        //create a new Hashmap with all data
        HashMap<Date, Rating> dataset = new HashMap<>();

        //populate hashmap with data
        for (SymptomTracker i : symptomTrackerRepository.findAll()) {
            dataset.put(i.getDate(),i.getRating());
        }

        //XAXIS: get keys from hashmap and put into an arraylist, and sort dates
        ArrayList<Date> dates = new ArrayList<>(dataset.keySet());
        Collections.sort(dates);

        //YAXIS: get values from hashmap, per sorted order
        ArrayList<Rating> ratings = new ArrayList<>();
        for (Date i : dates) {
            ratings.add(dataset.get(i));
        }

        // Convert xaxis and y axis arrays to strings
        ArrayList<String> datestoString = new ArrayList<>();
        for (Date i : dates) {
            datestoString.add(new SimpleDateFormat("MM-dd-yy").format(i));
        }

        ArrayList<String> ratingsToString = new ArrayList<>();
        for (Rating i: ratings) {
            ratingsToString.add(i.toString());
        }

        //add converted dates and ratings to data arraylist
        data.add(datestoString);
        data.add(ratingsToString);

        return data;
    }
}

package org.launchcode.TrackfullyServer.controllers;

import org.launchcode.TrackfullyServer.data.SymptomTrackerRepository;
import org.launchcode.TrackfullyServer.models.Rating;
import org.launchcode.TrackfullyServer.models.SymptomTracker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("symptomtracker")
public class SymptomTrackerController {

    @Autowired
    private SymptomTrackerRepository symptomTrackerRepository;

    @GetMapping("")
    public ArrayList<ArrayList<String>> getSymptomTrackerData() {

        //Adding example data, comment this out after first bootrun
        symptomTrackerRepository.save(new SymptomTracker(Rating.ONE,new GregorianCalendar(2022,00,01).getTime()));
        symptomTrackerRepository.save(new SymptomTracker(Rating.TWO,new GregorianCalendar(2022,00,04).getTime()));
        symptomTrackerRepository.save(new SymptomTracker(Rating.FIVE,new GregorianCalendar(2022,00,10).getTime()));
        symptomTrackerRepository.save(new SymptomTracker(Rating.TEN,new GregorianCalendar(2022,00,02).getTime()));


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

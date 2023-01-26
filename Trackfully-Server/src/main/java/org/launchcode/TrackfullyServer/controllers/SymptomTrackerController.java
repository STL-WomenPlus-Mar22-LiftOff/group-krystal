package org.launchcode.TrackfullyServer.controllers;

import org.launchcode.TrackfullyServer.data.SymptomRepository;
import org.launchcode.TrackfullyServer.data.SymptomTrackerRepository;
import org.launchcode.TrackfullyServer.models.Rating;
import org.launchcode.TrackfullyServer.models.Symptom;
import org.launchcode.TrackfullyServer.models.SymptomTracker;
import org.launchcode.TrackfullyServer.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("symptom-tracker")
public class SymptomTrackerController {

    @Autowired
    private SymptomTrackerRepository symptomTrackerRepository;

    @Autowired
    private SymptomRepository symptomRepository;

    @GetMapping("data/{symptomId}")
    public ArrayList<ArrayList<String>> getSymptomTrackerData(@PathVariable("symptomId") String symptomId) {

        //Adding example data, comment this out after first bootrun
//        symptomTrackerRepository.save(new SymptomTracker(Rating.ONE,new GregorianCalendar(2022,00,01).getTime()));
//        symptomTrackerRepository.save(new SymptomTracker(Rating.TWO,new GregorianCalendar(2022,00,04).getTime()));
//        symptomTrackerRepository.save(new SymptomTracker(Rating.FIVE,new GregorianCalendar(2022,00,10).getTime()));
//        symptomTrackerRepository.save(new SymptomTracker(Rating.TEN,new GregorianCalendar(2022,00,02).getTime()));


        //this is the ArrayList that will house both the x axis and y axis arraylists
        ArrayList<ArrayList<String>> data = new ArrayList<>();

        //create a new Hashmap with all data
        HashMap<LocalDate, Rating> dataset = new HashMap<>();

        //populate hashmap with data
        //filter data by symptomid
        for (SymptomTracker i : symptomTrackerRepository.findAll()) {
            if (i.getSymptom().getId() == Integer.parseInt(symptomId)) {
                dataset.put(i.getDate(), i.getRating());
            }
        }

        //XAXIS: get keys from hashmap and put into an arraylist, and sort dates
        ArrayList<LocalDate> dates = new ArrayList<>(dataset.keySet());
        Collections.sort(dates);

        //YAXIS: get values from hashmap, per sorted order
        ArrayList<Rating> ratings = new ArrayList<>();
        for (LocalDate i : dates) {
            ratings.add(dataset.get(i));
        }

        // Convert xaxis and y axis arrays to strings
        ArrayList<String> datestoString = new ArrayList<>();
        for (LocalDate i : dates) {
//            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd-YY");
//            datestoString.add(formatter.format(i));
//            System.out.println(formatter.format(i));
            datestoString.add(i.toString());
        }

        ArrayList<String> ratingsToString = new ArrayList<>();
        for (Rating i: ratings) {
            ratingsToString.add(i.toString());
        }

        //add converted dates and ratings to data arraylist
        data.add(datestoString);
        data.add(ratingsToString);
        System.out.println("data");
        return data;
    }


    @PostMapping("add-daily")
    public void addDailySymptomData (@RequestBody @Valid SymptomTracker dailyEntry) {
        symptomTrackerRepository.save(dailyEntry);
    }

    @GetMapping("{id}")
    public Optional<SymptomTracker> getSymptomTracker(@PathVariable("id") int id) {
        return symptomTrackerRepository.findById(id);
    }
}

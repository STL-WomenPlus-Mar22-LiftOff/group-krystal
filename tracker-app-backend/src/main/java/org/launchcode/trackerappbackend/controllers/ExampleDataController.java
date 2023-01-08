package org.launchcode.trackerappbackend.controllers;

import org.launchcode.trackerappbackend.data.DataRepository;
import org.launchcode.trackerappbackend.models.ExampleData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("chart")
public class ExampleDataController {

    @Autowired
    private DataRepository dataRepository;

    @GetMapping("")
    public ArrayList<ArrayList<String>> getData() {

        //Adding example data, comment this out after first bootrun
//        dataRepository.save(new ExampleData(new GregorianCalendar(2022,00,01).getTime(),5));
//        dataRepository.save(new ExampleData(new GregorianCalendar(2022,00,02).getTime(),6));
//        dataRepository.save(new ExampleData(new GregorianCalendar(2022,00,10).getTime(),2));
//        dataRepository.save(new ExampleData(new GregorianCalendar(2022,00,04).getTime(),7));
//        dataRepository.save(new ExampleData(new GregorianCalendar(2022,00,06).getTime(),3));
        dataRepository.save(new ExampleData(new GregorianCalendar(2022,00,11).getTime(),9));

        //this is the ArrayList that will house both the x axis and y axis arraylists
        ArrayList<ArrayList<String>> data = new ArrayList<>();

        //create a new Hashmap with all data
        HashMap<Date,Integer> dataset = new HashMap<>();

        //populate hashmap with data
        for (ExampleData i : dataRepository.findAll()) {
            dataset.put(i.getDate(),i.getRating());
        }

        //XAXIS: get keys from hashmap and put into an arraylist, and sort dates
        ArrayList<Date> dates = new ArrayList<>(dataset.keySet());
        Collections.sort(dates);

        //YAXIS: get values from hashmap, per sorted order
        ArrayList<Integer> ratings = new ArrayList<>();
        for (Date i : dates) {
            ratings.add(dataset.get(i));
        }

        // Convert xaxis and y axis arrays to strings
        ArrayList<String> datestoString = new ArrayList<>();
        for (Date i : dates) {
            datestoString.add(new SimpleDateFormat("MM-dd-yy").format(i));
        }

        ArrayList<String> ratingsToString = new ArrayList<>();
        for (Integer i: ratings) {
            ratingsToString.add(i.toString());
        }

        //add converted dates and ratings to data arraylist
        data.add(datestoString);
        data.add(ratingsToString);

        return data;
    }
}

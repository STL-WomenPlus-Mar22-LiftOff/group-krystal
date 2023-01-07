package org.launchcode.trackerappbackend.controllers;

import org.launchcode.trackerappbackend.data.DataRepository;
import org.launchcode.trackerappbackend.models.ExampleData;
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
@RequestMapping("chart")
public class ExampleDataController {

    @Autowired
    private DataRepository dataRepository;

    //this provides the data for the x-axis, but these are converted to strings
//    @GetMapping("")
//    public ArrayList<ArrayList<String>> getData() {
//        //this is the ArrayList that will house both the x axis and y axis arraylists
//        ArrayList<ArrayList<String>> data = new ArrayList<>();
//
//        // X AXIS: first, add all dates in list to an array
//        ArrayList<Date> dates = new ArrayList<>();
//        for (ExampleData i : dataRepository.findAll()) {
//            dates.add(i.getDate());
//        }
//        // X AXIS: second, sort all dates in the list, in case there is an entry that is edited, so that the dates are not in correct order
//        Collections.sort(dates);
//        // X AXIS: last, edit all date objects to string to correct display format
//        ArrayList<String> datestoStrings = new ArrayList<>();
//        for (Date i : dates) {
//            datestoStrings.add(new SimpleDateFormat("MM-dd-yy").format(i));
//        }
//
//        // Y AXIS: first, add all ratings in list to an array
//        ArrayList<Integer> ratings = new ArrayList<>();
//        for (ExampleData i : dataRepository.findAll()) {
//            ratings.add(i.getRating());
//        }
//
//        // second, sort all  in the list, in case there is an entry that is edited, so that the dates are not in correct order
//        Collections.sort(dates);
//        // last, edit all date objects to string to correct display format
//        ArrayList<String> datestoStrings = new ArrayList<>();
//        for (Date i : dates) {
//            datestoStrings.add(new SimpleDateFormat("MM-dd-yy").format(i));
//        }
//
//        return data;
//    }

    @GetMapping("")
    public ArrayList<ArrayList<String>> getData() {
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

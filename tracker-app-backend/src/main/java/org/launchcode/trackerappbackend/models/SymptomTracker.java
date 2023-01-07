package org.launchcode.trackerappbackend.models;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class SymptomTracker {

    @Id
    @GeneratedValue
    private int id;

    private Rating rating;

    @NotNull
    private int date;

    public SymptomTracker() {}

    public SymptomTracker(Rating rating, int date) {
        this.rating = rating;
        this.date = date;
    }

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public int getDate() {
        return date;
    }

    public void setDate(int date) {
        this.date = date;
    }
}

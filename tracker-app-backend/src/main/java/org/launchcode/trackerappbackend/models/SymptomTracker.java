package org.launchcode.trackerappbackend.models;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

@Entity
public class SymptomTracker {

    @Id
    @GeneratedValue
    private int id;

    private Rating rating;

    @NotNull
    private SimpleDateFormat date = new SimpleDateFormat("MM-dd-yyyy");

    @ManyToOne
    @NotNull
//    @Valid (will need to add in once Symptom model is merged to main, validation dependency does not exist in this branch
    private User user;

    //Once Symptom model is merged with main, will need to add ManyToOne relationship to Symptom as seen below. Will also need to add OneToMany relationship for Symptom to Symptom Tracker in Symptom model)
//    @ManyToOne
//    @NotNull
//    private Symptom symptom;



    public SymptomTracker() {}

    public SymptomTracker(Rating rating, SimpleDateFormat date) {
        this.rating = rating;
        this.date = date;
    }

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public SimpleDateFormat getDate() {
        return date;
    }

    public void setDate(SimpleDateFormat date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SymptomTracker that = (SymptomTracker) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

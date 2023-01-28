package org.launchcode.TrackfullyServer.models;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.Valid;
import java.time.LocalDate;

@Entity
public class SymptomTracker extends AbstractEntity {


    @NotNull
    private LocalDate date;
    //private SimpleDateFormat date = new SimpleDateFormat("MM-dd-yyyy");
    //if this causes issues with chart JS, we can ty changing to a Date data type; however, the SimpleDateFormat data type allows you to modify how date is formatted, which seems like it would be better with the JavaScript Date object in the client, which also allows formatting.

    @NotNull
    private Rating rating;

    @ManyToOne
    @NotNull
    private Symptom symptom;

    public SymptomTracker() {}

    public SymptomTracker(LocalDate date, Rating rating, Symptom symptom) {
        this.date = date;
        this.rating = rating;
        this.symptom = symptom;
    }

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
    public Symptom getSymptom() {
        return symptom;
    }

    public void setSymptom(Symptom symptom) {
        this.symptom = symptom;
    }
}


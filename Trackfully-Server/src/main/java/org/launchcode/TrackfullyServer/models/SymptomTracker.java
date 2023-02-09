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


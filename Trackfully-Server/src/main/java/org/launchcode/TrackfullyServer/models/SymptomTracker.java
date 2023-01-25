package org.launchcode.TrackfullyServer.models;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.Valid;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class SymptomTracker extends AbstractEntity {


    @NotNull
    private Date date;
    //private SimpleDateFormat date = new SimpleDateFormat("MM-dd-yyyy");
    //if this causes issues with chart JS, we can ty changing to a Date data type; however, the SimpleDateFormat data type allows you to modify how date is formatted, which seems like it would be better with the JavaScript Date object in the client, which also allows formatting.

    private Rating rating;

    //I dont think connecting a user is necessary because it's linked to a symptom which is linked to a user
    // so linking user is redundant.
//    @ManyToOne
//    @NotNull
//    @Valid
//    private User user;
//    //private int userId;

    @ManyToOne
    @NotNull
    private Symptom symptom;
    //private int symptomId;


    public SymptomTracker() {}

    public SymptomTracker(Date date, Rating rating, Symptom symptom) {
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    public Symptom getSymptom() {
        return symptom;
    }

    public void setSymptom(Symptom symptom) {
        this.symptom = symptom;
    }
}


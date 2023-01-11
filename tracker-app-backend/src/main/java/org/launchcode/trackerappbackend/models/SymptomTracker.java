package org.launchcode.trackerappbackend.models;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.Valid;
import java.util.Date;
import java.util.Objects;

@Entity
public class SymptomTracker extends AbstractEntity {

    private Rating rating;

    @NotNull
    private Date date = new Date();
    //private SimpleDateFormat date = new SimpleDateFormat("MM-dd-yyyy");
    //if this causes issues with chart JS, we can ty changing to a Date data type; however, the SimpleDateFormat data type allows you to modify how date is formatted, which seems like it would be better with the JavaScript Date object in the client, which also allows formatting.

    @ManyToOne
    @NotNull
    @Valid
    private User user;

    @ManyToOne
    @NotNull
    private Symptom symptom;


    public SymptomTracker() {}

    public SymptomTracker(Rating rating, Date date) {
        this.rating = rating;
        this.date = date;
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

}

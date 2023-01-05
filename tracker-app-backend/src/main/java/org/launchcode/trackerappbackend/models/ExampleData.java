package org.launchcode.trackerappbackend.models;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class ExampleData {

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    private Date date;

    @NotNull
    private int rating;

    public ExampleData () {}

    public ExampleData(Date date, int rating) {
        this.date = date;
        this.rating = rating;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}

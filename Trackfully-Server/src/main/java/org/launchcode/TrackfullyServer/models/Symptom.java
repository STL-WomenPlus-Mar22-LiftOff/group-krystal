package org.launchcode.TrackfullyServer.models;

import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.validation.Valid;

@Entity
public class Symptom extends AbstractEntity {

    @NotNull
    private String symptomName;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @NotNull
    @Valid
    private User user;

    public Symptom(String symptomName, User user) {
        this.symptomName = symptomName;
        this.user = user;
    }

    public Symptom() {}

    public String getSymptomName() {
        return symptomName;
    }

    public void setSymptomName(String symptomName) {
        this.symptomName = symptomName;
    }

    @Override
    public String toString() {
        return symptomName;
    }

    public User getUser() {
        return user;
    }

}

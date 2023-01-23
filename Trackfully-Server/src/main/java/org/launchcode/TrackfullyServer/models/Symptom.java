package org.launchcode.TrackfullyServer.models;

import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.validation.Valid;

@Entity
public class Symptom extends AbstractEntity {

    @NotNull
    private String symptomName;

//    @OneToOne
//    @JoinColumn(name = "user_id")
//    @NotNull
//    @Valid
//    private User user;
    private int userId;

    public Symptom(String symptomName, int userId){
        this.symptomName = symptomName;
        this.userId = userId;
    }

    public Symptom() {}

    public String getSymptomName() {
        return symptomName;
    }

    public void setSymptomName(String symptomName) {
        this.symptomName = symptomName;
    }

    public int getUserId() {
        return userId;
    }

    @Override
    public String toString() {
        return symptomName;
    }
}

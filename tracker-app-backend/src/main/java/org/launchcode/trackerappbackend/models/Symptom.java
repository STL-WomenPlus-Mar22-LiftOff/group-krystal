package org.launchcode.trackerappbackend.models;

import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.validation.Valid;

@Entity
public class Symptom {

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    private String symptomName;

    @OneToOne
    @JoinColumn(name = "user_id")
    @NotNull
    @Valid
    private User user;

    // Will also need to add OneToMany relationship for Symptom to Symptom Tracker in Symptom model)
    @OneToMany
    private List<SymptomTracker> symptomTracker = new ArrayList<>();

    public Symptom(String symptomName){
        this.symptomName = symptomName;
    }

    public Symptom() {}

    public int getId() {
        return id;
    }

    public String getSymptomName() {
        return symptomName;
    }

    public void setSymptomName(String symptomName) {
        this.symptomName = symptomName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Symptom symptom = (Symptom) o;
        return id == symptom.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return symptomName;
    }
}

package org.launchcode.trackerappbackend.models;

import com.sun.istack.NotNull;
import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import java.util.Objects;

@Entity
public class Symptom {

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    private String symptomName;

    public Symptom(int id, String symptomName){
        this.id= id;
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
}

//do i need entity and add relationships
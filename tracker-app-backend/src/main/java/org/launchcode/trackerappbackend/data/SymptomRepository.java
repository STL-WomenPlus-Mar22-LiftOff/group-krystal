package org.launchcode.trackerappbackend.data;

import org.launchcode.trackerappbackend.models.Symptom;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SymptomRepository extends CrudRepository<Symptom,Integer> {
}

package org.launchcode.TrackfullyServer.data;

import org.launchcode.TrackfullyServer.models.Symptom;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SymptomRepository extends CrudRepository<Symptom,Integer> {
}

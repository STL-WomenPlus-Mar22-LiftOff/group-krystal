package org.launchcode.TrackfullyServer.data;

import org.launchcode.TrackfullyServer.models.Symptom;
import org.launchcode.TrackfullyServer.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SymptomRepository extends CrudRepository<Symptom,Integer> {

    //this doesnt work
    // Optional<Symptom> findByUserId (Integer id);


}

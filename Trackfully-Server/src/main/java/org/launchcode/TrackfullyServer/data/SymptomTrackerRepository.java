package org.launchcode.TrackfullyServer.data;

import org.launchcode.TrackfullyServer.models.Symptom;
import org.launchcode.TrackfullyServer.models.SymptomTracker;
import org.launchcode.TrackfullyServer.models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SymptomTrackerRepository extends CrudRepository<SymptomTracker, Integer> {


}

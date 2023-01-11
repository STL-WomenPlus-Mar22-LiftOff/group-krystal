package org.launchcode.trackerappbackend.data;

import org.launchcode.trackerappbackend.models.SymptomTracker;
import org.springframework.data.repository.CrudRepository;

public interface SymptomTrackerRepository extends CrudRepository<SymptomTracker, Integer> {
}

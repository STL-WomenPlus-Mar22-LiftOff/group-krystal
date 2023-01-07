package org.launchcode.trackerappbackend.data;

import org.launchcode.trackerappbackend.models.ExampleData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepository extends CrudRepository <ExampleData, Integer> {
}

package org.launchcode.trackerappbackend;

import org.launchcode.trackerappbackend.data.UserRepository;
import org.launchcode.trackerappbackend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TrackerAppBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrackerAppBackendApplication.class, args);
	}

}

package org.launchcode.TrackfullyServer.service;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

@Service
public class QuotesService {
    @Autowired
    private RestTemplate template = new RestTemplate();
    public Object findQuote() {
        Object[] result = template.getForObject("https://zenquotes.io/api/today",Object[].class);
        return result[0];
    }
}

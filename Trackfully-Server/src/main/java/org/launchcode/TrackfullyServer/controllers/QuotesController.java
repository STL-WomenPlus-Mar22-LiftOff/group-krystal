package org.launchcode.TrackfullyServer.controllers;

import org.launchcode.TrackfullyServer.service.QuotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("quote")
public class QuotesController {

    @Autowired
    private QuotesService quotesService;

    @CrossOrigin(origins = "https://zenquotes.io")

    @GetMapping("get")
    public Object getDailyQuote() {
        return quotesService.findQuote();
    }

}

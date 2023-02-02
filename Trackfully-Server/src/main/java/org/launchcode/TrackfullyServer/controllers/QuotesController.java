package org.launchcode.TrackfullyServer.controllers;

import org.launchcode.TrackfullyServer.models.Quotes;
import org.launchcode.TrackfullyServer.service.QuotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("quote")
public class QuotesController {

    @Autowired
    private QuotesService quotesService;

    @GetMapping("get")
    public Object getDailyQuote() {
        return quotesService.findQuote();
    }

}

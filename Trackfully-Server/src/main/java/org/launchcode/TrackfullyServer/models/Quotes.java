package org.launchcode.TrackfullyServer.models;

public class Quotes {

    private String q;

    private  String a;

    private String h;

    public Quotes(String q, String a, String h) {
        this.q = q;
        this.a = a;
        this.h = h;
    }

    public String getQ() {
        return q;
    }

    public String getA() {
        return a;
    }

    public String getH() {
        return h;
    }
}

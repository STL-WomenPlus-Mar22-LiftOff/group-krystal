package org.launchcode.trackerappbackend.models;

public enum Rating {
    ZERO (0),
    ONE (1),
    TWO (2),
    THREE (3),
    FOUR (4),
    FIVE (5),
    SIX (6),
    SEVEN (7),
    EIGHT (8),
    NINE (9),
    TEN (10);

    private final Integer numericRating;

    private Rating(int numericRating) {
        this.numericRating = numericRating;
    }

    public int getNumericRating() {
        return numericRating;
    }

    @Override
    public String toString() {
        return numericRating.toString();
    }
}

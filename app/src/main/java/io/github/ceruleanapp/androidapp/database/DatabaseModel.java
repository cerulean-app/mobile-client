package io.github.ceruleanapp.androidapp.database;

/**
 * Interface to be implemented by any class
 * that models a database table.
 */
public interface DatabaseModel {
    /**
     * Specify what table this model represents.
     * @return The table name.
     */
    String getTable();

    /**
     * Default getter for the ID column.
     * @return The row ID.
     */
    int getId();
}

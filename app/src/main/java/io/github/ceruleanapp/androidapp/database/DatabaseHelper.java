package io.github.ceruleanapp.androidapp.database;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DatabaseHelper extends SQLiteOpenHelper {
    // Database version. Starts at 1. Increment upon project changes.
    public static final int DATABASE_VERSION = 1;
    // Database file name.
    public static final String DATABASE_NAME = "cerulean-cache.db";

    ///////////////////////////
    //      SQL Queries      //
    ///////////////////////////

    // Table creations.
    // TODO: Add table creation statements.

    // Table deletions.
    // TODO: Add table deletion statements.

    public DatabaseHelper(Context context) {
        // Android deals with the rest.
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        // TODO: Add all database creations here.
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        /*
         * When there's a database version upgrade, we'll clear the database
         * and create it again.
         */

        // Delete all entries.
        // TODO: Run delete statements.
        // Re-create all tables.
        onCreate(db);
    }
}

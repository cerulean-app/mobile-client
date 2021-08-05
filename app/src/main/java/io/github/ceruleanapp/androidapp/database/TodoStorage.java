package io.github.ceruleanapp.androidapp.database;

import android.annotation.SuppressLint;
import android.content.ContentValues;
import android.database.Cursor;

import java.util.ArrayList;
import java.util.List;

public class TodoStorage extends Storage<Todo> {
    public TodoStorage(DatabaseHelper helper) {
        super(helper);
    }

    @Override
    protected List<Todo> iterateResults(Cursor c) {
        List<Todo> toReturn = new ArrayList<>();

        while (c.moveToNext()) {
            @SuppressLint("Range")
            int id = c.getInt(c.getColumnIndex(
                    FeedReaderContract.FeedEntry._ID));
            toReturn.add(new Todo(id));
        }

        c.close();

        return toReturn;
    }

    @Override
    protected ContentValues getValuesFromModel(Todo landmark) {
        // Create a ContentValues associative array.
        ContentValues values = new ContentValues();
        // Adapt the instance into this associative array.
        // TODO: Figure out columns.

        // Allow the parent class to do the rest.
        return values;
    }

    @Override
    protected String[] getColumns() {
        return new String[]{
                FeedReaderContract.FeedEntry._ID
                // TODO: Figure out other columns.
        };
    }

    @Override
    protected String getResponsibleTable() {
        return FeedReaderContract.FeedEntry.TODO_TABLE;
    }
}

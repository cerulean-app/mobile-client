package io.github.ceruleanapp.androidapp.database;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import java.util.List;

/**
 * Class responsible for the generalization of SQL queries into
 * a simple API.
 *
 * TODO: Implement memory cache.
 *       Don't #retrieveAll() just to find an item by its index.
 */
public abstract class Storage<T extends DatabaseModel> {
    private final DatabaseHelper helper;

    public Storage(DatabaseHelper helper) {
        this.helper = helper;
    }

    /**
     * Retrieve all rows.
     *
     * @return A list of rows, in the model's designated type.
     */
    public List<T> retrieveAll() {
        // Let's get a readable database, since we're reading.
        SQLiteDatabase db = helper.getReadableDatabase();
        // Inherited class will provide the columns we want to focus on.
        String[] projection = getColumns();
        // Construct a query.
        Cursor cursor = db.query(
                getResponsibleTable(), // Table name, provided by the inherited class.
                projection, // Columns to focus on.
                null, // No need for a WHERE clause.
                null, // No arguments needed.
                null, // No GROUP BY clause.
                null, // No HAVING clause.
                null // Result order may be default.
        );

        // The inherited class will iterate the results for us.
        List<T> items = iterateResults(cursor);

        // Close the cursor.
        cursor.close();

        return items;
    }

    /**
     * Retrieve a specific row through its ID.
     *
     * @param id The ID of the row.
     * @return The row or null if it doesn't exist.
     */
    public T retrieveById(int id) {
        // Let's get a readable database, since we're reading.
        SQLiteDatabase db = helper.getReadableDatabase();
        // Inherited class will provide the columns we want to focus on.
        String[] projection = getColumns();
        // WHERE clause.
        String selection = FeedReaderContract.FeedEntry._ID + " = ?";
        // WHERE clause arguments.
        String[] selectionArgs = {String.valueOf(id)};
        // Construct a query.
        Cursor cursor = db.query(
                getResponsibleTable(), // Table name, provided by the inherited class.
                projection, // Columns to focus on.
                selection, // Filter by ID.
                selectionArgs, // Replace '?' by the `id` argument from this method.
                null, // No GROUP BY clause.
                null, // No HAVING clause.
                null // Result order doesn't matter.
        );

        // The inherited class will iterate the results for us.
        List<T> items = iterateResults(cursor);

        // Close the cursor.
        cursor.close();

        // Return null if the result list is empty.
        return items.isEmpty() ? null : items.get(0);
    }

    /**
     * Insert a row.
     *
     * @param t The instance of the model to insert. ID is usually ignored.
     */
    public void put(T t) {
        // We're getting a writable database now, as we're writing.
        SQLiteDatabase db = helper.getWritableDatabase();
        // Now get the content values from the inherited class which will adapt data.
        ContentValues values = getValuesFromModel(t);
        // Insert into the database.
        db.insert(getResponsibleTable(), null, values);
    }

    /**
     * Delete a specific row.
     *
     * @param id The ID of the row.
     */
    public void delete(int id) {
        // We're getting a writable database now, as we're writing.
        SQLiteDatabase db = helper.getWritableDatabase();
        // Delete by ID.
        db.delete(
                getResponsibleTable(),
                "_id = ?",
                new String[]{String.valueOf(id)}
        );
    }

    /**
     * WARNING: Dangerous.
     *
     * Delete ALL entries of the database. There are nearly no use cases
     * for this, so proceed with caution.
     */
    public void clear() {
        // We're getting a writable database now, as we're writing.
        SQLiteDatabase db = helper.getWritableDatabase();
        // Delete without a WHERE clause.
        db.delete(
                getResponsibleTable(),
                null,
                null
        );
    }

    /**
     * Update a specific row.
     *
     * @param newValues The instance of the model to update. ID IS REQUIRED.
     * @throws IllegalArgumentException When the ID of the model isn't greater or equal than 0.
     */
    public void update(T newValues) {
        if (newValues.getId() < 0) throw new IllegalArgumentException("ID is required.");

        // We're getting a writable database now, as we're writing.
        SQLiteDatabase db = helper.getWritableDatabase();
        // Update in the database.
        db.update(
                getResponsibleTable(),
                getValuesFromModel(newValues),
                "_id = ?",
                new String[]{String.valueOf(newValues.getId())}
        );
    }

    /**
     * Retrieve the row by its index on the list.
     *
     * @param i The index on the list.
     * @return The row or null if it doesn't exist.
     */
    public T retrieveByIndex(int i) {
        // TODO: Don't retrieve directly from DB or find another way to do this.
        // Retrieve all.
        List<T> retrieved = retrieveAll();
        // Avoid IndexOutOfBounds.
        if (retrieved.size() - 1 < i) return null;

        // Return it.
        return retrieved.get(i);
    }

    protected DatabaseHelper getHelper() {
        return helper;
    }

    protected abstract List<T> iterateResults(Cursor cursor);

    protected abstract ContentValues getValuesFromModel(T t);

    protected abstract String[] getColumns();

    protected abstract String getResponsibleTable();
}
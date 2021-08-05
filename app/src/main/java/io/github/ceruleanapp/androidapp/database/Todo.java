package io.github.ceruleanapp.androidapp.database;

public class Todo implements DatabaseModel {
    private final int id;

    public Todo(int id) {
        this.id = id;
    }

    @Override
    public String getTable() {
        return FeedReaderContract.FeedEntry.TODO_TABLE;
    }

    @Override
    public int getId() {
        return id;
    }
}

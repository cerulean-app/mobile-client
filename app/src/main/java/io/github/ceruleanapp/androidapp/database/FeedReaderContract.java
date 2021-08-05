package io.github.ceruleanapp.androidapp.database;

import android.provider.BaseColumns;

public final class FeedReaderContract {
    /*
     * Everything here is static. Constructor
     * shouldn't be called.
     */
    private FeedReaderContract() {}

    // Static class that contains all column names in constants, along default ones.
    public static class FeedEntry implements BaseColumns {
        // No need to call this constructor.
        private FeedEntry() {}

        public static final String TODO_TABLE = "todo";
        // TODO: todo rows.
    }
}

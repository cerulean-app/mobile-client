package io.github.ceruleanapp.androidapp.database;

import android.content.Context;

import java.util.HashMap;
import java.util.Map;

public class AppDatabase {
    private static AppDatabase instance;
    private DatabaseHelper helper;
    private final Map<String, Storage<? extends DatabaseModel>> storages;

    // Singleton.
    private AppDatabase() {
        storages = new HashMap<>();
    }

    private void init() {
        // TODO: Populate the map. Use StorageType for keys.
    }

    /**
     * Get database instance.
     *
     * @param context Current app context.
     * @return Database instance.
     */
    public static AppDatabase getInstance(Context context) {
        if (instance == null) return initDatabase(context);
        return instance;
    }

    // Initialize database (called once).
    private static AppDatabase initDatabase(Context context) {
        instance = new AppDatabase();
        // Initialize database helper.
        instance.helper = new DatabaseHelper(context);
        // Initialize everything else.
        instance.init();

        return instance;
    }

    // Get storage by name.
    public <T extends DatabaseModel> Storage<T> getStorageByName(String name, Class<T> clazz) {
        // noinspection unchecked
        return (Storage<T>) storages.get(name);
    }
}

package io.github.ceruleanapp.androidapp.database;

import androidx.annotation.NonNull;

/**
 * Enum that represents a storage type.
 * Used as keys on AppDatabase's storage
 * map.
 */
public enum StorageType {
    TODO("Todo"); // TODO: Add all storage types.

    private final String type;

    StorageType(String type) {
        this.type = type;
    }

    @NonNull
    @Override
    public String toString() {
        return type;
    }
}

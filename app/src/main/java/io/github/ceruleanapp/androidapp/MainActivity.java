package io.github.ceruleanapp.androidapp;

import android.app.Activity;
import android.os.Bundle;

/**
 * MainActivity will be the activity where the RecyclerView
 * is located.
 * This RecyclerView lists all TODOs.
 * These may be filtered.
 */
public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
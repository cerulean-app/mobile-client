package io.github.ceruleanapp.androidapp.recyclerview;

import android.app.Activity;
import android.os.Bundle;

import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import io.github.ceruleanapp.androidapp.R;

/**
 * Activity that includes a RecyclerView.
 */
public abstract class RecyclerActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(getLayout());
        onPostCreate();
    }

    /**
     * Call once data is ready.
     * This may be done in onCreate, or inside a callback
     * if your data is loaded async. Both ways are fine.
     */
    protected void updateData() {
        RecyclerView recycler = (RecyclerView) findViewById(R.id.recycler);
        recycler.setLayoutManager(new LinearLayoutManager(this));
        recycler.setAdapter(getAdapter());
        getAdapter().notifyDataSetChanged();
    }

    // The adapter for this specific RecyclerView.
    public abstract RecyclerAdapter getAdapter();

    // The layout ID to render.
    public abstract int getLayout();

    // Optional callback.
    protected void onPostCreate() {}
}

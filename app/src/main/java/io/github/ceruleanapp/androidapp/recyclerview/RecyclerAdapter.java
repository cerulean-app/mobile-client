package io.github.ceruleanapp.androidapp.recyclerview;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

public abstract class RecyclerAdapter extends RecyclerView.Adapter<RecyclerViewHolder> {
    @NonNull
    @Override
    public RecyclerViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        // Inflate the layout into a view.
        View v = LayoutInflater.from(parent.getContext()).inflate(getItemLayout(), parent, false);
        // Return the view holder instance, created with the view.
        return getViewHolder(v);
    }

    // Return varying item layout ID. For example, R.layout.item.
    public abstract int getItemLayout();

    // Return the matching view holder for this recycler view, inheriting from RecyclerViewHolder.
    public abstract RecyclerViewHolder getViewHolder(View view);
}

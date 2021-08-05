package io.github.ceruleanapp.androidapp.recyclerview;

import android.view.View;

import androidx.recyclerview.widget.RecyclerView;

/*
 * Generalization abstract class to generalize return types on methods
 * in other classes related to RecyclerViews.
 */
public abstract class RecyclerViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

    public RecyclerViewHolder(View itemView) {
        super(itemView);
        itemView.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        onItemClick(v, getLayoutPosition());
    }

    public abstract void onItemClick(View view, int position);
}

package io.github.ceruleanapp.androidapp.bridge;

import android.content.Context;

import com.android.volley.Response;
import com.android.volley.VolleyError;

import org.json.JSONObject;

import io.github.ceruleanapp.androidapp.R;

/**
 * -- Endpoints --
 * POST /login
 * POST /logout
 * GET /api/todos
 * POST /api/todo
 * PATCH /api/todo
 * DELETE /api/todo
 */
public class BackendBridge implements Response.ErrorListener, Response.Listener<JSONObject> {
    private final String backendUri;

    public BackendBridge(Context context) {
        backendUri = context.getString(R.string.backendUri);
    }

    public void postLogin() {
    }

    public void postLogout() {
    }

    public void getTodos() {
    }

    public void patchTodo() {
    }

    public void deleteTodo() {
    }

    @Override
    public void onErrorResponse(VolleyError error) {

    }

    @Override
    public void onResponse(JSONObject response) {

    }

    public String getBackendUri() {
        return backendUri;
    }
}

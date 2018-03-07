package com.example.tweetee;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.view.View.OnClickListener;
public class MainActivity extends AppCompatActivity implements OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button cam = findViewById(R.id.camera);

        cam.setOnClickListener(this);
    }
    @Override
    public void onClick(View v) {
        startActivity(new Intent(MainActivity.this, CameraView.class));
    }

    }



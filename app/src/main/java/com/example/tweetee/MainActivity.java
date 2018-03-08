package com.example.tweetee;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.view.View.OnClickListener;
import android.app.Activity;
import android.net.Uri;
import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.view.Menu;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements OnClickListener{




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        EditText txtView = (EditText) findViewById(R.id.txt);
        Intent receivedIntent = getIntent();
        String receivedAction = receivedIntent.getAction();
        String receivedType = receivedIntent.getType();

        if(receivedAction.equals(Intent.ACTION_SEND)){
            String receivedText = receivedIntent.getStringExtra(Intent.EXTRA_TEXT);
            if (receivedText != null) {
                txtView.setText(receivedText.substring(receivedText.lastIndexOf("https")));
            }
        }else if(receivedAction.equals(Intent.ACTION_MAIN)) {

        }

        Button cam = findViewById(R.id.camera);

        cam.setOnClickListener(this);
    }
    @Override
    public void onClick(View v) {
        startActivity(new Intent(MainActivity.this, CameraView.class));
    }


}



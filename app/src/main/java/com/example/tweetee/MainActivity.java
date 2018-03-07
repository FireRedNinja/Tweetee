package com.example.tweetee;

import android.app.Activity;
import android.os.Bundle;
import android.net.Uri;
import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;
import android.support.v7.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

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

        }


}



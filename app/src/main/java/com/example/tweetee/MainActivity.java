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


import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

import java.io.IOException;

public class MainActivity extends AppCompatActivity {

    EditText txtView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        txtView = (EditText) findViewById(R.id.txt);
        Intent receivedIntent = getIntent();
        String receivedAction = receivedIntent.getAction();
        String receivedType = receivedIntent.getType();

        if(receivedAction.equals(Intent.ACTION_SEND)){
            String receivedText = receivedIntent.getStringExtra(Intent.EXTRA_TEXT);
            if (receivedText != null) {
                getsite(receivedText);
            }
        }else if(receivedAction.equals(Intent.ACTION_MAIN)) {

        }



        }


        public void getsite(String receivedText){
            Ion.with(getApplicationContext())
                .load(receivedText.substring(receivedText.lastIndexOf("https")))
                    .asString()
                    .setCallback(new FutureCallback<String>() {
                        @Override
                        public void onCompleted(Exception e, String result) {
                            txtView.setText(result.substring(result.indexOf("<div class=\"dir-ltr\" dir=\"ltr\">")+33).split("<")[0]);
                        }
                    });

        }


}



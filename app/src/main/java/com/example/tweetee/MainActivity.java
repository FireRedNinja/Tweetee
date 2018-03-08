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

    //declare text view
    EditText txtView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //get text view
        txtView = (EditText) findViewById(R.id.txt);
        //set up share intent
        Intent receivedIntent = getIntent();
        String receivedAction = receivedIntent.getAction();
        //only used if sharing images too - might need in future
        //String receivedType = receivedIntent.getType();

        //if app has been opened via share, get the text shared and run the html crawler function
        if(receivedAction.equals(Intent.ACTION_SEND)){
            String receivedText = receivedIntent.getStringExtra(Intent.EXTRA_TEXT);
            if (receivedText != null) {
                getsite(receivedText);
            }
        //else, app has been opened "normally" - use normal functionality
        }else if(receivedAction.equals(Intent.ACTION_MAIN)) {

        }



    }


    public void getsite(String receivedText){
        //crawl the given link
        Ion.with(getApplicationContext())
            //load the link shared via twitter
            .load(receivedText.substring(receivedText.lastIndexOf("https")))
            //output as string
            .asString()
            //get result
            .setCallback(new FutureCallback<String>() {
                @Override
                public void onCompleted(Exception e, String result) {
                    //get the tweet out of the string and set text view to have it
                    txtView.setText(result.substring(result.indexOf("<div class=\"dir-ltr\" dir=\"ltr\">")+33).split("<")[0]);
                }
            });

    }


}



package com.example.tweetee;

import android.app.Activity;
import android.os.AsyncTask;
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
import android.os.Handler;


import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

import com.google.cloud.translate.Translate;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;


import java.io.IOException;

public class MainActivity extends AppCompatActivity {

    private static final String API_KEY = "AIzaSyBWCibzBHFCDP9pQUH-vQ9V3OIRmeYIwWM";


    //declare text view
    EditText txtView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        String output = "";

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


    public void translate(View view) {
        final Handler textViewHandler = new Handler();
        txtView = (EditText) findViewById(R.id.txt);

        new AsyncTask<Void, Void, Void>() {
            @Override
            protected Void doInBackground(Void... params) {
                TranslateOptions options = TranslateOptions.newBuilder()
                        .setApiKey(API_KEY)
                        .build();
                Translate translate = options.getService();
                final Translation translation =
                        translate.translate(txtView.getText().toString(),
                                Translate.TranslateOption.targetLanguage("en"));
                textViewHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (txtView != null) {
                            txtView.setText(translation.getTranslatedText()
                                    .replace("&amp;","&")
                                    .replace("&lt;","<")
                                    .replace("&quot;","\"")
                                    .replace("&#39;", "'"));
                        }
                    }
                });
                return null;
            }
        }.execute();
    }


}



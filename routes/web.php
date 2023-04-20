<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $page = [
        "namespace" => "home",
        "title" => "Jason Dieter Oesch x James Arthemeus Finnigan",
        "show-appname" => false,
        "description" => "Hi 👋 My name is Jason. I’m your photo and video guy based in Lausanne & Zürich."
    ];
    return view('home', compact('page'));
});

Route::get('/work', function () {
    $page = [
        "namespace" => "content",
        "title" => "My Work.",
        "show-appname" => true,
        "description" => "I have been a photographer and videographer for a number of years and have had the privilege of co-founding the marketing and media collective, K., based in Zurich."
    ];
    return view('content.work', compact('page'));
});

Route::get('/life', function () {
    $page = [
        "namespace" => "content",
        "title" => "My Life.",
        "show-appname" => true,
        "description" => "Photography has always held a special place in my heart. Ever since I was young, I have been captivated by the art of capturing moments and memories through the lens of a camera."
    ];
    return view('content.life', compact('page'));
});


if ($_ENV["APP_ENV"] === "local") {
    Route::get('/test-contactform', function () {
        $page = [
            "namespace" => "home",
            "title" => "Test contactform.",
            "show-appname" => true,
            "description" => "Testing contactform"
        ];
        return view('test.contactform', compact('page'));
    });

    Route::get('/test-contactform/mail', function () {
        return view('mail.contact', [
            'name' => "[FNAME]" . " " . "[LNAME]",
            'email' => "[EMAIL]",
            'message' => "[MESSAGE]"
        ]);
    });
}

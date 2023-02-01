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
        "title" => "Jason Diete Oesch x James Arthemeus Finnigan",
        "show-appname" => false,
        "description" => "Hi 👋 My name is Jason. I’m your photo and video guy based in Lausanne & Zürich."
    ];
    return view('home', compact('page'));
});

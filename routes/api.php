<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
Use App\Mail\ContactMail;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post("contact", function(Request $request){
    try {
        Mail::to($request->email)
            ->cc(env('MAIL_FROM_ADDRESS'))
            ->send(new ContactMail($request->all()));
            return response()->json([
                "success" => true,
            ], 200);

    } catch (\Exception $e) {
        return response()->json([
            "status" => "error",
            'message' => 'Something went wrong. Please try again later.',
            "errors" => $e->getMessage()
        ], 500);
    }
});

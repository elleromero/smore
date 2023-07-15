<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia('Home');
});
Route::get('/signin', function() {
    return Inertia('SignIn');
});
Route::get('/register', function() {
    return Inertia('Register');
});
Route::get('/dashboard', function() {
    return Inertia('Dashboard');
});

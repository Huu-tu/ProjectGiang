<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/sidebar', function () {
    return view('sidebar');
});

Route::get('/products' ,[
    ProductController::class,
    'index'
]);

Route::get('/product' ,[
    ProductController::class,
    'searchProduct'
]);

Route::get('/product/{id}',[
    ProductController::class,
    'detailProduct'
]);

Route::post('/products/post',[
    ProductController::class,
    'storeProduct'
]);


Route::put('/products/post/{id}',[
    ProductController::class,
    'editProduct'
]);

Route::delete('/products/post/{id}',[
    ProductController::class,
    'deleteProduct'
]);


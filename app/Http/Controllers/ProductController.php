<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Console\Scheduling\Schedule;

class ProductController extends Controller
{
    public function index() {
        $result = Product::all();
        return $result;
    }

    public function searchProduct(Request $request){
        $result = Product::where('title', 'LIKE','%'.$request->keyword.'%')->get();
        return response()->json($result); 
    }
    
    public function detailProduct($id){
        $result = Product::where('id', $id)->get();
        return $result;
    }
        
    public function createProduct(){
        return view('products.createProduct');
    }
        
    public function storeProduct(){
        request() ->validate([
                    'title' => 'required',
                    'description' => 'required',
                ]);
        
                $result = Product::create([
                    'title' => request('title'),
                    'description' => request('description')
                ]);
        
                return response()->json("{$result}");
            }
        
    public function updateProduct(Product $product){
                return view('products.updateProduct', ['product' =>$product]);
            }
        
            public function editProduct(Request $request, $id){
                $result = Product::find($id);
                $result->update($request->all());
                return $result;
            }
        
            public function deleteProduct($id){
                // $product->delete();
        
               $product = Product::find($id)->delete();
               return "Thanh cong";
    }        
}

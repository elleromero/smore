<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(RegisterRequest $req) {
        $val_req = $req->safe();
        $user = new User();

        $user->name = $val_req->name;
        $user->birthdate = $val_req->birthdate;
        $user->username = $val_req->username;
        $user->email = $val_req->email;
        $user->password = $val_req->password;
        $user->profile_picture = 'C://Unknown';

        if ($user->save()) {
            return redirect()->intended('/signin')->with('msg', 'Please login');
        }
        
        return back()->withErrors(["default" => "Something went wrong. Try again."]);
    }

    public function sign_in(Request $req) {
        if (Auth::attempt(["email" => $req->email, "password" => $req->password])) {
            $req->session()->regenerate();

            return redirect()->intended('/dashboard')->with("msg", "Logged in as" . Auth::user()->email);
        }

        return back()->withErrors(["default" => "Something went wrong. Try again."]);
    }

    public function sign_out() {}
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;

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
            return redirect('/dashboard');
        }

        return response('Something went wrong', 500);
    }

    public function sign_in() {}

    public function sign_out() {}
}

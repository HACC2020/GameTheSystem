<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Grosv\LaravelPasswordlessLogin\LoginUrl;
use App\Mail\Passwordless;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class Login extends Controller
{
    public function login(Request $request) {
        $user = User::where('email', $request->email)->first();

        if ($user) {
            $generator = new LoginUrl($user);

            $generator->setRedirectUrl('http://localhost:3000/key?token=' . $user->api_token); // Override the default url to redirect to after login
            $url = $generator->generate();
    
            // Send $url in an email or text message to your user
            Mail::to($user)->send(new Passwordless($url));

            return 'logged in';
        } else {
            User::create([
                'firstName' => $request->firstName,
                'lastName' => $request->lastName,
                'email' => $request->email,
                'api_token' => Str::random(60),
            ]);

            return 'created';
        }
    }

    public function logout(Request $request) {
        $user = User::where('email', $request->email)->first();

        if ($user) {
            $token = Str::random(60);
    
            $user->forceFill([
                'api_token' => hash('sha256', $token),
            ])->save();
        }
    }

    public function user(Request $request) {
        $user = User::where('api_token', $request->api_token)->first();

        $data = array(
            'firstName' => $user->firstName,
            'lastName' => $user->lastName,
            'email' => $user->email
        );

        return response()->json(json_encode($data));
    }
}

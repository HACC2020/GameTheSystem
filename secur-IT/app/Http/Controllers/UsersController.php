<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class UsersController extends Controller
{
    public function getUserAppointments($id){
        $data = DB::select('EXEC [dbo].[View_UserAppointments_Proc] :id', [':id' => $id]);
        return response()->json($data);
    }

    public function getLatestAppointments(){
        $data = DB::select('EXEC ComboBox_AvailableSecurityLevels_Proc');
        dump($data);
    }    

    public function postNewStaff(Request $request){
        $data = DB::select(DB::raw(
            'EXEC [dbo].[Create_User_Proc] :email, :firstname, :lastname, :securityLevel'), 
            [$request->email, $request->firstName, $request->lastName, 3]
        );
        return response()->json($data);
    }    

    public function postNewGuest(Request $request){
        $data = DB::select(DB::raw(
            'EXEC [dbo].[Create_User_Proc] :email, :firstname, :lastname, :securityLevel'), 
            [$request->email, $request->firstName, $request->lastName, 1]
        );
        return response()->json($data);
    }    
}

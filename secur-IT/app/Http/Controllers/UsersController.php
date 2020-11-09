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
}

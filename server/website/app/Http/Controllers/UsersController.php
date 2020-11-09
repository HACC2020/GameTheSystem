<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class UsersController extends Controller
{
    public function getAllAppointments($id, $id2){
        $data = DB::select('EXEC ComboBox_AvailableSecurityLevels_Proc :id, :id2',
            [
                ':id' => $id,
                ':id2' => $id2,

            ]
        );

        return response()->json($data);
    }

    public function getLatestAppointments(){
        $data = DB::select('EXEC ComboBox_AvailableSecurityLevels_Proc');
        dump($data);
    }    
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class TestController extends Controller
{
    public function getTestInfo(){
        $data = DB::select('EXEC ComboBox_AvailableSecurityLevels_Proc');
        dump($data);
    }
}

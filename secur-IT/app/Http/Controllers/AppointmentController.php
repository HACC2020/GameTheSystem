<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class AppointmentController extends Controller
{
    public function getTodayAppointments(){
        $data = DB::select('EXEC [dbo].[View_AppointmentsTodayNotCheckedIn_Proc]');
        return response()->json($data);
    }

    public function getCheckedAppointments(){
        $data = DB::select('EXEC [dbo].[View_AppointmentsCheckedIn_Proc]');
        return response()->json($data);
    }    

    

    public function getUpComingAppointments(){
        $data = DB::select('EXEC [dbo].[View_AppointmentsUpcoming_Proc]');
        return response()->json($data);
    }  
    
    public function getFormCreateAppointments(){
        return view('createAppointment');
    }

    public function postCreateAppointments(Request $request){

        $values = [
            $request->SponsoringUserID,
            $request->StartDateTime,
            $request->EndDateTime,
            $request->Purpose,
            $request->AppointmentRoomNumber,
            $request->GuestIDs
        ];

        $values = json_encode($values);

        // $data = DB::select('EXEC [dbo].[Create_Appointment_Proc] ?', [$values]);
        
        echo $values;
    }        
}

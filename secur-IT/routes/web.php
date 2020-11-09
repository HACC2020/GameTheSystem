<?php

use App\Http\Controllers\TestController;

use App\Http\Controllers\UsersController;
use App\Http\Controllers\AppointmentController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', [TestController::class, 'getTestInfo']);

// For Users
Route::get('user/{id}/appointments', [UsersController::class, 'getUserAppointments']);
Route::get('user/{id}/latest', [UsersController::class, 'getLatestAppointments']);

// Appointments
Route::get('appointments/checked', [AppointmentController::class, 'getCheckedAppointments']);
Route::get('appointments/today', [AppointmentController::class, 'getTodayAppointments']);
Route::get('appointments/upcoming', [AppointmentController::class, 'getUpComingAppointments']);
Route::get('appointments/form/create', [AppointmentController::class, 'getFormCreateAppointments']);
Route::post('appointments/create', [AppointmentController::class, 'postCreateAppointments']);

// POST /checkin/<APPT>/<ID>: [dbo].[Update_AppointmentCheckIn_Proc] (@AppointmentID, @GuestID)
// POST /checkout/<APPT>/<ID>: [dbo].[Update_AppointmentCheckOut_Proc] (@AppointmentID, @GuestID)

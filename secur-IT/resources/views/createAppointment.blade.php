<!DOCTYPE html>
<html>
<head>
    <title> Create Appointment </title>
    <style type="text.css">
        body{
            width: 500px;
            font-size: 20px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
        <h1>Create Appointment</h1>
        <br>
        <form action="{{ url('appointments/create')}}" method="POST">
            {{ csrf_field() }}
            <input type="text" name="SponsoringUserID"><br>
            <input type="date" name="StartDateTime"><br>
            <input type="date" name="EndDateTime"><br>
            <input type="text" name="Purpose"><br>
            <input type="text" name="AppointmentRoomNumber"><br>
            <input type="text" name="GuestIDs"><br>
            <input type="submit" value="Save">
        </form>

        <h1>Update postUpdateCheckIn</h1>
        <br>
        <form action="{{ url('checkin')}}" method="POST">
            {{ csrf_field() }}
            <input type="text" name="AppointmentID"><br>
            <input type="text" name="GuestIDs"><br>
            <input type="submit" value="Save">
        </form>      

        <h1>Update postUpdateCheckOut</h1>
        <br>
        <form action="{{ url('checkout')}}" method="POST">
            {{ csrf_field() }}
            <input type="text" name="AppointmentID"><br>
            <input type="text" name="GuestIDs"><br>
            <input type="submit" value="Save">
        </form>            
</body>
</html>
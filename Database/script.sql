USE [haccDB]
GO
/****** Object:  User [WebInterfaceUser]    Script Date: 11/17/2020 8:31:39 PM ******/
CREATE USER [WebInterfaceUser] FOR LOGIN [WebInterfaceUser] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[AppointmentTbl]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppointmentTbl](
	[AppointmentID] [int] IDENTITY(1,1) NOT NULL,
	[SponsoringUserID] [int] NOT NULL,
	[AppointmentStartDateTime] [datetime] NULL,
	[AppointmentEndDateTime] [datetime] NULL,
	[AppointmentPurpose] [varchar](500) NULL,
	[appointmentRoomNumber] [varchar](50) NULL,
 CONSTRAINT [PK_AppointmentTbl] PRIMARY KEY CLUSTERED 
(
	[AppointmentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AppointmentUserTbl]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppointmentUserTbl](
	[AppointmentID] [int] NOT NULL,
	[AppointmentGuestID] [int] NOT NULL,
	[is_CheckedIn] [bit] NOT NULL,
	[CheckInDateTime] [datetime] NULL,
 CONSTRAINT [PK_AppointmentUsersTbl] PRIMARY KEY CLUSTERED 
(
	[AppointmentID] ASC,
	[AppointmentGuestID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[failed_jobs]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[failed_jobs](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[uuid] [nvarchar](255) NOT NULL,
	[connection] [nvarchar](max) NOT NULL,
	[queue] [nvarchar](max) NOT NULL,
	[payload] [nvarchar](max) NOT NULL,
	[exception] [nvarchar](max) NOT NULL,
	[failed_at] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[migrations]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[migrations](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[migration] [nvarchar](255) NOT NULL,
	[batch] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[firstName] [varchar](255) NULL,
	[lastName] [varchar](255) NULL,
	[email] [nvarchar](255) NOT NULL,
	[email_verified_at] [datetime] NULL,
	[securityLevelID] [int] NOT NULL,
	[api_token] [nvarchar](80) NULL,
	[created_at] [datetime] NULL,
	[updated_at] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AppointmentUserTbl] ADD  DEFAULT ((0)) FOR [is_CheckedIn]
GO
ALTER TABLE [dbo].[failed_jobs] ADD  DEFAULT (getdate()) FOR [failed_at]
GO
ALTER TABLE [dbo].[users] ADD  DEFAULT ('1') FOR [securityLevelID]
GO
/****** Object:  StoredProcedure [dbo].[ComboBox_AvailableSecurityLevels_Proc]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Keenan Lee
-- Create date: 8 November 2020
-- Description:	Test Proc
-- =============================================
CREATE PROCEDURE [dbo].[ComboBox_AvailableSecurityLevels_Proc]
	@test int ,
	@test2 int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT @test As test, @test2 as test2
END
GO
/****** Object:  StoredProcedure [dbo].[Create_Appointment_Proc]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Keenan Lee
-- Create date: 8 November 2020
-- Description:	Create an appointment
-- =============================================
CREATE PROCEDURE [dbo].[Create_Appointment_Proc]
	-- {
	--	"sponsoringUserID": <INT>,
	--	"startDateTime": <DateTime>,
	--	"endDateTime": <DateTime>,
	--	"purpose": <STR>,
	--	"appointmentRoomNumber": <STR>,
	--	"guestEmails": []
	-- }
	@AppointmentInfo NVARCHAR(MAX)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	----------------------------------
	-- Variable Declarations
	----------------------------------

	DECLARE @ErrorMsg VARCHAR(150)
	DECLARE @AppointmentID INT


	----------------------------------
	-- Parse JSON
	----------------------------------

	CREATE TABLE #TempAppointmentInfo (
		[SponsoringUserID] INT
       ,[AppointmentStartDateTime] DATETIME
       ,[AppointmentEndDateTime] DATETIME
       ,[AppointmentPurpose] VARCHAR(500)
       ,[AppointmentRoomNumber] VARCHAR(10)
	   ,GuestEmails NVARCHAR(MAX)
	)

	CREATE TABLE #TempGuestInfo (
		GuestEmail VARCHAR(255),
		GuestID INT
	)

	INSERT INTO #TempAppointmentInfo (
		[SponsoringUserID]
       ,[AppointmentStartDateTime]
       ,[AppointmentEndDateTime]
       ,[AppointmentPurpose]
       ,[AppointmentRoomNumber]
	   ,GuestEmails
	)
	SELECT *
	FROM OPENJSON(@AppointmentInfo)
	WITH (
		[sponsoringUserID] INT
       ,[AppointmentStartDateTime] DATETIME '$.startDateTime'
       ,[AppointmentEndDateTime] DATETIME '$.endDateTime'
       ,[AppointmentPurpose] VARCHAR(500) '$.purpose'
       ,[appointmentRoomNumber] VARCHAR(10)
	   ,guestEmails NVARCHAR(MAX) AS JSON
	)

	INSERT INTO #TempGuestInfo (
		GuestEmail,
		GuestID
	)
	SELECT B.GuestEmails, id
	FROM (SELECT GuestEmails FROM #TempAppointmentInfo) A
	----------------------------------
	OUTER APPLY OPENJSON(guestEmails)
		WITH (guestEmails VARCHAR(255) '$') B
	----------------------------------
	INNER JOIN dbo.users C ON
	----------------------------------
	B.GuestEmails = C.email

	----------------------------------
	-- Error Checks
	----------------------------------

	IF NOT EXISTS (
		SELECT id 
		FROM dbo.users
		-------------------------------
		INNER JOIN #TempAppointmentInfo ON
		-------------------------------
			SponsoringUserID = id
		-------------------------------
		WHERE securityLevelID <> 1
	)
	BEGIN
		SET @ErrorMsg = 'User does not have permissions to create appointments'
		GOTO ErrorCode
	END


	----------------------------------
	-- Create appointment
	----------------------------------

	INSERT INTO dbo.AppointmentTbl (
		[SponsoringUserID]
      ,[AppointmentStartDateTime]
      ,[AppointmentEndDateTime]
      ,[AppointmentRoomNumber]
      ,[AppointmentPurpose]
	)
	SELECT 
		SponsoringUserID,
		AppointmentStartDateTime,
		AppointmentEndDateTime,
		AppointmentRoomNumber,
		AppointmentPurpose
	FROM #TempAppointmentInfo

	SET @AppointmentID = SCOPE_IDENTITY()


	INSERT INTO dbo.AppointmentUserTbl (
		AppointmentID,
		AppointmentGuestID
	)
	SELECT 
		@AppointmentID,
		GuestID
	FROM #TempGuestInfo


	----------------------------------
	-- Exit
	----------------------------------
	ExitCode:
		SELECT 1 AS [Status], '' AS ErrorMsg
		RETURN

	ErrorCode:
		SELECT 0 AS [Status], @ErrorMsg AS ErrorMsg

END
GO
/****** Object:  StoredProcedure [dbo].[Create_User_Proc]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Create_User_Proc] 
	@email varchar(255),
	@firstname varchar(255),
	@lastname varchar(255),
	@securityLevel INT = 1

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DECLARE @ErrorMsg VARCHAR(150)

    IF EXISTS (SELECT email FROM dbo.users WHERE email = @email)
	BEGIN
		SET @ErrorMsg = 'User already exists'
		GOTO ErrorCode
	END

	INSERT INTO dbo.users (
		[FirstName]
       ,[LastName]
       ,[email]
	   ,is_active
	   ,securityLevelID
	)
	VALUES (
	@firstname,
	@lastname,
	@email,
	1,
	@securityLevel
	)


	ExitCode:
		SELECT 1 AS [Status], '' AS ErrorMsg
		RETURN

	ErrorCode:
		SELECT 0 AS [Status], @ErrorMsg AS ErrorMsg
		RETURN
END
GO
/****** Object:  StoredProcedure [dbo].[Update_AppointmentCheckIn_Proc]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:	Keenan Lee	
-- Create date: 8 November 2020
-- Description:	Check user in
-- =============================================
CREATE PROCEDURE [dbo].[Update_AppointmentCheckIn_Proc]
	@GuestID INT,
	@AppointmentID INT = NULL
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -----------------------------------------
	-- Variable Declarations
	-----------------------------------------

	DECLARE @ErrorMsg VARCHAR(150)


	-----------------------------------------
	-- Get most recent
	-----------------------------------------

	SET @AppointmentID = (
		SELECT TOP 1
			A.AppointmentID 
		FROM AppointmentUserTbl A
		-------------------------------------------
		INNER JOIN AppointmentTbl B ON
		-------------------------------------------
		A.AppointmentID = B.AppointmentID
		-------------------------------------------
		WHERE
				AppointmentGuestID	= @GuestID
			AND CheckInDateTime IS NULL
			AND is_CheckedIn = 0
		ORDER BY AppointmentStartDateTime ASC )

	IF @AppointmentID IS NULL
	BEGIN
		SET @ErrorMsg = 'No appointments available'
		GOTO ErrorCode
	END


	-----------------------------------------
	-- Error Checks
	-----------------------------------------

	IF NOT EXISTS (	SELECT AppointmentGuestID 
					FROM dbo.AppointmentUserTbl
					WHERE
							AppointmentGuestID	= @GuestID
						AND AppointmentID		= @AppointmentID 
						AND CheckInDateTime IS NULL
						AND is_CheckedIn = 0 )
	BEGIN
		SET @ErrorMsg = 'User already checked in for this appointment'
		GOTO ErrorCode

	END


	-----------------------------------------
	-- Update
	-----------------------------------------

	UPDATE dbo.AppointmentUserTbl
	SET is_CheckedIn = 1,
		CheckInDateTime = GETDATE()
	WHERE
			AppointmentGuestID	= @GuestID
		AND AppointmentID		= @AppointmentID 



	ExitCode:
		SELECT 1 AS Status, '' AS ErrorMsg
		RETURN

	ErrorCode:
		SELECT 0 AS Status, @ErrorMsg AS ErrorMsg
END
GO
/****** Object:  StoredProcedure [dbo].[Update_AppointmentCheckOut_Proc]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:	Keenan Lee	
-- Create date: 8 November 2020
-- Description:	Check user in
-- =============================================
CREATE PROCEDURE [dbo].[Update_AppointmentCheckOut_Proc]
	@GuestID INT,
	@AppointmentID INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -----------------------------------------
	-- Variable Declarations
	-----------------------------------------

	DECLARE @ErrorMsg VARCHAR(150)

	-------------------------------------------
	---- Error Checks
	-------------------------------------------

	--IF NOT EXISTS (	SELECT AppointmentGuestID 
	--				FROM dbo.AppointmentUserTbl
	--				WHERE
	--						AppointmentGuestID	= @GuestID
	--					AND AppointmentID		= @AppointmentID 
	--					AND CheckInDateTime IS NULL
	--					AND is_CheckedIn = 0 )
	--BEGIN
	--	SET @ErrorMsg = 'User already checked out for this appointment'
	--	GOTO ErrorCode

	--END


	-----------------------------------------
	-- Update
	-----------------------------------------

	UPDATE dbo.AppointmentUserTbl
	SET is_CheckedIn = 0
	WHERE
			AppointmentGuestID	= @GuestID
		AND AppointmentID		= @AppointmentID 



	ExitCode:
		SELECT 1 AS Status, '' AS ErrorMsg
		RETURN

	ErrorCode:
		SELECT 0 AS Status, @ErrorMsg AS ErrorMsg
END
GO
/****** Object:  StoredProcedure [dbo].[View_AppointmentsCheckedIn_Proc]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Keenan Lee
-- Create date: 8 November 2020
-- Description:	View appointments that are currently checked in
-- =============================================
CREATE PROCEDURE [dbo].[View_AppointmentsCheckedIn_Proc]


AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT
		ATbl.AppointmentID,
		U1.FirstName + ' ' + U1.LastName SponsorName,
		AUTbl.AppointmentGuestID,
		U2.FirstName + ' ' + U2.LastName GuestName,
		CAST(CAST(ATbl.AppointmentStartDateTime AS TIME) AS VARCHAR) 
			+CASE
				WHEN ATbl.AppointmentEndDateTime IS NULL THEN '-'+CAST(CAST (ATbl.AppointmentEndDateTime AS TIME) AS VARCHAR)
				ELSE '' END AS AppointmentTimeRange,
		ATbl.AppointmentPurpose
	FROM dbo.AppointmentTbl ATbl
	----------------------------------
	INNER JOIN dbo.users U1 ON
	----------------------------------
		U1.id = SponsoringUserID
	----------------------------------
	INNER JOIN dbo.AppointmentUserTbl AUTbl ON
	----------------------------------
		ATbl.AppointmentID = AUTbl.AppointmentID
	----------------------------------
	INNER JOIN dbo.users U2 ON
	----------------------------------
		U2.id = AppointmentGuestID
	----------------------------------
	WHERE AUTbl.is_CheckedIn = 1

		
END
GO
/****** Object:  StoredProcedure [dbo].[View_AppointmentsTodayNotCheckedIn_Proc]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Keenan Lee
-- Create date: 8 November 2020
-- Description:	View appointments today that have not checked in yet
-- =============================================
CREATE PROCEDURE [dbo].[View_AppointmentsTodayNotCheckedIn_Proc]


AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT
		ATbl.AppointmentID,
		U1.FirstName + ' ' + U1.LastName SponsorName,
		AUTbl.AppointmentGuestID,
		U2.FirstName + ' ' + U2.LastName GuestName,
		CAST(CAST(ATbl.AppointmentStartDateTime AS TIME) AS VARCHAR) 
			+CASE
				WHEN ATbl.AppointmentEndDateTime IS NULL THEN '-'+CAST(CAST (ATbl.AppointmentEndDateTime AS TIME) AS VARCHAR)
				ELSE '' END AS AppointmentTimeRange,
		ATbl.AppointmentPurpose
	FROM dbo.AppointmentTbl ATbl
	----------------------------------
	INNER JOIN dbo.users U1 ON
	----------------------------------
		U1.id = SponsoringUserID
	----------------------------------
	INNER JOIN dbo.AppointmentUserTbl AUTbl ON
	----------------------------------
		ATbl.AppointmentID = AUTbl.AppointmentID
	----------------------------------
	INNER JOIN dbo.users U2 ON
	----------------------------------
		U2.id = AppointmentGuestID
	----------------------------------
	WHERE
			CAST(ATbl.AppointmentStartDateTime AS DATE) = CAST(GETDATE() AS DATE)
		AND AUTbl.is_CheckedIn = 0
		AND AUTbl.CheckInDateTime IS NULL

		
END
GO
/****** Object:  StoredProcedure [dbo].[View_AppointmentsUpcoming_Proc]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Keenan Lee
-- Create date: 8 November 2020
-- Description:	View upcoming appointments (start date after today)
-- =============================================
CREATE PROCEDURE [dbo].[View_AppointmentsUpcoming_Proc]


AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT
		ATbl.AppointmentID,
		U1.FirstName + ' ' + U1.LastName SponsorName,
		AUTbl.AppointmentGuestID,
		U2.FirstName + ' ' + U2.LastName GuestName,
		CAST(CAST(ATbl.AppointmentStartDateTime AS TIME) AS VARCHAR) 
			+CASE
				WHEN ATbl.AppointmentEndDateTime IS NULL THEN '-'+CAST(CAST (ATbl.AppointmentEndDateTime AS TIME) AS VARCHAR)
				ELSE '' END AS AppointmentTimeRange,
		ATbl.AppointmentPurpose
	FROM dbo.AppointmentTbl ATbl
	----------------------------------
	INNER JOIN dbo.users U1 ON
	----------------------------------
		U1.id = SponsoringUserID
	----------------------------------
	INNER JOIN dbo.AppointmentUserTbl AUTbl ON
	----------------------------------
		ATbl.AppointmentID = AUTbl.AppointmentID
	----------------------------------
	INNER JOIN dbo.users U2 ON
	----------------------------------
		U2.id = AppointmentGuestID
	----------------------------------
	WHERE CAST(ATbl.AppointmentStartDateTime AS DATE) > CAST(GETDATE() AS DATE)

		
END
GO
/****** Object:  StoredProcedure [dbo].[View_UserAppointments_Proc]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Keenan Lee
-- Create date: 8 Nov 2020
-- Description:	View user's appointment
-- =============================================
CREATE PROCEDURE [dbo].[View_UserAppointments_Proc]
	@UserID INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT
		ATbl.AppointmentID,
		U1.FirstName + ' ' + U1.LastName SponsorName,
		AUTbl.AppointmentGuestID,
		U2.FirstName + ' ' + U2.LastName GuestName,
		CAST(CAST(ATbl.AppointmentStartDateTime AS TIME) AS VARCHAR) 
			+CASE
				WHEN ATbl.AppointmentEndDateTime IS NULL THEN '-'+CAST(CAST (ATbl.AppointmentEndDateTime AS TIME) AS VARCHAR)
				ELSE '' END AS AppointmentTimeRange,
		ATbl.AppointmentPurpose
	FROM dbo.AppointmentTbl ATbl
	----------------------------------
	INNER JOIN dbo.users U1 ON
	----------------------------------
		U1.id = SponsoringUserID
	----------------------------------
	INNER JOIN dbo.AppointmentUserTbl AUTbl ON
	----------------------------------
		ATbl.AppointmentID = AUTbl.AppointmentID
	----------------------------------
	INNER JOIN dbo.users U2 ON
	----------------------------------
		U2.id = AppointmentGuestID
	----------------------------------
	WHERE
			CAST(ATbl.AppointmentStartDateTime AS DATE) >= CAST(GETDATE() AS DATE)
		AND (ATbl.SponsoringUserID = @UserID OR AUTbl.AppointmentGuestID = @UserID)
END
GO
/****** Object:  StoredProcedure [dbo].[View_UserIDFromEmail_Proc]    Script Date: 11/17/2020 8:31:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Keenan
-- Create date: 10 Nov 2020
-- Description:	Get userID from email
-- =============================================
CREATE PROCEDURE [dbo].[View_UserIDFromEmail_Proc]
	@Email VARCHAR(255)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT id
	FROM dbo.users
	WHERE email = @Email
END
GO

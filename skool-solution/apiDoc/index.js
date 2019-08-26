exports.apiDocumentation = (req, res) => {
  res.json({
    adminRoutes:{ 
      put: "/admin/:adminId",
      get: "/admin",
      get: "/admin/:adminId",
      patch: "/admin/:adminId",
      delete: "/admin/:adminId"
    },
    accountantRoutes: {
      put: "/accountant/:accountantId",
      get: "/accountant",
      get: "/accountant/:accountantId",
      patch: "/accountant/:accountantId",
      delete: "/accountant/:accountantId",
    },
    attendanceRoutes: {
      studentAttendanceRoutes: {
        post: "/studentattendance",
        get: "/studentattendance",
        post: "/studentattendance/by",
      },
      teacherAttendanceRoutes: {
        post: "/teacherattendance", 
        get: "/teacherattendance", 
        post: "/teacherattendance/by"
      }
    },
    campusRoutes: {
      get: "/campus",
      post: "/campus/new/:userById",
      get: "/campus/:campusId",
      get: "/campus/by/:userById",
      put: "/campus/:campusId",
      delete: "/campus/:campusId",
    },
    classRoutes: {
      get: "/class",
      post: "/class/new/:userId",
      get: "/class/:classId",
      get: "/class/by/:userId",
      delete: "/class/:classId",
    },
    eventRoutes: {
      post: "/event/new/:userId",
      get: "/event",
      get: "/event/:eventId",
      put: "/event/:eventId",
      delete: "/event/:eventId",
    },
    feesRoutes: {
      post: "/setfee/new/:userId",
      get: "/setfee",
      get: "/setfee/:setfeeId",
      put: "/setfee/:setfeeId",
      delete: "/setfee/:setfeeId",
    },
    galleryRoutes: {
      post: "/gallery/new/userId",
      get: "/gallery",
      get: "/gallery/:galleryId",
      put: "/gallery/:galleryId",
      delete: "/gallery/:galleryId",
    },
    newsRoutes: {
      post: "/news/new/:userId",
      get: "/news",
      get: "/news/:newsId",
      put: "/news/:newsId",
      delete: "/news/:newsId",
    },
    paymentRoutes: {
      get: "/payment",
      get: "/payment/debtors",
      get: "/payment/:paymentId",
      delete: "/payment/:paymentId",
      post: "/payment/new/:userId",
      get: "/payment/by/:userId",
      put: "/payment/debt/:paymentId",
    },
    resultRoutes: {
      post: "/result/new",
      get: "/result",
      get: "/result/:resultId",
      get: "/result/by/:teacherId",
      put: "/result/:resultId",
      delete: "/result/:resultId"
    },
    staffRoutes: {
      post: "/staff/new/:userId",
      get: "/staff",
      put: "/staff/:staffId/photo",
      get: "/staff/:staffId",
      put: "/staff/:staffId",
      delete: "/staff/:staffId",
    },
    studentRoutes: {
      put: "/student/:userId",
      get: "/student",
      get: "/student/by/:userId",
      post: "/student/by/campusId/classId",
      get: "/student/:studentId",
      patch: "/student/:studentId",
      delete: "/student/:studentId",
    },
    subjectRoutes: {
      post: "/subject/new/:userId",
      get: "/subject",
      get: "/subject/:subjectId",
      delete: "/subject/:subjectId",
    },
    teacherRoutes: {
      get: "/teacher",
      get: "/teacher/:teacherId",
      get: "/bycampus/:campusId",
      put: "/teacher/:userId",
      delete: "/teacher/:teacherId",
      patch: "/teacher/:teacherId",
    },
    userRoutes: {
      post: "/signup/:userType", 
      post: "/signin/:userType",
      get: "/signout",
      get: "/user/:userId/:userType",
      delete: "/user/:userId",
    },
    weeklyRoutes: {
      post: "/report/new/:userId",
      get: "/report",
      get: "/report/by/:userId",
      get: "/report/:reportId",
      delete: "/report/:reportId",
    }
  });
}
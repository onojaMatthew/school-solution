const userRoutes = require("../user/routes");
const error = require("../middleware/error");
const campusRoutes = require("../campus/routes");
const classRoutes = require("../class/routes");
const subjectRoutes = require("../subject/routes");
const studentRoutes = require("../student/routes");
const teacherRoutes = require("../teacher/routes");
const adminRoutes = require("../admin/routes");
const adminPostRoutes = require("../adminPost/routes");
const staffRoutes = require("../staff/routes");
const weeklyReportRoutes = require("../weeklyReport/routes");
const teacherAttendanceRoutes = require("../attendance/teacher/routes");
const studentAttendanceRoutes = require("../attendance/student/routes");
const accountantRoutes = require("../accountant/routes");
const eventRoutes = require("../event/routes");
const galleryRoutes = require("../gallery/routes");
const newsRoutes = require("../news/routes");
const setFeeRoutes = require("../fees/setFee/routes");
const paymentRoutes = require("../payment/routes");
const resultRoute = require("../result/routes");
const apiRoutes = require("../apiDoc/routes");
const academicRoutes = require("../academicInfo/routes");
const taskRoutes = require("../task/routes");

module.exports = (app) => {
  app.use("/api/v1", userRoutes);
  app.use("/api/v1", campusRoutes);
  app.use("/api/v1", classRoutes);
  app.use("/api/v1", subjectRoutes);
  app.use("/api/v1", studentRoutes);
  app.use("/api/v1", teacherRoutes);
  app.use("/api/v1", adminRoutes);
  app.use("/api/v1", adminPostRoutes);
  app.use("/api/v1", staffRoutes);
  app.use("/api/v1", weeklyReportRoutes);
  app.use("/api/v1", teacherAttendanceRoutes);
  app.use("/api/v1", accountantRoutes);
  app.use("/api/v1", eventRoutes);
  app.use("/api/v1", galleryRoutes);
  app.use("/api/v1", newsRoutes);
  app.use("/api/v1", setFeeRoutes);
  app.use("/api/v1", paymentRoutes);
  app.use("/api/v1", studentAttendanceRoutes);
  app.use("/api/v1", resultRoute);
  app.use("/api/v1", apiRoutes);
  app.use("/api/v1", academicRoutes);
  app.use("/api/v1", taskRoutes);
  app.use(error);
}

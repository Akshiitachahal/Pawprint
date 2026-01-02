import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   TEMP DATA STORE
   (Later DB se replace hoga)
========================= */
const reports = [];

/* =========================
   HEALTH CHECK API
========================= */
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend connected ✅" });
});

/* =========================
   CREATE REPORT API
========================= */
app.post("/api/reports", (req, res) => {
  const { animalType, location, condition } = req.body;

  // Validation
  if (!animalType || !location || !condition) {
    return res.status(400).json({
      error: "All fields are required"
    });
  }

  const newReport = {
    id: reports.length + 1,
    animalType,
    location,
    condition,
    status: "reported",
    createdAt: new Date()
  };

  reports.push(newReport);

  res.status(201).json({
    message: "Report submitted successfully 🐾",
    report: newReport
  });
});

/* =========================
   GET ALL REPORTS API
========================= */
app.get("/api/reports", (req, res) => {
  res.json(reports);
});

/* =========================
   SERVER START
========================= */
app.listen(PORT, () => {
  console.log(`🐾 PawPrint backend running on port ${PORT}`);
});

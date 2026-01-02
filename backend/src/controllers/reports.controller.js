import fs from "fs";
import path from "path";
import createReport from "../models/report.model.js";

const dbPath = path.resolve("src/data/reports.json");

export const getReports = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath));
  res.json(data);
};

export const createNewReport = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath));
  const newReport = createReport(req.body);

  data.push(newReport);
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

  res.status(201).json(newReport);
};

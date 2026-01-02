const BASE_URL = "http://localhost:5000/api/reports";

export const fetchReports = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createReport = async (report) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(report)
  });

  return res.json();
};

function ReportCard({ report }) {
  return (
    <div className="card">
      <h3>{report.animalType}</h3>
      <p>{report.description}</p>
      <small>{report.location}</small>
      <p className="status">Status: {report.status}</p>
    </div>
  );
}

export default ReportCard;

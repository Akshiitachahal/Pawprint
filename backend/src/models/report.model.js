export default function createReport(data) {
  return {
    id: Date.now().toString(),
    animalType: data.animalType,
    description: data.description,
    location: data.location,
    status: "reported", // reported | rescued
    createdAt: new Date().toISOString()
  };
}

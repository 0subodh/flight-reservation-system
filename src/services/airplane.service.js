import { AirplaneRepository } from "../repositories/index.js";

const airplaneRepository = new AirplaneRepository();

export async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

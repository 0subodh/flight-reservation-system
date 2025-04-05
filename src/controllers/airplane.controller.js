import { StatusCodes } from "http-status-codes";
import { createAirplane as createAirplaneService } from "../services/index.js";

/**
 * POST :/airplanes
 * req-body {modelNumber: 'airbus23', capacity: 100}
 */
export async function createAirplane(req, res) {
  try {
    const airplane = await createAirplaneService({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Airplane created successfully",
      error: {},
      data: airplane,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong",
      error: error,
      data: {},
    });
  }
}

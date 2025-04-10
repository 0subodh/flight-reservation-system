import { validateCreateRequest } from './airplane.middleware.js'
import { validateCreateCityRequest } from './city.middleware.js'
import { validateCreateAirportRequest } from './airport.middleware.js'
import {
  validateCreateFlightRequest,
  validateUpdateSeatsRequest,
} from './flight.middleware.js'

export {
  validateCreateRequest,
  validateCreateCityRequest,
  validateCreateAirportRequest,
  validateCreateFlightRequest,
  validateUpdateSeatsRequest,
}

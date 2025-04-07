import { CrudRepository } from './crud.repository.js'
import db from '../models/index.js'

export class FlightRepository extends CrudRepository {
  constructor() {
    super(db.Flight)
  }
}

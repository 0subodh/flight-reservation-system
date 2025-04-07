import { CrudRepository } from './crud.repository.js'
import db from '../models/index.js'

export class AirportRepository extends CrudRepository {
  constructor() {
    super(db.Airport)
  }
}

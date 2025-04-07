import { CrudRepository } from './crud.repository.js'
import db from '../models/index.js'

export class CityRepository extends CrudRepository {
  constructor() {
    super(db.City)
  }
}

import { CrudRepository } from "./crud.repository.js";
import db from "../models/index.js";

export class AirplaneRepository extends CrudRepository {
  constructor() {
    super(db.Airplane);
  }

  async someRawQuery() {}
}

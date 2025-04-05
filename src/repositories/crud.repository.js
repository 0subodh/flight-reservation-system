import { logger } from "../config/index.js";

export class CrudRepository {
  constructor(model) {
    this.model = model;
    console.log("Model received in CrudRepository:", model?.name);
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      logger.error("Something went wrong in the CRUD repo: create");
      console.log(error);
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: { id: data },
      });
      return response;
    } catch (error) {
      logger.error("Something went wrong in the CRUD repo: destroy");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      logger.error("Something went wrong in the CRUD repo: get");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error("Something went wrong in the CRUD repo: findAll");
      throw error;
    }
  }

  async update(id, data) {
    // data -> {col: value}
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      logger.error("Something went wrong in the CRUD repo: findAll");
      throw error;
    }
  }
}

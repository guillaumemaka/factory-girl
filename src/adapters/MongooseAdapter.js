import DefaultAdapter from './DefaultAdapter';

/* eslint-disable no-unused-vars */
export default class MongooseAdapter extends DefaultAdapter {
  async destroy(model, Model) {
    return model.remove();
  }

  async saveMany(models, Model) {
    return Model.insertMany(models, { j: false });
  }
}

import mongoose from "mongoose";

interface ConnectOptions {
  dbName: string;
  mongoUrl: string;
}

export class MongoDatabase {
  static async connect(options: ConnectOptions) {
    const { dbName, mongoUrl } = options;
    try {
      await mongoose.connect(mongoUrl, {
        dbName,
      });
      return true;
    } catch (error) {
      throw error;
    }
  }
}

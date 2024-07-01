import * as mongoose from "mongoose";

export const dbconnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL!);
    const connectionEvents = mongoose.connection;
    connectionEvents.on("connect", () => {
        console.log("MongoDB connected");
    });
    connectionEvents.on('error', (err) => console.log(err));
    return connection;
  } catch (error) {
    console.log(error);
  }
};

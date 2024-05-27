import mongoose from "mongoose";


const DB = "mongodb+srv://nishikaemalshi:XNKGra9w7y0AexTD@cluster0.ukmnjdl.mongodb.net/papadamapp?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("Database Connected"))
  .catch((err) => {
    console.error(err);
  });

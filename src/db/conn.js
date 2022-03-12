const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/youtubeRegistrationUpdated", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true

}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log("No connection");
})
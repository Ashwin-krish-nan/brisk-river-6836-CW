const mongoose=require("mongoose")

require('dotenv').config()

const connection=mongoose.connect("mongodb+srv://ashwin:kavitha@cluster0.ivcxf6h.mongodb.net/limeroad?retryWrites=true&w=majority")




module.exports={
connection
}

////////////////////////////Step 1 Rendering your html page////////////////////////////////////////////
  const express = require('express')
  const app = express()
  const port = 9000


const bodyParser=require('body-parser'); 



  app.use(express.static(__dirname))
  app.get("/", (req,res) => {
    res.sendFile(__dirname + "/login/index.html")
  });

  app.use(bodyParser.urlencoded({extended: false}))
  app.get('/submit',function(req,res){
    console.log("Data Saved");
  })

////////////////////////////Step 2 Connection with Postgres////////////////////////////////////////////

//Connection code

const {Pool,Client}= require('pg')


const connectionString='edinsonuwu://edinsonuwu:Ema12345@localhost:5432/purged_in_space'

//Creating Client
const client= new Client({
  connectionString:connectionString
})
client.connect()
////////////////////////////Step 3  Inserting the values////////////////////////////////////////////
app.post("/",(req,res)=>{


    const { f_name}=req.body
    //client.connect()
    client.query('INSERT INTO player VALUES ($1)', [f_name], (err,res)=> {
        console.log(err,res);
        //client.end() 
        //alert("Data Saved");
    })
    const query2 = `SELECT * FROM player`;
    client.query(query2, (err, res) => {
      if (err) {
          console.error(err);
          return;
      }
      for (let row of res.rows) {
          console.log(row);
      }
      //client.end();
  })
    res.sendFile(__dirname + "/purged_in_space/index.html");
  })



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });
//Connection code

const {Pool,Client}= require('pg')


const connectionString='edinsonuwu://edinsonuwu:Ema12345@localhost:5432/purged_in_space'


//Creating Client
const client= new Client({
    connectionString:connectionString
})

client.connect()
client.query('Select * from player',(err,res)=> {
    console.log(err,res)
    client.end()
})
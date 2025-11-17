import pg from 'pg'

export const pool = new pg.Pool({
    user:"postgres",
    host: "192.168.1.61",
    password: "L0l4@2gU4p1g1O7#nA",
    database: "apirest",
    port:"5433"

})

//pool.query('SELECT NOW()'),them(result =>{
// console.log(result)
// })
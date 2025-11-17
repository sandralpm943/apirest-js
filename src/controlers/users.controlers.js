import { pool } from "../db.js";


export const obtenerUsuarios= async (req, res)=>{

    const { rows } = await pool.query('SELECT * FROM  users');
    res.json(rows);
    
};
export const verUsuario =async (req, res)=>{
    const { id } = req.params

    const { rows }= await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(rows);
    res.send("obteniendo usuarios" + id)

    if (rows.length === 0) {
        return res.status(404).json({message:"¡Ups! Eso que solicitas no esta en la base de datos."})
    }
};
export const insertarUsuario= async (req, res)=>{
    const data = req.body
    const {rows} = await pool.query('INSERT INTO users (name, email) VALUES ($1,$2) RETURNING * ',[data.name,data.email])
    console.log(rows)
    return res.json(rows[0]);
};

export const eliminarUsuario= async (req, res)=>{
    const { id } = req.params
    const { rows , rowCount}= await pool.query('DELETE  FROM users WHERE id = $1 RETURNING *', [id]);
    console.log(rows)
     if (rowCount === 0) {
        return res.status(404).json({message:"¡Ups! Eso que solicitas no esta en la base de datos."})
    }
    return res.json(rows);

};

export const actualizarUsuario= async (req, res)=>{
    const { id } = req.params
    const data = req.body;

    const{ rows } = await pool.query(
        "UPDATE users SET name = $1, email = $2  WHERE id = $3 RETURNING *",
        [data.name, data.email, id]
    );
    console.log(rows)
    return res.json(rows[0]);
    

    
};
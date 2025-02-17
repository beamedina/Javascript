import pool from "./conexao.js";

export async function deletaCampeonato(id) {
    const conexao = await pool.getConnection();

    const query = 'DELETE from campeonatos WHERE id = ?';
    const [resposta] = await conexao.execute(query, [id]);
    console.log(resposta);
    conexao.release();
    return resposta;
}
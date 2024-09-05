import { sql } from 'drizzle-orm'
import { db } from './db'

export default async function Home() {

  const usuarios = await db.execute(sql`SELECT * FROM usuario`)

  return <ul>
    {usuarios.map(u=><li key={u.id}>{u.nome}</li>)}
  </ul>
}

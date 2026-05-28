import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

try {
  const users = await sql`SELECT email, password FROM users WHERE email = 'user@nextmail.com'`;
  console.log(JSON.stringify(users, null, 2));
} catch (err) {
  console.error(err);
} finally {
  await sql.end();
}

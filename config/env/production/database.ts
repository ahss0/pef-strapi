// config/env/production/database.ts
export default ({ env }: { env: any }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: {
        rejectUnauthorized: false, // Obrigatório para o Neon no Render
      },
    },
    options: {
      pool: { min: 2, max: 10 },
    },
  },
});

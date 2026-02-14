import postgres from "postgres";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.log("❌ DATABASE_URL is missing in .env");
  process.exit(1);
}

const sql = postgres(connectionString, {
  ssl: { rejectUnauthorized: false },
});

async function testConnection() {
  try {
    const result = await sql`SELECT NOW() as now`;
    console.log("✅ Connected to Supabase successfully!");
    if (result[0]) {
      console.log("🕒 Server time:", result[0].now);
    } else {
      console.log("🕒 Server time: unavailable");
    }
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  } finally {
    await sql.end();
  }
}

testConnection();
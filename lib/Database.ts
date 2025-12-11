import sql from 'mssql';

/**
 * Database Singleton for MSSQL Connection.
 * NOTE: This class is designed for Server-Side execution (Node.js/Workers).
 * In a client-side browser preview, importing 'mssql' may cause build errors 
 * depending on the bundler configuration.
 */
class Database {
  private static instance: Database;
  private pool: sql.ConnectionPool | null = null;
  private isConnected: boolean = false;

  private config: sql.config = {
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || 'password',
    server: process.env.DB_SERVER || 'localhost',
    database: process.env.DB_NAME || 'PokerWiredDB',
    options: {
      encrypt: true, // Use for Azure
      trustServerCertificate: true, // Change to false for production
    },
  };

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<sql.ConnectionPool> {
    if (this.isConnected && this.pool) {
      return this.pool;
    }

    try {
      this.pool = await sql.connect(this.config);
      this.isConnected = true;
      console.log('Connected to MSSQL Database');
      return this.pool;
    } catch (err) {
      console.error('Database Connection Failed! Using Mock Data Fallback.', err);
      throw err;
    }
  }

  public async query<T>(queryString: string, params?: { [key: string]: any }): Promise<T[]> {
    try {
      const pool = await this.connect();
      const request = pool.request();

      if (params) {
        Object.keys(params).forEach((key) => {
          request.input(key, params[key]);
        });
      }

      const result = await request.query(queryString);
      return result.recordset as T[];
    } catch (error) {
      console.error('Query execution failed:', error);
      throw error;
    }
  }
}

export default Database;
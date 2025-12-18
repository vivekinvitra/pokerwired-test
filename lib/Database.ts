/**
 * Database Singleton for Data Access.
 * In a browser SPA environment, direct TCP connections to MSSQL are not possible.
 * This class serves as a shell to maintain the PokerService structure while
 * allowing for mock data fallback.
 */
class Database {
  private static instance: Database;
  private isConnected: boolean = false;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  /**
   * Mock connect method for browser compatibility.
   */
  public async connect(): Promise<any> {
    this.isConnected = true;
    return Promise.resolve({});
  }

  /**
   * Mock query method. In a production SPA, this would call a REST/GraphQL API.
   * For this project, PokerService handles the fallback to Constants.
   */
  public async query<T>(queryString: string, params?: { [key: string]: any }): Promise<T[]> {
    console.warn('Database query called in browser context. Falling back to mock data.');
    throw new Error('Direct database access not available in browser.');
  }
}

export default Database;
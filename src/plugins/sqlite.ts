import {Cordova, CordovaInstance, Plugin, pluginWarn} from './plugin';


declare var sqlitePlugin;

/**
 * @name SQLite
 *
 * @description
 * Access SQLite databases on the device.
 *
 * @usage
 *
 * ```typescript
 * import { SQLite } from 'ionic-native';
 *
 * let db = new SQLite();
 * db.openDatabase({
 *   name: 'data.db',
 *   location: 'default' // the location field is required
 * }).then(() => {
 *   db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {
 *
 *   }, (err) => {
 *     console.error('Unable to execute sql: ', err);
 *   });
 * }, (err) => {
 *   console.error('Unable to open database: ', err);
 * });
 * ```
 *
 */
@Plugin({
  pluginName: 'SQLite',
  pluginRef: 'sqlitePlugin',
  plugin: 'cordova-sqlite-storage',
  repo: 'https://github.com/litehelpers/Cordova-sqlite-storage'
})
export class SQLite {

  private _objectInstance: any;
  get databaseFeatures(): any {
    return this._objectInstance.databaseFeatures;
  }

  constructor() { }

  /**
   * Open or create a SQLite database file.
   *
   * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
   *
   * @param config the config for opening the database.
   * @returns {Promise<any>}
   * @usage
   *
   * ```typescript
   * import { SQLite } from 'ionic-native';
   *
   * let db = new SQLite();
   * db.openDatabase({
   *   name: 'data.db',
   *   location: 'default' // the location field is required
   * }).then(() => {
   *   db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {
   *
   *   }, (err) => {
   *     console.error('Unable to execute sql', err);
   *   })
   * }, (err) => {
   *   console.error('Unable to open database', err);
   * });
   * ```
   */
  openDatabase(config: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (typeof sqlitePlugin !== 'undefined') {
        sqlitePlugin.openDatabase(config, db => {
          this._objectInstance = db;
          resolve(db);
        }, error => {
          console.warn(error);
          reject(error);
        });
      } else {
        pluginWarn({
          pluginName: 'SQLite',
          plugin: 'cordova-sqlite-storage'
        });
      }
    });
  }

  @CordovaInstance({
    sync: true
  })
  addTransaction(transaction: any): void { }

  /**
   * @param fn {any}
   * @returns {Promise<any>}
   */
  @CordovaInstance({
    successIndex: 2,
    errorIndex: 1
  })
  transaction(fn: any): Promise<any> { return; }

  /**
   * @param fn {any}
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  readTransaction(fn: any): Promise<any> { return; }

  @CordovaInstance({
    sync: true
  })
  startNextTransaction(): void { }

  /**
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  close(): Promise<any> { return; }

  @CordovaInstance({
    sync: true
  })
  start(): void { }

  /**
   * Execute SQL on the opened database. Note, you must call `openDatabase` first, and
   * ensure it resolved and successfully opened the database.
   *
   * @usage
   *
   * ```typescript
   * db.executeSql('SELECT FROM puppies WHERE type = ?', ['cavalier']).then((resultSet) => {
   *   // Access the items through resultSet.rows
   *   // resultSet.rows.item(i)
   * }, (err) => {})
   * ```
   * @param statement {string}
   * @param params {any}
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  executeSql(statement: string, params: any): Promise<any> { return; }

  /**
   * @param sql
   * @param values
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  addStatement(sql, values): Promise<any> { return; }

  /**
   * @param sqlStatements {any}
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  sqlBatch(sqlStatements: any): Promise<any> { return; }

  @CordovaInstance({
    sync: true
  })
  abortallPendingTransactions(): void { }

  /**
   @param handler
   @param response
   */
  @CordovaInstance({
    sync: true
  })
  handleStatementSuccess(handler, response): void { }

  /**
   * @param handler
   * @param response
   */
  @CordovaInstance({
    sync: true
  })
  handleStatementFailure(handler, response): void { }


  @CordovaInstance({
    sync: true
  })
  run(): void { }

  /**
   * @param txFailure
   */
  @CordovaInstance({
    sync: true
  })
  abort(txFailure): void { }


  @CordovaInstance({
    sync: true
  })
  finish(): void { }

  /**
   * @param sqlerror
   */
  @CordovaInstance({
    sync: true
  })
  abortFromQ(sqlerror): void { }

  /**
   * @returns {Promise<any>}
   */
  @Cordova()
  static echoTest(): Promise<any> { return; }

  /**
   * @param first
   * @returns {Promise<any>}
   */
  @Cordova()
  static deleteDatabase(first): Promise<any> { return; }

}

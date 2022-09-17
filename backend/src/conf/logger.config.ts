const pine = require("pine");


// Logger class object to use all over express app.
export class Logger {
  private logger: any;

  
  // Instantiate pine logger.
  constructor() {
    this.logger = pine();
  }

  /**
   * Override info pine logs.
   * @param msg The message to show in logger.
   * @param data The data to show if exists.
   */
  public info(msg: string, data: any | undefined): void {
    this.logger.info(
      `${msg} - ${data != undefined ? JSON.stringify(data) : ""}`
    );
  }

  /**
   * Override debug pine logs.
   * @param msg The message to show in logger.
   * @param data The data to show if exists.
   */
  public debug(msg: string, data: any): void {
    this.logger.debug(
      `${msg} - ${data != undefined ? JSON.stringify(data) : ""}`
    );
  }

  /**
   * Override warning pine logs.
   * @param msg The warning message to show in logger.
   */
  public warning(msg: string): void {
    this.logger.warning(`${msg}`);
  }

  /**
   * Override error pine logs.
   * @param msg The error message to show in logger.
   */
  public error(msg: string): void {
    this.logger.error(`${msg}`);
  }
}

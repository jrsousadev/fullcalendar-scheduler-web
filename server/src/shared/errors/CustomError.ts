class CustomError implements Error {
  name: string;
  message: string;
  status: number;

  constructor(message: string, status: number) {
    this.name = "";
    this.message = message;
    this.status = status;
  }
}

export { CustomError };

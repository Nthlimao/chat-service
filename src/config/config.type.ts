export type AppConfig = {
  auth: {
    salt: number;
    secret: string;
  };
  database: {
    host: string;
  };
};

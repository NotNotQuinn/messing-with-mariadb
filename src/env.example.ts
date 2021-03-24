interface Env {
    [x: string]: string;
}

const env: Env = {
    DB_PASS: "pass123456789999",
    DB_USER: "test_user",
    DB_PORT: "3307",
    DB_HOST: "localhost"
}
export default env;

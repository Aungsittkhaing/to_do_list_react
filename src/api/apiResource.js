import axios from "axios";

export const api = axios.create({
  baseURL:
    "postgresql://neondb_owner:npg_YcEK90tnekTG@ep-divine-queen-aehb320l-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

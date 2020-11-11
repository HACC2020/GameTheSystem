import rest from 'axios';

export const axios = rest.create({
  baseURL: `http://${process.env.API_IP}:${process.env.REST_PORT}`,
});

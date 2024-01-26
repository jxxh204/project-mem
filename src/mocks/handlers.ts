// src/mocks/handlers.js
import { http } from "msw";
const apiServer = "https://memoAPI.com";

export default [
  http.get(`${apiServer}v1/health`, ({ params }) => {
    const { id } = params;
    console.log('Fetching user with ID "%s"', id);
  }),
  http.post(`${apiServer}v1/memo`, async ({ request }) => {
    const info = await request.formData();
    const json = request.json();
    console.log(json);
    console.log('Logging in as "%s"', info.get("username"));
  }),
  http.post(`${apiServer}v1/search`, async ({ request }) => {
    const info = await request.formData();
    console.log('Logging in as "%s"', info.get("username"));
  }),
];

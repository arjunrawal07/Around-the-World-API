// // import { getCountries } from "./src/openApi/countries.swagger";

// export const swaggerDocument = {
//   openapi: "3.0.1",
//   info: {
//     version: "1.0.0",
//     title: "APIs Document",
//     description: "your description here",
//     termsOfService: "",
//     contact: {
//       name: "Tran Son hoang",
//       email: "son.hoang01@gmail.com",
//       url: "https://hoangtran.co",
//     },
//     license: {
//       name: "Apache 2.0",
//       url: "https://www.apache.org/licenses/LICENSE-2.0.html",
//     },
//   },
//   servers: [
//     {
//       url: "http://localhost:4000/",
//       description: "Local server",
//     },
//   ],
//   components: {
//     schemas: {},
//     securitySchemes: {
//       bearerAuth: {
//         type: "http",
//         scheme: "bearer",
//         bearerFormat: "JWT",
//       },
//     },
//   },
//   tags: [
//     {
//       name: "Countries",
//     },
//   ],
//   paths: {
//     "/": {
//       get: getCountries,
//     },
//   },
// };

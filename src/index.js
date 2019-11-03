import Hapi from "hapi";

// // import http from "http";

const PORT = 8080;
const RADIX = 10;
// //create a server object:
// // http
// //   .createServer(function(req, res) {
// //     res.write("Hello World!"); //write a response to the client
// //     res.end(); //end the response
// //   })
// //   .listen(8080); //the server object listens on port 8080

const server = new Hapi.server({
  // host: process.env.host,
  port: parseInt(process.env.PORT, RADIX) || PORT,
  app: {}
});
const launch = async () => {
  try {
    await server.start();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${server.info.uri}`);
};

launch();
server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "I am the home route";
  }
});

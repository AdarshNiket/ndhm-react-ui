import { Server, Model } from "miragejs";

function makeServer({ environment = "test" } = {}) {
  let server = new Server({
    environment,
    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", {
        hospital_name: "Manipal-Bangalore",
        user_name: "Sanjay",
      });
      server.create("user", {
        hospital_name: "Manipal-Bangalore",
        user_name: "Ajay",
      });
      server.create("user", {
        hospital_name: "Sakra-Bangalore",
        user_name: "Raj",
      });
      server.create("user", {
        hospital_name: "Sakra-Bangalore",
        user_name: "Vijay",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all();
      });

      this.post("/addUser", (schema, request) => {
        let attrs = JSON.parse.apply(request.requestBody);
        return schema.users.create(attrs);
      });
    },
  });
  return server;
}

export default makeServer;

const app = require("./app");

// SET POST AND HOST
app.set("PORT", process.env.PORT || 3000);
app.set("HOST", process.env.HOST || "127.0.0.1");

// Listening for requests
app.listen(app.get("PORT"), app.get("HOST"), () => {
  console.log(`Server is now running on port ${app.get("PORT")}`);
});

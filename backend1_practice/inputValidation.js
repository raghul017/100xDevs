const express = require("express");
const z = require("zod");
const app = express();

//input validation - zod
// const schema = z.array(z.number());

const schema = z.object({
  email: z.email(),
  password: z.string(),
  country: z.literal("IN").or(z.literal("US")),
  kidneys: z.array(z.number()),
});

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  const kidneyLength = kidneys.length;

  // res.send(`Your kidney length is ${kidneyLenght}`);
  res.send({
    response,
  });
});

// // global catches
// app.use((error, req, res, next) => {
//   res.status(500).json({
//     error: error,
//   });
// });

app.listen(3000);

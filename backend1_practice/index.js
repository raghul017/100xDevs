const express = require("express");
const app = express();
app.use(express.json());

// -------------------------------------------------------------------------------------------
const user = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];
// -------------------------------------------------------------------------------------------
app.get("/", (req, res) => {
  const johnKidneys = user[0].kidneys;
  const noOfKidneys = johnKidneys.length;

  let noOfHealthyKidneys = johnKidneys.filter((k) => k.healthy).length;

  const noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    johnKidneys,
    noOfHealthyKidneys,
    noOfUnHealthyKidneys,
  });
});

// -------------------------------------------------------------------------------------------

app.post("/add", (req, res) => {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({ msg: "Added successfully ", kidneys: user[0].kidneys });
});

// -------------------------------------------------------------------------------------------

app.put("/", (req, res) => {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }

  res.json({ msg: "Done" });
});

// -------------------------------------------------------------------------------------------

app.delete("/", (req, res) => {
  let atleastOneUnHealthy = false;

  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (!user[0].kidneys[i].healthy) {
      atleastOneUnHealthy = true;
    }
  }
  if (atleastOneUnHealthy) {
    user[0].kidneys = user[0].kidneys.filter((k) => k.healthy == true);
    res.json({ msg: "Done removing unhealthy kidneys" });
  } else {
    res.status(411).json({ msg: "You have no bad kidneys" });
  }
});

app.listen(3000);
// -------------------------------------------------------------------------------------------

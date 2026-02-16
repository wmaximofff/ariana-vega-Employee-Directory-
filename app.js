import express from "express";
import employees, { getEmployee } from "#db/employees";

const app = express();

app.get("/", (request, response) => {
  response.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.get('/random-employee', (req, res) => {
  const randomEmployeeIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomEmployeeIndex];

  res.send(randomEmployee);

})

app.get("/employees/:id", (req, res) => {
  const {id} = req.params;
  const employee = getEmployee(id);
  if (employee === undefined) {
    return res.status(404).send("That employee doesn't exist.");
  }
  res.send(employee);
});

export default app;
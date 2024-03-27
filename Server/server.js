//Om de server mee op te starten met node
import Express from "express";
import endpoints from "./Modules/ModuleCrudEndpoints.js";

const app = Express();
const port = 2023;

app.use(Express.json());
app.use("/bg-checker", Express.static("../Client/Public/BgChecker"), endpoints);
app.use(
  "/bg-checker/nieuweInfo",
  Express.static("../Client/Public/BgChecker/form.html", endpoints)
);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

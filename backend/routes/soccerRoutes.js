import { addNewPlayer, getPlayers } from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")
    .get(getPlayers)
    // POST endpoint
    .post(addNewPlayer);
};

export default routes;

import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  UpdatePlayer,
  deletePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")
    // GET endpoint
    .get(getPlayers)
    // POST endpoint
    .post(addNewPlayer);

  app
    .route("/player/:PlayerId")
    // get specitific player
    .get(getPlayerWithID)
    // update specific Player
    .put(UpdatePlayer)
    // update specific Player
    .delete(deletePlayer);
};

export default routes;

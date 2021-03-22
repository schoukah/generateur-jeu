// Controllers are functions that interact with the database
//  when we are making a request to the API.
// the flow of things
// request sends request to the API
// with the route
// and controller executes the function
// in the database
import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer.save((err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

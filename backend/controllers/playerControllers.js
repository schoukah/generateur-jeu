// Controllers are functions that interact with the database
//  when we are making a request to the API.
// the flow of things
// request sends request to the API
// with the route
// and controller executes the function
// in the database
import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

// "controllers are the functions that interact
//  with the database when we are making the request to the API.
// So basically the flow of things is:
// the request sends the request to the API
// with the route and the controller executes the function
// in the database".
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

export const getPlayers = (req, res) => {
  Player.find({}, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

export const getPlayerWithID = (req, res) => {
  Player.findById(req.params.PlayerId, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

export const UpdatePlayer = (req, res) => {
  Player.findOneAndUpdate(
    { _id: req.params.PlayerId },
    req.body,
    { new: true, useFindAndModify: false },
    (err, Player) => {
      if (err) {
        res.send(err);
      }
      res.json(Player);
    }
  );
};

export const deletePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.PlayerId }, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted player" });
  });
};

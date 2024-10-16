import express from "express";
import { deleteUserById, getUserById, getUsers } from "../db/users";

export const getAllUsers = async (req: express.Request, res: express.Response) => {
   try {
      const users = await getUsers();

      res.status(200).json(users);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
   try {
      const { id } = req.params;

      const deleteUser = await deleteUserById(id);

      res.status(204).json(deleteUser);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
};

export const updateUser = async (req: express.Request, res: express.Response) => {
   try {
      const { id } = req.params;
      const { username } = req.body;

      if (!username) {
         res.sendStatus(400);
         return;
      }

      const user = await getUserById(id);
      if (!user) {
         res.sendStatus(404);
      }

      user.username = username;
      user.save();

      res.status(200).json(user);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
};

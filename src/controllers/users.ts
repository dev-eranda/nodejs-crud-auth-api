import express from "express";
import { deleteUserById, getUsers } from "../db/users";

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

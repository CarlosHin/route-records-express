import { User } from "../../models/userModel";

export const userController = {
  async create({
    username,
    name,
    passwordHash,
  }: {
    username: string;
    name: string;
    passwordHash: string;
  }) {
    try {
      const findUser = await User.find({ username: username });
      if (findUser) throw new Error(`Username ${username} Already exist`);

      const user = User.build({ username, name, passwordHash });
      await user.save();
      return user;
    } catch (error) {
      if (error instanceof Error)
        throw new Error("Error creating user: " + error.message);
      throw new Error("Error creating user");
    }
  },

  async getAll() {
    try {
      const users = await User.find({});
      return users.map(user => ({name:user.name}));
    } catch (error) {
      if (error instanceof Error)
        throw new Error("Error creating user: " + error.message);
      throw new Error("Error creating user:");
    }
  },
};

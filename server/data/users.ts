interface User {
  id: number;
  username: string;
  role: "admin" | "manager" | "viewer";
}

const users: User[] = [
  {
    id: 1,
    username: "efraim",
    role: "admin",
  },
  {
    id: 2,
    username: "david",
    role: "manager",
  },
  {
    id: 3,
    username: "moshe",
    role: "viewer",
  },
];

export default users;

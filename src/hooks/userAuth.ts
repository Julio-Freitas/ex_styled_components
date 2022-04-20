import { useContext } from "react";
import { ContextUser } from "../context/user/context";

export default function UseAuth() {
  const context = useContext(ContextUser);
  if (context) return context;
  throw new Error("Do not exist this user");
}

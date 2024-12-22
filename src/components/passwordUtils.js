import { supabase } from "./supabase";

export const verifyPassword = async (password) => {
  try {
    const { data, error } = await supabase.rpc("set_password", {
      key: "app.user_password",
      value: password,
    });

    if (error) {
      console.error("Error verifying password:", error);
      throw new Error("Invalid password or error fetching data.");
    }

    return data;
  } catch (err) {
    console.error("Unexpected error in verifyPassword:", err);
    throw new Error("Something went wrong. Please try again.");
  }
};

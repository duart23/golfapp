import { z } from "zod";

export const UserSchema = z.object({
  firstName : z.string(),
  lastName: z.string(),
  email : z.string().email(),
  password : z.string().min(8),
  provider : z.string().optional(),
  phoneNumber : z.string().min(10),
  dateOfBirth : z.string(),
  gender : z.enum(["male", "female"]),
  country : z.string(),
  handicap : z.number().optional(),
});

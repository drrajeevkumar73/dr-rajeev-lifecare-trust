import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const healerSchema = z.object({
  fullName: requiredString,
  dateofBirth: requiredString,
  gender: requiredString,
  mobileNumber: requiredString,
  emailID: requiredString.email("Invalid email"),
  fullAddress: requiredString,
  fieldofExpertise: requiredString,
  qualification: requiredString,
  experience: requiredString,
  specialization: requiredString,
});

export type HealerValues = z.infer<typeof healerSchema>;

export const signupSchema = z.object({
  displayname: requiredString,
  passwordHash: requiredString,
  phone: requiredString,
  email: requiredString.email("Invalid email"),
});

export type SignupValues = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  emailId: requiredString,
  passwordGive: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;

export const consultationSchema = z.object({
  date: requiredString,
  time: requiredString,
});

export type ConsultationValues = z.infer<typeof consultationSchema>;


export const contactSchema = z.object({
  fullname: requiredString,
  phone: requiredString,
  message:z.string().trim()
});

export type ContactValues = z.infer<typeof contactSchema>;

export const appoinmetSchema = z.object({
  fullname: requiredString,
  phone: requiredString,
  country:requiredString
});

export type AppoinmetValues = z.infer<typeof appoinmetSchema>;
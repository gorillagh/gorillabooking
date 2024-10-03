import { Router } from "express";
import { getAllBookings, get1Booking, addBooking, updateBooking, deleteBooking } from "../controllers/booking-controller.js";

export const bookingRouter = Router()

bookingRouter.get("/bookings", getAllBookings)

bookingRouter.get("/bookings/:1", get1Booking)

bookingRouter.post("/bookings", addBooking)

bookingRouter.patch("/bookings/:id",updateBooking)

bookingRouter.delete("/booking/:id", deleteBooking)


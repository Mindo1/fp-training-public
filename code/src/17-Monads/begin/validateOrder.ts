// Start here...

import { flow } from "effect";
import * as Either from "effect/Either";

export type OrderInput = Readonly<{
    customerId: string;
    quartity: number;
    paymentMethod: "CARD" | "PROMPTPAY";
}>

const validateCustomer = (input: OrderInput): Either.Either<OrderInput, string> => 
    input.customerId.startsWith("CUST-")
    ? Either.right(input)
    : Either.left("Invalid customer ID");

const validateInventory = (input: OrderInput): Either.Either<OrderInput, string> =>
    input.quartity > 0 && input.quartity <= 10
    ? Either.right(input)
    : Either.left("Invalid quantity");

const validatePayment = (input: OrderInput): Either.Either<OrderInput, string> =>
    input.paymentMethod === "CARD" || input.paymentMethod === "PROMPTPAY"
    ? Either.right(input)
    : Either.left("Invalid payment method");

export const processOrder = flow(
    validateCustomer,
    Either.flatMap(validateInventory),
    Either.flatMap(validatePayment)
);
import { OrderInput, processOrder } from "./validateOrder"
import * as Either from "effect/Either"
import { describe, expect, it } from "@jest/globals"

describe('Monads', () => {
  it("should return Right when all business validations pass", () => {
    const validOrder: OrderInput = {
      customerId: "CUST-123",
      quartity: 5,
      paymentMethod: "CARD"
    };
    expect(processOrder(validOrder)).toEqual(Either.right(validOrder));
  })

  it("should return Left when customer validation fails", () => {
    const invalidCustomerOrder: OrderInput = {
      customerId: "INVALID-123",
      quartity: 5,
      paymentMethod: "CARD"
    };
    expect(processOrder(invalidCustomerOrder)).toEqual(Either.left("Invalid customer ID"));
  })

  it("should return Left when inventory validation fails", () => {
    const invalidInventoryOrder: OrderInput = {
      customerId: "CUST-123",
      quartity: 0,
      paymentMethod: "CARD"
    };
    expect(processOrder(invalidInventoryOrder)).toEqual(Either.left("Invalid quantity"));
  })

  it("should short-circuit and keep the first Left error", () => {
    const invalidMultipleStepOrder: OrderInput = {
      customerId: "UNKNOWN",
      quartity: 99,
      paymentMethod: "PROMPTPAY"
    };
    expect(processOrder(invalidMultipleStepOrder)).toEqual(Either.left("Invalid customer ID"));
  })
})
import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import App from "./App";

const MOCK_NAME = "demo";
const MOCK_MAIL = "demo@test.com";
const originalFetch = global.fetch;

describe("Success Scenarios", () => {
  afterAll(() => {
    global.fetch = originalFetch;
  });

  //   test("should return successful response", async () => {
  //     global.fetch = () =>
  //       Promise.resolve({
  //         ok: true,
  //         status: 200,
  //         statusText: "Success",
  //         json: () => Promise.resolve({}),
  //       } as Response);
  //     const res = await App(MOCK_NAME, MOCK_MAIL);
  //     expect(res.success).toBeTruthy();
  //     expect(res.message).toBe("");
  //   });
  // });

  // describe("Failure Scenarios", () => {
  //   afterAll(() => {
  //     global.fetch = originalFetch;
  //   });

  //   test("should return http error", async () => {
  //     global.fetch = () =>
  //       Promise.resolve({
  //         ok: false,
  //         status: 400,
  //         statusText: "Bad Request",
  //         json: () => Promise.resolve({}),
  //       } as Response);
  //     const res = await App(MOCK_NAME, MOCK_MAIL);
  //     expect(res.success).toBeFalsy();
  //     expect(res.message).toBe("400 Bad Request");
  //   });

  //   test("should return server error when found in response", async () => {
  //     global.fetch = () =>
  //       Promise.resolve({
  //         ok: false,
  //         status: 400,
  //         statusText: "Bad Request",
  //         json: () => Promise.resolve({ errorMessage: "Bad from server" }),
  //       } as Response);
  //     const res = await App(MOCK_NAME, MOCK_MAIL);
  //     expect(res.success).toBeFalsy();
  //     expect(res.message).toBe("Bad from server");
  //   });
});

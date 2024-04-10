import { GET } from "../register/route.js";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

jest.mock("bcrypt", () => ({
  hashSync: jest.fn(() => "hashedPassword"),
}));

jest.mock("mongodb", () => {
  const mClient = {
    connect: jest.fn(),
    db: jest.fn().mockReturnThis(),
    collection: jest.fn().mockReturnThis(),
    insertOne: jest.fn().mockResolvedValue({}),
  };
  return { MongoClient: jest.fn(() => mClient) };
});

describe("GET function", () => {
  test("registers a user with valid input", async () => {
    // Mock request and response objects
    const req = { url: "/api/register?username=test&password=password" };
    const res = {
      json: jest.fn(),
    };

    // Call the GET function
    await GET(req, res);

    // Verify that the response was sent with the correct data
    expect(res.json).toHaveBeenCalledWith({ data: "true" });
  });
});

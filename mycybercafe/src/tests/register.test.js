import { GET } from "../app/api/register"; // Assuming your register.js file exports the GET function

describe("GET function", () => {
  test("registers a user with valid input", async () => {
    // check if the data is valid
    const req = { url: "/api/register?username=Jamie&password=passpass" };
    const res = {
      json: jest.fn(),
    };

    // Call the GET function
    await GET(req, res);

    // Verify that the response was sent with the correct data
    //if its sent with the correct data, the response will be true
    expect(res.json).toHaveBeenCalledWith({ data: "true" });
  });
});

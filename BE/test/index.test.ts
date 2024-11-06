import supertest from "supertest";
import { serverApp } from "../utils/serverApp";

describe("testing my default endpoint", () => {
  test("get '/'", () => {
    let result: any = supertest(serverApp).get("/");

    // console.log(result);

    expect(result).not.toBeNull();
    expect(result.method).toBe("GET");
  });
});

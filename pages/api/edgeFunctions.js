import { NextResponse } from "next/server";

/// define the function as edge , it will run a edge runtime environment with restricted access
export const config = {
  runtime: "edge", // this is a pre-requisites
};

export default (req) => {
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
};

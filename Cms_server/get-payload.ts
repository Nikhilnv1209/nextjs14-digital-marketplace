import dotenv from "dotenv";
import path from "path";
import type { InitOptions } from "payload/config";
import payload, { Payload } from "payload";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

let cached = (global as any).payloadClient;
if (!cached) {
  cached = (global as any).payloadClient = {
    client: null,
    promise: null,
  };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({initOptions} : Args = {}) : Promise<Payload> => {
  if(!process.env.PAYLOAD_SECRET){
    throw new Error("PAYLOAD_SECRET is not defined");
  }

  if(cached.client){
    return cached.client;
  }

  if(!cached.promise){
    cached.promise = payload.init({
      local: initOptions?.express ? false : true,
      secret: process.env.PAYLOAD_SECRET,
      ...(initOptions || {}),
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (error: unknown) {
    cached.promise = null;
    throw error;
  }

  return cached.client;

};

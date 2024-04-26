import { IConfig } from "@types";

export const Config = {
	IS_PROD: Bun.env.BUN_ENV === "production",
	HOST: Bun.env.HOST || "http://localhost",
	PORT: parseInt(Bun.env.PORT || "3000"),
	RELOAD_PORT: 3001
} as IConfig;

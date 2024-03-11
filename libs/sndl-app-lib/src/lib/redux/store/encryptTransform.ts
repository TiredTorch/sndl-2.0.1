import { enc } from "crypto-js";
import {
	decrypt,
	encrypt
} from "crypto-js/aes";
import stringify from "json-stringify-safe";
import { createTransform } from "reduxjs-toolkit-persist";

export type EncryptTransformConfig = {
	secretKey: string;
	onError?: (err: Error) => void;
};

export type TransformConfig = {
	whitelist?: Array<string>;
	blacklist?: Array<string>;
};

const makeError = (message: string) =>
	new Error(`@redux/toolkit-persist-transform-encrypt: ${message}`);

export const encryptTransform = (
	config: EncryptTransformConfig,
	transformConfig?: TransformConfig
) => {
	if (typeof config === "undefined") {
		throw makeError("No configuration provided.");
	}

	const { secretKey } = config;
	if (!secretKey) {
		throw makeError("No secret key provided.");
	}

	const onError =
		typeof config.onError === "function" ? config.onError : console.warn;

	return createTransform(
		(
			inboundState: unknown, _key: unknown
		) =>
			encrypt(
				stringify(inboundState),
				secretKey
			).toString(),
		(
			outboundState: unknown, _key: unknown
		) => {
			if (typeof outboundState !== "string") {
				return onError(makeError("Expected outbound state to be a string."));
			}

			try {
				const decryptedString = decrypt(
					outboundState,
					secretKey
				).toString(enc.Utf8);
				if (!decryptedString) {
					throw new Error("Decrypted string is empty.");
				}

				try {
					return JSON.parse(decryptedString);
				} catch {
					return onError(makeError("Failed to parse state as JSON."));
				}
			} catch {
				return onError(makeError("Could not decrypt state. Please verify that you are using the correct secret key."));
			}
		},
		transformConfig
	);
};

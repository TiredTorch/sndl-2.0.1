import { enc } from "crypto-js";
import {
	decrypt,
	encrypt
} from "crypto-js/aes";

export const KEY = import.meta.env.VITE_CRYPTO_JS_KEY ?? "crypto";

/**
 * Encrypt auth data and set to cookie
 * @param authData
 * @return encrypted token
 */
export const encryptUserInfo = (authData: string) => {
	if (authData) {
		const authDataForLocalStorage = encrypt(
			JSON.stringify(authData),
			KEY
		).toString();

		return authDataForLocalStorage;
	} else {
		throw Error("Data is empty");
	}
};

/**
 * Decrypt auth data
 * @param authData
 * @returns decrypted auth data or null
 */
export const decryptUserInfo = (authData: string): string | null => {
	if (authData) {
		const decryptedAuthData = decrypt(
			authData,
			KEY
		);
		return JSON.parse(decryptedAuthData.toString(enc.Utf8));
	}

	return null;
};

export interface LoginDto {
	email: string;
	password: string;
}

export interface RegisterDto {
	name: string;
	email: string;
	avatar: string;
	status: string;
	password: string;
}

export interface ForgotPasswordDto {
	email: string
}

export interface ResetPasswordDto {
	token: string;
	password: string;
	confirmPassword: string;
}

export interface TokenResponse {
	token: string
}
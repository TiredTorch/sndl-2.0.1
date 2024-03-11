import { JwtService } from "@nestjs/jwt";

export const getUserIdFromToken = async (
	token: string, jwtService: JwtService
) => {
	const { userId } = await jwtService.verifyAsync(token);

	return userId;
};
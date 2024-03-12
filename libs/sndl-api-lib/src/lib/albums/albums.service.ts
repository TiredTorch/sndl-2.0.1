import {
	Injectable,
	NotImplementedException
} from "@nestjs/common";

@Injectable()
export class AlbumsService {
	public async getAlbums() {
        
		throw new NotImplementedException();
	}

	public async getAlbum() {
        
		throw new NotImplementedException();
	}

	public async getUserAlbums() {
		throw new NotImplementedException();

	}

	public async createAlbum() {
		throw new NotImplementedException();

	}

	public async addSongToAlbum() {
		throw new NotImplementedException();

	}
}

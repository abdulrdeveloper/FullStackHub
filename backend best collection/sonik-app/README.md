# Sonik

Sonik is a music platform backend with artist uploads, albums, authentication, and paginated music browsing. A responsive frontend is planned in the `Frontend` directory.

## Project Structure

```text
Backend/   Express API, MongoDB models, JWT authentication, uploads
```

## Backend Setup

```bash
cd Backend
pnpm install
cp .env.example .env
pnpm dev
```

The API runs on `http://localhost:3000`.

Required environment variables are documented in `Backend/.env.example`.

## Authentication

Register or log in through:

```text
POST /api/auth/register
POST /api/auth/login
```

The server stores the JWT in an HTTP-only `token` cookie. Postman must keep this cookie for protected requests.

Artist registration example:

```json
{
  "username": "nova_carter",
  "email": "nova.carter@example.com",
  "password": "Nova@12345",
  "type": "artist"
}
```

## Music API

Upload one music file as multipart form data:

```text
POST /api/music/upload
```

Form fields:

- `title`: text
- `music`: file

Fetch music with pagination:

```text
GET /api/music?page=1&limit=10
```

The response includes `pagination.hasMore`. A frontend can request the next page when the user reaches the bottom of the list.

## Album API

Create an album as JSON. Use music IDs returned by music upload requests:

```text
POST /api/music/album
```

```json
{
  "title": "Nova After Midnight",
  "musics": ["MUSIC_ID_1", "MUSIC_ID_2"],
  "releaseDate": "2026-09-11"
}
```

Fetch album summaries:

```text
GET /api/music/albums
```

Fetch one album with its populated music details:

```text
GET /api/music/albums/ALBUM_ID
```

## Testing

Use Postman with the API routes above. Clear the `token` cookie before testing unauthenticated behavior, then log in again before testing protected routes.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).

# Glimpse

A focused visual feed for publishing daily technology updates, world news, and noteworthy moments.

Glimpse keeps the publishing flow deliberately small: upload an image, add a caption, and let the feed do the rest. Posts are stored in MongoDB, images are uploaded through ImageKit, and the React client presents the latest collection in a responsive, theme-aware interface.

## What It Includes

- A responsive feed for image-led posts
- Randomized feed order on each fetch
- Image and caption publishing flow
- ImageKit-backed media storage
- MongoDB persistence
- Light and dark themes with saved preference
- Production-ready API URL configuration through Vite environment variables
- Separate development, lint, build, and preview workflows

## Architecture

```text
Glimpse/
├── Backend/
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── db/
│       ├── model/
│       └── services/
└── Frontend/
    ├── index.html
    └── src/
        ├── App.jsx
        ├── main.jsx
        └── pages/
            ├── Create.jsx
            └── Posts.jsx
```

The backend exposes the API and owns persistence and image uploads. The frontend is a Vite-powered React application that consumes that API through Axios.

## Requirements

- Node.js 18 or newer
- pnpm 11 or compatible
- A MongoDB database
- An ImageKit account and private key

## Local Setup

Clone the repository, then install dependencies in both applications:

```bash
cd Backend
pnpm install

cd ../Frontend
pnpm install
```

### Backend environment

Create `Backend/.env`:

```env
PORT=3000
MONGODB_URI=mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=imagekit_private_key
```

Start the API from the `Backend` directory:

```bash
pnpm dev
```

The API runs on `http://localhost:3000` by default.

Start the frontend from the `Frontend` directory:

```bash
pnpm dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## API Reference

### List posts

```http
GET /posts
```

Response shape:

```json
{
  "message": "Posts fetched successfully",
  "posts": []
}
```

### Create a post

```http
POST /create-post
Content-Type: multipart/form-data
```

Form fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | File | Yes | PNG, JPEG, or WEBP image |
| `caption` | String | No | Short description of the post |

The endpoint uploads the image to ImageKit, stores the resulting URL and caption in MongoDB, and returns the created post.

## Project Commands

Run commands from the relevant application directory.

### Frontend

```bash
pnpm dev       # Start Vite development server
pnpm lint      # Run ESLint
pnpm build     # Create a production build
pnpm preview   # Preview the production build
```

### Backend

```bash
pnpm dev       # Start the API with Node watch mode
pnpm start     # Start the API normally
```

## Production Notes

Set `VITE_API_URL` to the deployed backend URL in the frontend hosting provider before building:

```env
VITE_API_URL=https://api.example.com
```

Set the backend `MONGODB_URI` and `IMAGEKIT_PRIVATE_KEY` as server-side environment variables. Do not commit either `.env` or `.env.local` files. The backend currently enables CORS so the separately hosted frontend can call the API.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Author & Links

Built by **Abdul Rahman | abdulrdeveloper**.

- Portfolio: [abdulrdeveloper.me](https://abdulrdeveloper.me)
- Hashnode: [blog.abdulrdeveloper.me](https://abdulrdeveloper.hashnode.dev)
- LinkedIn: [linkedin.com/in/abdulrdeveloper](https://www.linkedin.com/in/abdulrdeveloper)

## License

Glimpse is available under the [MIT License](LICENSE).

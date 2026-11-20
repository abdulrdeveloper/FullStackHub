<p align="center">
  <img src="./logo.jpg" alt="CheckMillion logo" width="160" />
</p>

# ✅ CheckMillion

A real-time, multiplayer **checkbox grid** inspired by "One Million Checkboxes". Every click is synced instantly to everyone who has the page open, using **Socket.IO** for the live connection and **Redis (Valkey)** for shared state and pub/sub.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API & Socket Events](#-api--socket-events)
- [Roadmap](#-roadmap)
- [Author](#-author)

---

## ✨ Features

- ✅ **Real-time sync** - A checkbox toggled in one browser tab updates in every other tab immediately.
- ✅ **Shared state in Redis** - The grid is stored in Redis, so a page refresh or a new visitor sees the current state.
- ✅ **Redis pub/sub fan-out** - Every server instance subscribes to the same channel, so changes reach clients connected to any instance.
- ✅ **Per-socket rate limiting** - One change per socket every 5.5 seconds, with a `server:error` event telling the client to wait.
- ✅ **Health check** - `GET /health` for uptime monitoring.
- ✅ **Docker-ready Redis** - A single `docker compose up` starts a local Valkey instance.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Node.js (ESM)** | JavaScript runtime |
| **Express 5** | HTTP server and static file hosting |
| **Socket.IO** | WebSocket transport with automatic fallbacks and reconnection |
| **ioredis** | Redis client (state, publisher and subscriber connections) |
| **Valkey** | Redis-compatible store, run through Docker |
| **pnpm** | Package manager |

---

## 🔄 How It Works

```text
 Browser A ──┐                                   ┌── Browser A
 Browser B ──┼─► Socket.IO ─► Node server ─► Redis (state + pub/sub) ─► every server instance ─► Socket.IO ─┼── Browser B
 Browser C ──┘                                   └── Browser C
```

1. The page loads and calls `GET /checkboxes` to fetch the current grid from Redis, then renders it.
2. A click emits `client:checkbox:change` with `{ index, checked }`.
3. The server checks the sender's cooldown. If the socket changed a box less than 5.5 seconds ago, it replies with `server:error` and stops.
4. Otherwise the server writes the new state to Redis and publishes the change on the `internal-server:checkbox:change` channel.
5. Every server instance is subscribed to that channel and broadcasts `server:checkbox:change` to all of its connected clients.

The rate-limit counters live in each instance's memory, so the cooldown is tracked per server process.

---

## 📁 Project Structure

```text
checkmillion/
├── index.js               # Express + Socket.IO server, rate limiting, pub/sub wiring
├── redis-connection.js    # Redis clients: state, publisher, subscriber
├── docker-compose.yml     # Local Valkey service on port 6379
├── package.json           # Scripts and dependencies
├── pnpm-lock.yaml         # Deterministic dependency lock
├── logo.jpg               # Project logo
└── public/
    └── index.html         # Client UI: renders the grid and listens to socket events
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+, pnpm and Docker.

```bash
# 1. Clone and enter the project
git clone https://github.com/abdulrdeveloper/FullStackHub.git
cd "FullStackHub/backend best collection/checkmillion"

# 2. Start Redis (Valkey)
docker compose up -d

# 3. Install dependencies
pnpm install

# 4. Run the server with auto-reload
pnpm dev
```

Open [http://localhost:8000](http://localhost:8000) in two browser tabs and toggle a checkbox in one of them.

Use `pnpm start` to run without file watching.

---

## 🔐 Environment Variables

| Variable | Default | Description |
| :--- | :--- | :--- |
| `PORT` | `8000` | Port the HTTP and Socket.IO server listens on |

Redis is expected at `localhost:6379`, which is where `docker-compose.yml` exposes it.

---

## 📡 API & Socket Events

### HTTP

| Method | Endpoint | Response |
| :--- | :--- | :--- |
| `GET` | `/health` | `{ "healthy": true }` |
| `GET` | `/checkboxes` | `{ "checkboxes": [false, true, ...] }` |

### Socket.IO

| Event | Direction | Payload |
| :--- | :--- | :--- |
| `client:checkbox:change` | client → server | `{ index, checked }` |
| `server:checkbox:change` | server → all clients | `{ index, checked }` |
| `server:error` | server → one client | `{ error }` |

---

## 🗺️ Roadmap

The grid currently has **100 checkboxes** (`CHECKBOX_SIZE` in `index.js`). Getting to a full million needs a few changes:

- [ ] Scale the grid to 1,000,000 checkboxes
- [ ] Store state as a Redis bitmap (`SETBIT` / `GETBIT`) instead of a JSON array
- [ ] Make state updates atomic so simultaneous clicks cannot overwrite each other
- [ ] Render only the visible part of the grid (virtualized scrolling)
- [ ] Remove rate-limit entries when a socket disconnects

---

## 👤 Author

**Abdul Rahman** - [@abdulrdeveloper](https://github.com/abdulrdeveloper)

Released under the [MIT License](./LICENSE).

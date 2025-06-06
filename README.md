# 🎬 Movie Explorer

A simple movie browsing app where users can search for movies, view detailed information, and add favorites.

## ✨ Features

- 🔍 **Search Movies** — Find movies by title using the TMDB API.
- 📄 **Movie Details** — View rich information about each movie, including poster, genre, and overview.
- ❤️ **Favorites** — Mark movies you love and keep track of your favorites.

## 🚀 Tech stack

The App was created with the following tech stack:

- Vite
- React
- React Router
- Redux Toolkit
- RTK Query

🔐 This project uses a public API token via import.meta.env.VITE_API_TOKEN, which is exposed in the frontend code.
This approach is used only for demonstration and educational purposes.

## Project start

1. You need to install all the dependencies by running `yarn`
2. You need to create an .env.local file with the `VITE_API_TOKEN`
3. You can run the project by running `yarn dev`

## 🚀 Docker

1. Create `.env.production` file containing API token
2. Build docker image with `docker build -t movies-search .`
3. Run docker file with `docker run -t -p 8080:80 movies-search` in terminal mode

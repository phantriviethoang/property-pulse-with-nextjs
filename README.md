# Property Pulse

Property Pulse is a real estate listing app built with Next.js. Users can browse properties, save favorites, send messages, and manage their own listings.

## Features

- Property browsing and detail pages
- Add, edit, and delete listings
- Google sign in with NextAuth
- Bookmarks and saved properties
- Messaging between users
- Search, pagination, map view, and photo gallery

## Tech Stack

- Next.js 14
- React 18
- MongoDB and Mongoose
- NextAuth
- Cloudinary
- Tailwind CSS

## Requirements

- Node.js 18+
- npm
- MongoDB database
- Google OAuth credentials
- Cloudinary account
- Mapbox access token

## Setup

```bash
npm install
```

Create a `.env.local` file and add the values you need:

```bash
MONGODB_URI=your_mongodb_uri
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
```

## Run

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

```bash
npm run build
npm start
```

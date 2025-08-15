# Expo ASS Subtitle Player (React Native + Web)

This project demonstrates accurate **.ass subtitle** rendering on **Desktop Web and Mobile Web** using **subtitles-octopus (WebAssembly libass)**, inside an **Expo (React Native) app**.  
On iOS/Android, the video plays via `expo-av` with a documented path to extend for full ASS via a WebView overlay (optional bonus).

## Features

- Plays a sample video (you provide `assets/sample.mp4`).
- Loads and renders `.ass` subtitles **without converting formats**, preserving styles, timing, and positioning **on Web**.
- Works on **Desktop Web** and **Mobile Web** (via React Native Web).
- Clean, modular code with platform-specific components:
  - `src/components/AssVideoPlayer.web.tsx` – Web implementation using `subtitles-octopus`.
  - `src/components/AssVideoPlayer.native.tsx` – Native fallback using `expo-av` (bonus path documented).

## Quick Start

1. **Install dependencies**
   ```bash
   npm i
   ```

2. **Copy the SubtitlesOctopus worker+wasm** (required for Web):
   ```bash
   # Copy the real worker/wasm from the installed package to /public
   cp node_modules/subtitles-octopus/dist/subtitles-octopus-worker.js public/subtitles-octopus-worker.js
   cp node_modules/subtitles-octopus/dist/subtitles-octopus-worker.wasm public/subtitles-octopus-worker.wasm
   ```

3. **Add your media files**
   - Put your video file at `assets/sample.mp4`.
   - Put your `.ass` file at `assets/sample.ass`.
   - Or update the paths in `App.tsx` to point at your filenames.

   > Using local assets avoids CORS issues you might encounter with Google Drive URLs in a browser.

4. **Run on Web**
   ```bash
   npm run web
   ```
   Open the URL from the terminal in your browser. You should see the player with working ASS subtitles.

5. **Run on Android/iOS (optional)**
   ```bash
   npm run android
   # or
   npm run ios
   ```
   > Native view will show the video via `expo-av`. For full ASS parity on native, see **Native Bonus** below.

## Native Bonus (Optional): Full ASS on iOS/Android

For complete `.ass` rendering on native:
- Create a transparent `WebView` overlay (via `react-native-webview`) on top of the `expo-av` video.
- Load a minimal HTML that runs `subtitles-octopus` inside the WebView, pointing to the same `.ass` file and fonts.
- Sync `currentTime` and `pause/play/seek` by posting messages between the RN layer and the WebView.

This repo already includes `react-native-webview`. You can extend `AssVideoPlayer.native.tsx` to wire this up (kept simple here for focus on the web requirement).

## Notes & Tips

- **Fonts**: If your `.ass` references specific fonts, include them under `public/fonts` and reference them via the `fonts` option in `AssVideoPlayer.web.tsx`.
- **Seeking + Pause/Play Sync**: `subtitles-octopus` attaches to the `<video>` element, so seeking and toggling play/pause remain in sync automatically on the Web implementation.
- **CORS**: Hosting media on third-party domains can cause CORS issues in Web. Prefer local assets during development.

## Build & Deploy (Web)

1. Build static web output:
   ```bash
   npm run build:web
   ```
   This outputs static files to `dist/`.

2. Serve locally (preview production build):
   ```bash
   npm run serve:web
   ```

3. **Live project link options:**
   - Deploy `dist/` to GitHub Pages, Netlify, or Vercel.
   - For GitHub Pages, push this repo to GitHub, enable Pages on the `dist` branch or `/docs` folder, and update your project link accordingly.

## File Structure

```
expo-ass-player/
├─ App.tsx
├─ app.json
├─ babel.config.js
├─ index.js
├─ package.json
├─ public/
│  ├─ subtitles-octopus-worker.js
│  └─ subtitles-octopus-worker.wasm
├─ assets/
│  ├─ sample.mp4            # add your video here
│  ├─ sample.ass            # add your .ass here
│  ├─ icon.png
│  ├─ splash.png
│  └─ favicon.png
└─ src/
   └─ components/
      ├─ AssVideoPlayer.web.tsx
      └─ AssVideoPlayer.native.tsx
```

## Demo Ideas (for your submission)

- Add a short screen recording (GIF/MP4) of the Web player with the `.ass` track visible.
- Include links in your README:
  - **Live project link** (GitHub Pages/Netlify/Vercel)
  - **Link of captioned video** (host the video with burned-in subs or show a recording of the overlay).

## License

MIT

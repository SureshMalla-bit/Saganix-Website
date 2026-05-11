import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Serve static folders from root
  app.use("/Videos", express.static(path.join(process.cwd(), "Videos")));
  app.use("/Images", express.static(path.join(process.cwd(), "Images")));

  // API Route to list hero videos
  app.get("/api/videos/hero", (req, res) => {
    const heroPagePath = path.join(process.cwd(), "Videos", "heroPage");
    try {
      if (!fs.existsSync(heroPagePath)) {
        return res.json([]);
      }
      const files = fs.readdirSync(heroPagePath);
      // Filter for mp4 files and prepend the path
      const videos = files
        .filter(file => file.endsWith(".mp4"))
        .map(file => `/Videos/heroPage/${file}`);
      
      // Sort alphabetically to ensure consistent sequence (hero1, hero2, hero3...)
      videos.sort();
      
      res.json(videos);
    } catch (error) {
      console.error("Error reading hero videos:", error);
      res.status(500).json({ error: "Failed to read videos" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

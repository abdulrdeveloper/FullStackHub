import musicModel from "../models/music.model.js";
import { uploadFile } from "../services/storage.service.js";
import albumModel from "../models/album.model.js";

async function createMusic(req, res) {
  const { title } = req.body;
  const file = req.file;

  if (!file || !title) {
    return res.status(400).json({ message: "File and title are required" });
  }

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });

  return res.status(201).json({
    message: "Music created successfully",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
    },
  });
}


async function createAlbum(req, res) {
  const { title, musics, releaseDate } = req.body;

  if (!title || !releaseDate || !Array.isArray(musics) || musics.length === 0) {
    return res
      .status(400)
      .json({ message: "Title, release date, and musics are required" });
  }

  const album = await albumModel.create({
    title,
    musics,
    releaseDate,
    artist: req.user.id,
  });

  return res.status(201).json({
    message: "Album created successfully",
    album: {
      id: album._id,
      title: album.title,
      musics: album.musics,
      releaseDate: album.releaseDate,
      artist: album.artist,
    },
  });
}


async function getAllMusic(req, res) {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(req.query.limit) || 10, 1), 50);
    const skip = (page - 1) * limit;

    const [musics, total] = await Promise.all([
      musicModel
        .find()
        .sort({ _id: -1 })
        .skip(skip)
        .limit(limit)
        .populate("artist", "username"),
      musicModel.countDocuments(),
    ]);

    return res.status(200).json({
      message: "Music fetched successfully",
      musics,
      pagination: {
        page,
        limit,
        total,
        hasMore: skip + musics.length < total,
      },
    });
  } catch (error) {
    console.error("Error fetching music:", error);
    return res.status(500).json({ message: "Failed to fetch music" });
  }
}


async function getAllAlbums(_req, res) {
  try {
    const albums = await albumModel.find().select("title releaseDate artist").populate("artist", "username");
    return res.status(200).json({
      message: "Albums fetched successfully",
      albums: albums,
    });
  } catch (error) {
    console.error("Error fetching albums:", error);
    return res.status(500).json({ message: "Failed to fetch albums" });
  }
}


async function getAlbumById(req, res) {
  const albumId = req.params.albumId;
  try {
    const album = await albumModel.findById(albumId).populate("musics", "title uri").populate("artist", "username");
    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }
    return res.status(200).json({
      message: "Album fetched successfully",
      album: album,
    });
  } catch (error) {
    console.error("Error fetching album:", error);
    return res.status(500).json({ message: "Failed to fetch album" });
  }
};

export { createMusic, createAlbum, getAllMusic, getAllAlbums, getAlbumById };

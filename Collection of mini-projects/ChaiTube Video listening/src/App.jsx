import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(40);
  const tags = [
    "All",
    "javascript",
    "reactjs",
    "nextjs",
    "typescript",
    "nodejs",
    "python",
  ];
  const [activeTag, setActiveTag] = useState("All");

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/youtube/videos?limit=157",
      );
      const data = await response.json();
      const shuffleData = data.data.data;
      console.log(shuffleData);
      const shuffledVideos = shuffleData.sort(() => Math.random() - 0.5);
      setVideos(shuffledVideos);
    } catch (error) {
      console.error(error);
    }
  };

  const filtered = videos.filter((video) =>
    video.items.snippet.title.toLowerCase().includes(search.toLowerCase())
  ).filter((video) =>
    activeTag === "All" || video.items.snippet.tags?.includes(activeTag)
  );

  function formatViews(count) {
    if (!count) return "0";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count;
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <div className="app-header">
        <div className="logo-title">
          <img src="/logo.png" alt="ChaiLearn Logo" className="logo" />
          <h1 className="app-title">ChaiLearn</h1>
        </div>
        <input
          type="search"
          placeholder="Search Videos..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="tags-container">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={activeTag === tag ? "tag-btn active" : "tag-btn"}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="videos-grid">
        {filtered.slice(0, visible).map((video) => (
          <div key={video.items.id} className="video-card">
            <a
              className="video-link"
              href={`https://youtube.com/watch?v=${video.items.id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="video-thumb"
                src={video.items.snippet.thumbnails.high.url}
                alt={video.items.snippet.title}
              />
              <h3 className="video-title">{video.items.snippet.title}</h3>
              <div className="video-meta-row">
                <p className="video-channel">
                  {video.items.snippet.channelTitle}
                </p>
                <div className="video-meta-right">
                  <p className="video-views">{formatViews(video.items.statistics?.viewCount)} views</p>
                  <p className="video-date">
                    {new Date(video.items.snippet.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                      },
                    )}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      {visible < filtered.length && (
        <button
          className="load-more-btn"
          onClick={() => setVisible(visible + 40)}
        >
          Load More
        </button>
      )}
    </>
  );
}

export default App;

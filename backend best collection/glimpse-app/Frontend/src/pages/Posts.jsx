import { useEffect, useState } from 'react';
import axios from 'axios';
import { Aperture, ImagePlus, LoaderCircle, Moon, Plus, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
});

function shufflePosts(posts) {
	return [...posts].sort(() => Math.random() - 0.5);
}

function Header() {
	const [darkMode, setDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem('glimpse-theme');
		return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode);
		localStorage.setItem('glimpse-theme', darkMode ? 'dark' : 'light');
	}, [darkMode]);

	return (
		<header className="topbar">
			<Link className="brand" to="/" aria-label="Glimpse home">
				<span className="brand-mark"><Aperture size={17} strokeWidth={2.4} /></span>
				<span>Glimpse</span>
			</Link>
			<div className="header-actions">
				<Link className="create-button" to="/create" aria-label="Create a post" title="Create a post">
					<Plus size={21} />
				</Link>
				<button className="theme-button" type="button" onClick={() => setDarkMode((current) => !current)} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`} title={`Switch to ${darkMode ? 'light' : 'dark'} theme`}>
					{darkMode ? <Sun size={18} /> : <Moon size={18} />}
				</button>
			</div>
		</header>
	);
}

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		let active = true;
		async function loadPosts() {
			try {
				const { data } = await api.get('/posts');
				if (active) setPosts(shufflePosts(data.posts || []));
			} catch {
				if (active) setError('We could not load the feed. Please try again.');
			} finally {
				if (active) setLoading(false);
			}
		}
		loadPosts();

		return () => { active = false; };
	}, []);

	return (
		<div className="app-shell">
			<Header />
			<main className="feed-page">
				<div className="feed-intro">
					<div>
						<p className="eyebrow">Your visual journal</p>
						<h1>Small moments,<br /><em>beautifully shared.</em></h1>
					</div>
					{!loading && <span className="post-count">{posts.length} {posts.length === 1 ? 'post' : 'posts'}</span>}
				</div>

				{loading && <div className="state-box"><LoaderCircle className="spin" size={24} /><span>Gathering moments...</span></div>}
				{!loading && error && <div className="state-box error-state">{error}</div>}
				{!loading && !error && posts.length === 0 && (
					<div className="empty-state">
						<ImagePlus size={28} />
						<h2>Your feed is waiting</h2>
						<p>Share the first moment with your community.</p>
						<Link className="primary-button" to="/create">Create a post</Link>
					</div>
				)}
				{!loading && !error && posts.length > 0 && (
					<section className="post-grid" aria-label="Posts">
						{posts.map((post) => (
							<article className="post-card" key={post._id}>
								<div className="post-image-wrap">
									<img src={post.image} alt={post.caption || 'Shared moment'} className="post-image" />
								</div>
								{post.caption && <p className="caption">{post.caption}</p>}
								<time className="post-date" dateTime={post.createdAt}>
									{post.createdAt ? new Date(post.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
								</time>
							</article>
						))}
					</section>
				)}
			</main>
		</div>
	);
}

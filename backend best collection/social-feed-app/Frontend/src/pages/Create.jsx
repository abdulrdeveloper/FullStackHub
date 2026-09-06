import { useEffect, useState } from 'react';
import axios from 'axios';
import { Aperture, ArrowLeft, LoaderCircle, Moon, Sun, Upload } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
});

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
				<Link className="back-link" to="/" aria-label="Back to feed" title="Back to feed"><ArrowLeft size={19} /></Link>
				<button className="theme-button" type="button" onClick={() => setDarkMode((current) => !current)} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`} title={`Switch to ${darkMode ? 'light' : 'dark'} theme`}>
					{darkMode ? <Sun size={18} /> : <Moon size={18} />}
				</button>
			</div>
		</header>
	);
}

export default function Create() {
	const navigate = useNavigate();
	const [image, setImage] = useState(null);
	const [caption, setCaption] = useState('');
	const [preview, setPreview] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState('');

	function handleImageChange(event) {
		const file = event.target.files?.[0];
		if (!file) return;
		setImage(file);
		setPreview(URL.createObjectURL(file));
		setError('');
	}

	async function handleSubmit(event) {
		event.preventDefault();
		if (!image) {
			setError('Please choose an image first.');
			return;
		}

		const formData = new FormData();
		formData.append('image', image);
		formData.append('caption', caption.trim());
		setSubmitting(true);
		setError('');

		try {
			await api.post('/create-post', formData);
			navigate('/');
		} catch {
			setError('Your post could not be shared. Please try again.');
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<div className="app-shell create-shell">
			<Header />
			<main className="create-page">
				<div className="create-heading">
					<p className="eyebrow">Make it yours</p>
					<h1>Share a moment.</h1>
					<p className="subheading">A picture, a feeling, a little piece of today.</p>
				</div>
				<form className="create-form" onSubmit={handleSubmit}>
					<label className={`upload-area ${preview ? 'has-preview' : ''}`} htmlFor="image-upload">
						{preview ? <img src={preview} alt="Selected preview" /> : <><span className="upload-icon"><Upload size={22} /></span><strong>Choose an image</strong><span>JPG, PNG or WEBP</span></>}
						<input id="image-upload" type="file" accept="image/png,image/jpeg,image/webp" onChange={handleImageChange} />
					</label>
					<label className="field-label" htmlFor="caption">Caption <span>Optional</span></label>
					<textarea id="caption" value={caption} onChange={(event) => setCaption(event.target.value)} placeholder="Write something about this moment..." maxLength={280} rows={4} />
					{error && <p className="form-error">{error}</p>}
					<button className="primary-button submit-button" type="submit" disabled={submitting}>
						{submitting ? <><LoaderCircle className="spin" size={18} /> Sharing...</> : 'Share post'}
					</button>
				</form>
			</main>
		</div>
	);
}
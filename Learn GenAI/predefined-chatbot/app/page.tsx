import MessageList from "./components/main/MessageList";

export default function Home() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-logo">
          <span className="logo-emoji">☕</span>
          <span className="logo-text">HiteshBot</span>
        </div>
      </header>
      
      <MessageList />
      
      <footer className="app-footer">
        <p>HiteshBot is a predefined chatbot and may make mistakes.</p>
      </footer>
    </div>
  );
}

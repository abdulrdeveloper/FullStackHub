import MessageList from "./components/main/MessageList";

export default function Home() {
  return (
    <div className="app-container">
      <header className="app-header">
          <span className="logo-emoji">AbdulBot</span>
      </header>
      
      <MessageList />
      
      <footer className="app-footer">
        <p>© 2026 Abdul Rahman. All rights reserved.</p>
      </footer>
    </div>
  );
}

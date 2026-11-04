import "./index.css";
import Quiz from "./components/quiz";

function App() {
    return (
        <div className="page-shell">

            {/* ASMA Brand - Outside Quiz Card */}
            <div className="brand-logo">
                <span>🦋</span>
                <span>ASMA</span>
            </div>

            <div className="App-countainer">
                <h1>Quiz App</h1>
                <p className="subtitle">Test Your Geography Knowledge</p>

                <Quiz />
            </div>

            {/* Developer Signature - Outside Quiz Card */}
            <div className="developer-signature">
                Designed & Developed by <strong>ASMA ZUBAIRI</strong> ♥
            </div>

        </div>
    );
}

export default App;
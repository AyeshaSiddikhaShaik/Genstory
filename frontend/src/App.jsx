import "./App.css";
import {
BrowserRouter as Router,
Routes,
Route,
useNavigate,
} from "react-router-dom";

import StoryLoader from "./components/StoryLoader";
import StoryGenerator from "./components/StoryGenerator";
import Galaxy from "./effects/Galaxy";

function Home() {
const navigate = useNavigate();

return ( <header className="hero-section"> <div className="hero-glow"></div>

```
  <div className="hero-content">
    <p className="hero-eyebrow">YOUR IMAGINATION, UNLIMITED</p>

    <h1 className="hero-title">
      TaleForge <span>AI</span>
    </h1>

    <h2 className="hero-heading">
      Your Next Adventure Starts Here
    </h2>

    <p className="hero-subtitle">
      Transform your ideas into immersive, AI-powered adventures.
      Choose your theme, explore unexpected twists, and discover
      a story shaped by your imagination.
    </p>

    <button
      className="generate-btn"
      onClick={() => navigate("/generate")}
    >
      Start Your Adventure <span aria-hidden="true">→</span>
    </button>

    <p className="hero-caption">
      Every prompt opens the door to a new world.
    </p>
  </div>
</header>
```

);
}

function App() {
return ( <div className="app-wrapper"> <Galaxy
     mouseRepulsion={false}
     mouseInteraction={false}
     density={1}
     glowIntensity={0.3}
     saturation={0}
     hueShift={140}
     twinkleIntensity={0.3}
     rotationSpeed={0.1}
     repulsionStrength={2}
     autoCenterRepulsion={0}
     starSpeed={0.5}
     speed={1}
   />

```
  <Router>
    <div className="app-container">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<StoryGenerator />} />
          <Route path="/story/:id" element={<StoryLoader />} />
        </Routes>
      </main>
    </div>
  </Router>
</div>
```

);
}

export default App;

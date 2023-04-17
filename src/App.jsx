import './App.css';

function App() {
  return (
    <div className="App">
      <div className="w-full pointer-events-none">
        <video className="w-full h-auto md:max-h-[80vmin] -translate-y-40" preload autoPlay playsInline muted>
          <source src="./jam-logo-square.mp4" type="video/mp4" />
          <source src="./jam-logo-square.webm" type="video/webm" />
        </video>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full px-4 md:px-10 max-w-4xl animate-fade-in text-lg md:text-xl leading-relaxed -mt-[14rem] md:-mt-[18rem] relative z-10">
          <p className="text-white text-center py-3">
            JAM is a full-service talent management company representing clients across entertainment, sports, fashion, and music. Founded in 2018, JAM currently has offices in Los Angeles, London, and Paris.
          </p>

          <p className="text-white text-center py-3">
            <a href="mailto:info@jamgmt.com">info@jamgmt.com</a>
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;

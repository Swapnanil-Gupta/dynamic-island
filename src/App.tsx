import Controls from "./components/Controls";
import DynamicIsland from "./components/DynamicIsland";

function App() {
  return (
    <div className="max-w-2xl px-4 py-12 mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight text-center scroll-m-20 lg:text-6xl">
        Dynamic Island
      </h1>
      <div className="flex flex-col gap-10">
        <div className="mt-8 h-60">
          <DynamicIsland />
        </div>
        <Controls />
        <p className="font-medium text-center text-neutral-500 text-balance">
          Apple's Dynamic Island has some of the smoothest and coolest
          animations on an iPhone. The snappy and elastic animations make it
          look very lively and natural. This app tries to emulate those
          animations on web. Source code is available on{" "}
          <a
            className="underline"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Swapnanil-Gupta/apple-dynamic-island"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;

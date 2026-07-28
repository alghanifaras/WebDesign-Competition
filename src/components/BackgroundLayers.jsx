export default function BackgroundLayers() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* LAYER 0: Sky Background Base */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #E8F4ED 0%, #F6FAF5 50%, #F0F8F3 100%)",
        }}
      />
      {/* LAYER 1 */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          opacity: 0.6,
          backgroundPosition: "center 85%",
          backgroundSize: "cover",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      />
      {/* LAYER 2: Mist/Haze overlay */}
      <div
        aria-hidden
        className="absolute -inset-10 scale-110"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 40%, rgba(255,255,255,0.4) 0%, rgba(255,240,220,0.15) 40%, transparent 70%)" +
            ",radial-gradient(700px 250px at 30% 50%, rgba(200,240,220,0.12) 0%, transparent 60%)",
          filter: "blur(32px)",
          backdropFilter: "blur(4px)",
        }}
      />
      {/* LAYER 4: Mid-ground landscape detail */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          opacity: 0.8,
          backgroundPosition: "center 80%",
          backgroundSize: "cover",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 10%, black 40%, black 90%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 10%, black 40%, black 90%, transparent 100%)",
        }}
      />
      {/* LAYER 5: Grass Foreground */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          opacity: 0.95,
          WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, black 75%, black 100%)",
          maskImage: "linear-gradient(to bottom, transparent 40%, black 75%, black 100%)",
        }}
      />
    </div>
  );
}
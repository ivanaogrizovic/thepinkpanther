import "./loading-fallback.scss";

export default function LoadingFallback() {
  return (
    <div className="loading-fallback">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
}

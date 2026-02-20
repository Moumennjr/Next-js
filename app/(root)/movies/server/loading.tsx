export default function Loading() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="h-8 w-full animate-pulse rounded bg-gray-200" />
      ))}
    </div>
  );
}
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
      {children}
    </div>
  );
}

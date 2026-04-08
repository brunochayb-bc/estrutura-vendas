export function Card({ children, className }: any) {
  return <div className={className}>{children}</div>;
}

export function CardHeader({ children, className }: any) {
  return <div className={className}>{children}</div>;
}

export function CardContent({ children, className }: any) {
  return <div className={className}>{children}</div>;
}

export function CardTitle({ children, className }: any) {
  return <h2 className={className}>{children}</h2>;
}

export function CardDescription({ children, className }: any) {
  return <p className={className}>{children}</p>;
}

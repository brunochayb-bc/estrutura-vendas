export function Progress({ value, className }: any) {
  return (
    <div className={className}>
      <div style={{ width: `${value}%`, height: '100%', background: '#2563eb' }} />
    </div>
  );
}

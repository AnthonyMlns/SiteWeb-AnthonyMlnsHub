type HighlightProps = {
  children: React.ReactNode;
};

export default function Highlight({ children }: HighlightProps) {
  return (
    <div className="c-highlight">
      <p>{children}</p>
    </div>
  );
}

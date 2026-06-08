type TagsProps = {
  items: string[];
  variant?: "default" | "tech";
};

export default function Tags({ items, variant = "default" }: TagsProps) {
  const tagClass = variant === "tech" ? "c-tag c-tag--tech" : "c-tag";
  return (
    <div className="c-tags">
      {items.map((item) => (
        <span key={item} className={tagClass}>{item}</span>
      ))}
    </div>
  );
}

type FooterProps = {
  left: string;
  right: string;
};

export default function Footer({ left, right }: FooterProps) {
  return (
    <div className="c-footer">
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

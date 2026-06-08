type HeaderProps = {
  meta: string;
  title: string;
  titleLight: string;
  subtitle: string;
};

export default function Header({ meta, title, titleLight, subtitle }: HeaderProps) {
  return (
    <div className="c-header">
      <div className="c-header__meta">{meta}</div>
      <h1 className="c-header__title">{title} <span>{titleLight}</span></h1>
      <div className="c-header__sub">{subtitle}</div>
    </div>
  );
}

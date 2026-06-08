type ProjectRowProps = {
  name: string;
  url?: string;
  stack?: string;
  description: string;
};

export default function ProjectRow({ name, url, stack, description }: ProjectRowProps) {
  return (
    <div className="c-project">
      <div>
        <div className="c-project__name">{name}</div>
        {url && <span className="c-project__url">{url}</span>}
        {stack && <div className="c-project__stack">{stack}</div>}
      </div>
      <div className="c-project__desc">
        <span className="c-project__arrow">→</span>{description}
      </div>
    </div>
  );
}

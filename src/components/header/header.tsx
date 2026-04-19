import "./header.scss";

type HeaderProps = {
  text: string;
  title: string;
};
export default function Header({ text, title }: HeaderProps) {
  return (
    <header className="pinkpanther-header">
      <p className="pinkpanther-header-p microcopy">{text}</p>
      <h1 className="pinkpanther-header-title">{title}</h1>
      <hr className="pinkpanther-header-hr" />
    </header>
  );
}

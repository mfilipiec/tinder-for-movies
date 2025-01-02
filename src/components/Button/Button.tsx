import './Button.scss';

export default function Button({
  onClick,
  children
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

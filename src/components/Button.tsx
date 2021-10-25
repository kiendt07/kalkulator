import "./Button.css";

type ButtonProps = {
  className: string;
  value: string;
  onClick(): void;
}
const Button = ({ className, value, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;

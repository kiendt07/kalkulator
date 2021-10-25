import "./Screen.css";

const Screen = ({ value }: { value: string }) => {
  return (
    <div className="screen">
      {value}
    </div>
  );
};

export default Screen;

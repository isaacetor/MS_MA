type iSimple = {
  icon: any;
  text: string;
  slashed?: boolean;
};

const SimpleItem: React.FC<iSimple> = ({ icon, text, slashed }) => {
  return (
    <div className={`flex gap-4 items-center ${slashed ? "line-through" : ""}`}>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default SimpleItem;

import { Button } from "keep-react";
const Btn = ({ text }) => {
  return (
    <Button className="text-primary bg-background text-md px-8 font-semibold">
      {text}
    </Button>
  );
};

export default Btn;

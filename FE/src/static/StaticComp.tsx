import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

const StaticComp = () => {
  return (
    <div className="flex gap-5 mt-10 mx-20">
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/population">
        <Button>Population</Button>
      </Link>
      <Link to="/economic">
        <Button>Economic</Button>
      </Link>
    </div>
  );
};

export default StaticComp;

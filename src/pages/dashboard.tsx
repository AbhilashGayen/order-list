import React from "react";
import { Button } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <Link to="/orders">
      <Button>
          Go to orders
      </Button>
    </Link>
  );
};

export default DashboardPage;

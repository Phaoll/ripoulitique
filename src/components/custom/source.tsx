"use client";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface SourceButtonProps {
  number: number;
  url: string;
}

export default function SourceButton({ number, url }: SourceButtonProps) {
  return (
    <Button className="h-6 w-6 px-1 font-bold rounded-full overflow-hidden bg-blue-700 text-white">
      <Link to={url}>{number}</Link>
    </Button>
  );
}

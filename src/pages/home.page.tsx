import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <img src="/logo.svg" alt="Home" className="h-48" />
      <p className="text-muted-foreground">
        Trouvez rapidement les bêtises de vos personnalités politiques
        préférées.
      </p>
      <Button className="items-center justify-center">
        <Link to="/search">Je vais chercher !</Link>
      </Button>
    </div>
  );
}

export default HomePage;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="p-8 items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Ripoulitique</h1>
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

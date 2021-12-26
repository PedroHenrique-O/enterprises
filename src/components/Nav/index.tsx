import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../Button/styles";
import { Container } from "./styles";

interface NavProps {
  title: string;
  onClick?: () => void;
}

export default function Nav({ title }: NavProps) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Container>
      <header>
        <h1 onClick={() => router.push("/")}>{title}</h1>
        {pathname === "/" && (
          <Button onClick={() => router.push("/addPage")}>
            Adicionar<span> + </span>
          </Button>
        )}
      </header>
    </Container>
  );
}

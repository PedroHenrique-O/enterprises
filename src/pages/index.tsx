import { api } from "../services/api";
import Enterprises from "../components/Enterprises";

interface EnterprisesProps {
  _id: string;
  name: string;
  status: string;
  purpose: string;
  ri_number: string;
  address: {
    district: string;
    city: string;
    street: string;
    state: string;
    number: string;
    cep: string;
  };
}
interface HomeProps {
  enterprises: EnterprisesProps[];
}

const Home = ({ enterprises }: HomeProps) => {
  return <Enterprises enterprises={enterprises} />;
};

export async function getServerSideProps() {
  const rest = await api.get("/enterprises");
  const data = await rest.data;

  const enterprises = data;

  return {
    props: { enterprises },
  };
}

export default Home;

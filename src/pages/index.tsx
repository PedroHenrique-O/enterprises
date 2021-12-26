import { api } from "../services/api";
import Enterprises from "../components/Enterprises";

import { GetStaticProps } from "next";

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

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  console.log(params);
  const resp = await api.get(`/enterprises`);
  const data = await resp.data;

  const enterprises = data;

  return {
    props: { enterprises },
  };
};

export default Home;

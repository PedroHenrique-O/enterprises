import { useState } from "react";
import { Button } from "../../components/Button/styles";
import { Container, Wrapper } from "../../styles/styles";
import Nav from "../../components/Nav";
import { api } from "../../services/api";

import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { toast } from "react-toastify";

interface CepInfo {
  cep: string | undefined;
  street: string | undefined;
  city: string | undefined;
  state: string | undefined;
  district: string | undefined;
  number: string | undefined;
}

interface EnterprisesPropsEDITPAGE {
  _id?: string;
  name: string;
  status: string;
  purpose: string;
  ri_number?: string;
  address: {
    district: string;
    city: string;
    street: string;
    state: string;
    number: string;
    cep: string;
  };
}
interface editEnterprise {
  data: EnterprisesPropsEDITPAGE;
}

const EditPage = ({ data }: editEnterprise) => {
  const router = useRouter();

  const [lauchField, setLauchField] = useState(data?.status);
  const [enterprisesField, setEnterprisesField] = useState(data?.name);
  const [residentialField, setResidentialField] = useState(data?.purpose);
  const [numberField, setnumberField] = useState(data?.address?.number);
  const [userCep, setUserCep] = useState(data?.address?.cep);
  const [cepInfoField, setCepInfoField] = useState(data?.address);

  const handleGetUserCepInfo = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const cep = e.target.value;

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
      const data = await response.json();
      setCepInfoField({
        state: data?.uf,
        cep: data?.cep,
        city: data?.localidade,
        district: data?.bairro,
        number: data.siafi,
        street: data?.logradouro,
      });
    } catch (er) {
      toast.error("Insira um CEP válido!");
    }
  };

  const handleAddEnterprise = async () => {
    const request = {
      name: enterprisesField,
      status: lauchField,
      purpose: residentialField,
      ri_number: "",
      address: {
        district: cepInfoField?.district,
        city: cepInfoField?.city,
        street: cepInfoField?.street,
        state: cepInfoField?.state,
        number: numberField,
        cep: cepInfoField?.cep,
      },
    };

    const response = await api.put(`/enterprises/${data._id}`, request);
    console.log(response);
    toast.success("Empreendimento editado com sucesso!");

    setTimeout(function () {
      router.push("/");
    }, 1600);
  };

  return (
    <>
      <Nav title="< Editar empreendimento" />
      <Container>
        <Wrapper>
          <h3>Informações </h3>
          <select
            value={lauchField}
            onChange={(e) => setLauchField(e.target.value)}
            name="select"
          >
            <option value="Lançamento"> Lançamento </option>
            <option value="Breve "> Breve Lançamento </option>
            <option value="Em obra"> Em obras </option>
            <option value="Pronto"> Pronto </option>
          </select>

          <input
            value={enterprisesField}
            onChange={(e) => setEnterprisesField(e.target.value)}
            placeholder="Nome do empreendismo"
          />

          <select
            value={residentialField}
            onChange={(e) => setResidentialField(e.target.value)}
            name="select"
          >
            <option value="Residencial"> Residencial </option>
            <option value="Comercial"> Comercial </option>
          </select>

          <input
            value={userCep}
            placeholder="CEP"
            onChange={(e) => setUserCep(e.target.value)}
            onBlur={handleGetUserCepInfo}
          />

          <div className="cepInfo">
            <p> {cepInfoField?.state} </p>
            <p>{cepInfoField?.district}</p>
            <p>{cepInfoField?.street} </p>
            <p> {cepInfoField?.city}</p>
          </div>

          <input
            value={numberField}
            onChange={(e) => setnumberField(e.target.value)}
            placeholder="339"
          />
        </Wrapper>
        <div className="addWrapp">
          <Button onClick={handleAddEnterprise} className="add-btn">
            Editar
          </Button>
        </div>
      </Container>
    </>
  );
};

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const response = await api.get(`/enterprises/${params?._id}`);
  const data = await response.data;
  console.log("bd", data);
  return {
    props: { data },
  };
};

export default EditPage;

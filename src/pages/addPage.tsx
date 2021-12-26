import { useState } from "react";
import { Button } from "../components/Button/styles";
import { Container, Wrapper } from "../styles/styles";
import Nav from "../components/Nav";
import { api } from "../services/api";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface CepInfo {
  cep: string;
  logradouro: string;
  localidade: string;
  uf: string;
  bairro: string;
}

interface EnterprisesProps {
  _id?: string;
  name: string;
  status: string;
  purpose: string;
  ri_number?: string;
  address: {
    district: string | undefined;
    city: string | undefined;
    street: string | undefined;
    state: string | undefined;
    number: string | undefined;
    cep: string | undefined;
  };
}

const AddPage = () => {
  const route = useRouter();
  const [lauchField, setLauchField] = useState("");
  const [enterprisesField, setEnterprisesField] = useState("");
  const [residentialField, setResidentialField] = useState("");
  const [numberField, setnumberField] = useState("");
  const [cepInfoField, setCepInfoField] = useState<CepInfo>();

  const handleGetUserCepInfo = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const cep = e.target.value;

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
      const data = await response.json();
      setCepInfoField(data);
    } catch (er) {
      toast.warning("Insira um CEP válido!");
    }
  };

  const handleAddEnterprise = async () => {
    const request: EnterprisesProps = {
      _id: uuid(),
      name: enterprisesField,
      status: lauchField,
      purpose: residentialField,
      ri_number: "",
      address: {
        district: cepInfoField?.bairro,
        city: cepInfoField?.localidade,
        street: cepInfoField?.logradouro,
        state: cepInfoField?.uf,
        number: numberField,
        cep: cepInfoField?.cep,
      },
    };

    await api.post("/enterprises", request);
    toast.success("Novo empreendimento adicionado com sucesso!");

    setTimeout(function () {
      route.push("/");
    }, 2000);
  };

  return (
    <>
      <Nav title="< Cadastro de empreendimento" />
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

          <input placeholder="CEP" onBlur={handleGetUserCepInfo} />

          <div className="cepInfo">
            <p> {cepInfoField?.logradouro}</p>
            <p> {cepInfoField?.bairro}</p>
            <p> {cepInfoField?.localidade}</p>
            <p> {cepInfoField?.uf}</p>
          </div>

          <input
            value={numberField}
            onChange={(e) => setnumberField(e.target.value)}
            placeholder="339"
          />
        </Wrapper>
        <div className="addWrapp">
          <Button onClick={handleAddEnterprise} className="add-btn">
            Adicionar
          </Button>
        </div>
      </Container>
    </>
  );
};

export default AddPage;

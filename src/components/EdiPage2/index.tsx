import { useState } from "react";
import { Button } from "../Button/styles";
import { Container, EditModalWrapp } from "../../styles/styles";
import Nav from "../Nav";
import { api, apiCep } from "../../services/api";
import { v4 as uuid } from "uuid";

interface CepInfo {
  cep: string;
  logradouro: string;
  localidade: string;
  uf: string;
  bairro: string;
}

interface EditPageProps {
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

const EditPage2 = ({ name }: any) => {
  const [formattedEnterprise, setFormatEnterprises] = useState<any>();
  const [lauchField, setLauchField] = useState("");
  const [enterprisesField, setEnterprisesField] = useState("");
  const [residentialField, setResidentialField] = useState("");
  const [numberField, setnumberField] = useState("");
  const [cepInfoField, setCepInfoField] = useState<CepInfo>();
  console.log("Name:", name);
  const handleGetUserCepInfo = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cep = e.target.value;

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const data = await response.json();

    setCepInfoField(data);
  };
  const handleAddEnterprise = async (formattedEnterprise: EditPageProps) => {
    console.log("entrou no addenterprise");
    const request = {
      id: uuid(),
      ...formattedEnterprise,
    };

    const response = await api.post("/enterprises", request);
    console.log("post rodou");
    console.log(response);
  };

  const handleSubmit = () => {
    const enterpriseData = {
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
    console.log("formatted: ", formattedEnterprise);
    setFormatEnterprises(enterpriseData);
    handleAddEnterprise(formattedEnterprise);
  };

  return (
    <>
      <Container>
        <Nav title="< Cadastro de empreendismo" />
        <EditModalWrapp>
          <h3>Informações </h3>
          <select
            value={lauchField}
            onChange={(e) => setLauchField(e.target.value)}
            name="select"
          >
            <option value="Lançamento"> Lançamento </option>
            <option value="Breve Lançamento "> Breve Lançamento </option>
            <option value="Em obra"> Em obras </option>
            <option value="Pronto para morar"> Pronto para morar </option>
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
        </EditModalWrapp>
        <div className="addWrapp">
          <Button onClick={handleSubmit} className="add-btn">
            Adicionar
          </Button>
        </div>
      </Container>
    </>
  );
};

export default EditPage2;

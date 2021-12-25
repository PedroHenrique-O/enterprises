import { Container } from "../../pages/home.styles";

import { FiSearch, FiTrash, FiEdit2 } from "react-icons/fi";
import Nav from "../../components/Nav";
import { useState } from "react";

import { useRouter } from "next/router";
import { api } from "../../services/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetStaticProps } from "next";

interface EnterprisesProps {
  _id: string;
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

interface EnterpriseIterface {
  enterprises: EnterprisesProps[];
}

const Interprises = ({ enterprises }: EnterpriseIterface) => {
  const router = useRouter();

  const [formatEnterprises, setFormatEnterprises] =
    useState<EnterprisesProps[]>(enterprises);

  const handleOpenEditPage = ({ _id }: EnterprisesProps) => {
    router.push(`/Edit/${_id}`);
  };

  const handleDeleteEnterprise = async ({ _id }: EnterprisesProps) => {
    const response = await api.delete(`/enterprises/${_id}`);

    toast.success("Deletado com sucesso!");

    const enterpriseDeleted = formatEnterprises.filter(
      (item) => item._id !== _id
    );

    setFormatEnterprises(enterpriseDeleted);
  };

  return (
    <>
      <Nav title="Empreendimentos" />
      <Container>
        <div className="searchBoxWrapp">
          <FiSearch
            style={{ position: "absolute" }}
            color="#302E45"
            size="1.5em"
          />
          <input type="text" placeholder="Buscar" />
        </div>

        {formatEnterprises.map((enterprises) => (
          <div key={enterprises._id} className="listWrapp">
            <div className="itemWrapp">
              <div className="itemInfoWrapp">
                <div className="itemInfo">
                  <div className="titleWrapp">
                    <h1> {enterprises.name} </h1>
                    <div className="optionsWrapp">
                      <button
                        onClick={() => handleOpenEditPage(enterprises)}
                        className="edit-btn"
                      >
                        <FiEdit2 size="1.3rem" />
                      </button>
                      <button
                        onClick={() => handleDeleteEnterprise(enterprises)}
                        className="delete-btn"
                      >
                        <FiTrash size="1.3rem" />
                      </button>
                    </div>
                  </div>

                  <p key={enterprises._id}>
                    {enterprises.address?.street}, {enterprises.address?.number}
                    - {enterprises.address?.city},{" "}
                    {enterprises.address?.district}
                  </p>
                </div>
              </div>
              <div className="buttonWrapp">
                <button>{enterprises.status}</button>
                <button>{enterprises.purpose}</button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Interprises;

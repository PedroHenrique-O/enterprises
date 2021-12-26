import { Container, Pagination } from "../../pages/home.styles";

import { FiSearch, FiTrash, FiEdit2 } from "react-icons/fi";
import Nav from "../Nav";
import { useState } from "react";

import { useRouter } from "next/router";
import { api } from "../../services/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

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

  const [searchBar, setSearchBar] = useState("");

  const [pagInicio, setPageInicio] = useState(0);
  const [pageFim, setPageFim] = useState(10);

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

  const handleIncrementPagination = () => {
    console.log(formatEnterprises.length);
    if (pageFim >= formatEnterprises.length) {
      toast.warn("Você chegou ao fim...");
      return;
    }
    console.log(formatEnterprises.length);
    setPageInicio((prev) => prev + 10);
    setPageFim((prev) => prev + 10);
  };

  const handleDecrementPagination = () => {
    if (pagInicio <= 0) {
      toast.warn("Você já está no início...");
      return;
    }

    setPageInicio((prev) => prev - 10);
    setPageFim((prev) => prev - 10);
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
          <input
            type="text"
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
            placeholder="Buscar"
          />
        </div>

        {formatEnterprises

          .filter((val) => {
            if (searchBar == "") {
              return val;
            } else if (
              val.name.toLocaleLowerCase().includes(searchBar.toLowerCase())
            ) {
              return val;
            }
          })
          .slice(pagInicio, pageFim)
          .map((enterprises) => (
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
                      {enterprises.address?.street},{" "}
                      {enterprises.address?.number}- {enterprises.address?.city}
                      , {enterprises.address?.district}
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
      {formatEnterprises.length && (
        <Pagination>
          <div onClick={handleDecrementPagination} className="prevBtn">
            <GrFormPrevious size="30" />
          </div>

          <div onClick={handleIncrementPagination}>
            <GrFormNext size="30" />
          </div>
        </Pagination>
      )}
    </>
  );
};

export default Interprises;

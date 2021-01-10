import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/30866274?s=460&u=88fdd8b1aeefaadaafd33196f451061e3e7b4574&v=4"
            alt="Igor Cazé"
          />

          <div>
            <strong>IgorCazeNunes/GoFinances</strong>
            <p>Descrição?</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>123132</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>123132</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>123132</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link
          // key={repository.full_name}
          to="/repository/repository.full_name"
        >
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;

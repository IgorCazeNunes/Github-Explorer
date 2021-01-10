import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/30866274?s=460&u=88fdd8b1aeefaadaafd33196f451061e3e7b4574&v=4"
            alt="Igor Cazé"
          />

          <div>
            <strong>IgorCazeNunes/Github_Explorer</strong>
            <p>👨‍💻 Sistema para visualização de dados do Github.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/30866274?s=460&u=88fdd8b1aeefaadaafd33196f451061e3e7b4574&v=4"
            alt="Igor Cazé"
          />

          <div>
            <strong>IgorCazeNunes/Github_Explorer</strong>
            <p>👨‍💻 Sistema para visualização de dados do Github.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/30866274?s=460&u=88fdd8b1aeefaadaafd33196f451061e3e7b4574&v=4"
            alt="Igor Cazé"
          />

          <div>
            <strong>IgorCazeNunes/Github_Explorer</strong>
            <p>👨‍💻 Sistema para visualização de dados do Github.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/30866274?s=460&u=88fdd8b1aeefaadaafd33196f451061e3e7b4574&v=4"
            alt="Igor Cazé"
          />

          <div>
            <strong>IgorCazeNunes/Github_Explorer</strong>
            <p>👨‍💻 Sistema para visualização de dados do Github.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

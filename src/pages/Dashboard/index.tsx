import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
    <>
        <img src={logoImg} alt="GitHub Explorer" />
        <Title>Explore repositórios no GitHub</Title>

        <Form action="">
            <input placeholder="Digite o nome do repositório" />
            <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
            <a href="teste">
                <img
                    src="https://avatars.githubusercontent.com/u/55299115?s=460&u=48f15a7b9cabe08a78e4971724a3b5e1f7ca715d&v=4"
                    alt="Lucas Basso"
                />
                <div>
                    <strong>lucasrbasso/happy</strong>
                    <p>
                        Projeto Next Level Week 3 - Happy, com propósito de
                        facilitar o visitamento de Casas de Acolhimento e
                        cadastro das mesmas.
                    </p>
                </div>
                <FiChevronRight size={20} />
            </a>
            <a href="teste">
                <img
                    src="https://avatars.githubusercontent.com/u/55299115?s=460&u=48f15a7b9cabe08a78e4971724a3b5e1f7ca715d&v=4"
                    alt="Lucas Basso"
                />
                <div>
                    <strong>lucasrbasso/happy</strong>
                    <p>
                        Projeto Next Level Week 3 - Happy, com propósito de
                        facilitar o visitamento de Casas de Acolhimento e
                        cadastro das mesmas.
                    </p>
                </div>
                <FiChevronRight size={20} />
            </a>
            <a href="teste">
                <img
                    src="https://avatars.githubusercontent.com/u/55299115?s=460&u=48f15a7b9cabe08a78e4971724a3b5e1f7ca715d&v=4"
                    alt="Lucas Basso"
                />
                <div>
                    <strong>lucasrbasso/happy</strong>
                    <p>
                        Projeto Next Level Week 3 - Happy, com propósito de
                        facilitar o visitamento de Casas de Acolhimento e
                        cadastro das mesmas.
                    </p>
                </div>
                <FiChevronRight size={20} />
            </a>
        </Repositories>
    </>
);

export default Dashboard;

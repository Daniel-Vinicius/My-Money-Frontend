import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ContentHeader from "../template/contentHeader";
import Content from "../template/content";

function Error(props) {
  const { name } = props.user;

  return (
    <div className='erro-div'>
      <ContentHeader title='Página Não Encontrada' small='Erro 404' />
      <Content>
        <h1 className='erro-msg'>
          Olá <span className='user'>{name}</span>, esta página não foi
          encontrada.
        </h1>
        <Link className='link' to='/'>
          <button className='botao'>Voltar ao Dashboard</button>
        </Link>
      </Content>
    </div>
  );
}

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(mapStateToProps, null)(Error);

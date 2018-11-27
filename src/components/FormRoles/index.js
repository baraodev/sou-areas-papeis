import React, { Component } from 'react';

import { Form, Field } from 'formik';

import './styles.scss';

class FormRoles extends Component {
  handlePrivilegies = ({ target }) => {
    document.getElementById(`crud-${target.id}`).classList.toggle('none');
  };

  render() {
    return (
      <Form className="form-role">
        <div className="row">
          <label htmlFor="name">
            <span className="label-field">Nome</span>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Nome do papel"
              className="text-field"
            />
          </label>
          <label htmlFor="area">
            <span className="label-field">Área</span>
            <Field
              component="select"
              name="area"
              id="area"
              className="text-field"
            >
              <option value="">Selecione uma área</option>
              <option value="Recursos Humanos">Recursos Humanos</option>
              <option value="Técnico de informática">
                Técnico de informática
              </option>
            </Field>
          </label>
        </div>
        <fieldset className="privilegies-fieldset">
          <legend className="privilegies-legend">Privilégios</legend>
          <div className="row">
            <label htmlFor="contrata">
              <span className="label-field">Contrata</span>
              <Field
                type="checkbox"
                name="contrata"
                id="contrata"
                onChange={this.handlePrivilegies}
                className="checkbox-field"
              />
            </label>
            <div className="crud none" id="crud-contrata">
              <label htmlFor="contrata-retrieve">
                <span className="label-field">Visualizar</span>
                <Field
                  type="checkbox"
                  name="contrata-retrieve"
                  id="contrata-retrieve"
                  className="checkbox-field"
                />
              </label>
              <label htmlFor="contrata-create">
                <span className="label-field">Cadastrar</span>
                <Field
                  type="checkbox"
                  name="contrata-create"
                  id="contrata-create"
                  className="checkbox-field"
                />
              </label>
              <label htmlFor="contrata-update">
                <span className="label-field">Alterar</span>
                <Field
                  type="checkbox"
                  name="contrata-update"
                  id="contrata-update"
                  className="checkbox-field"
                />
              </label>
              <label htmlFor="contrata-delete">
                <span className="label-field">Remover</span>
                <Field
                  type="checkbox"
                  name="contrata-delete"
                  id="contrata-delete"
                  className="checkbox-field"
                />
              </label>
            </div>
          </div>
        </fieldset>
        <button type="submit" className="submit-button">
          Cadastrar
        </button>
      </Form>
    );
  }
}

export default FormRoles;

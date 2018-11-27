import React, { Component, Fragment } from 'react';

import { Formik } from 'formik';

import FormRoles from '../FormRoles';

import './styles.scss';

class ModalRoles extends Component {
  state = {};

  getInitialValues = () => {};

  handleSubmit = () => {};

  render() {
    const { title } = this.props;
    return (
      <Fragment>
        <h2 className="title-modal">{title}</h2>
        <Formik
          initialValues={this.getInitialValues}
          onSubmit={this.handleSubmit}
          component={FormRoles}
        />
      </Fragment>
    );
  }
}

export default ModalRoles;

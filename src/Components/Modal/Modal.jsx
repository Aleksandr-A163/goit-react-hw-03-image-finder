import PropTypes from "prop-types";
import React, { Component } from "react";
import { createPortal } from 'react-dom';
import s from "./Modal.module.css";


const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

static propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  };
  

componentDidMount() {
  window.addEventListener("keydown", this.handleKeyDown);
}
componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
}

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

    
  render() {
    const { children } = this.props;

    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>{children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;


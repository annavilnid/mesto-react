import React from 'react';

function PopupWithForm({ name, title, isOpen, onClose, formName, btnName="Сохранить", children, onSubmit, switchLoader, buttonDisabled}) {

  const handleButtonName = () => switchLoader ? "Сохранение..." : btnName

// Разметка 
  return (
     <div className={`popup popup_type_${name} ${isOpen && 'popup_is-opened'}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="закрыть" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className={`popup__form popup__form_action_${name}`} name={formName} noValidate onSubmit={onSubmit}>
          {children}
          <button className={`popup__save-button ${buttonDisabled && 'popup__save-button_disabled'}`} type="submit" disabled={buttonDisabled || switchLoader}>{handleButtonName()}</button>
       </form>
      </div>
    </div>
  )
}
  
export default PopupWithForm
import React, {useRef} from "react"
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, switchLoader}) {
  
  // Реф, доступ к DOM-узлу
  const textInputAvatar = useRef('');

  // Обработчик формы
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: textInputAvatar.current.value,
    });
    textInputAvatar.current.value = ''
  } 

  function handleClose() {
    onClose()
    textInputAvatar.current.value = ''
  }
  
  // Разметка
  return (
    <PopupWithForm
    isOpen={isOpen}
    name={'edit-avatar'}
    title={'Обновить аватар'}
    formName={'popupFormAvatar'}
    onClose={handleClose}
    switchLoader={switchLoader}
    onSubmit={handleSubmit}>
      <input className="popup__input popup__input_data_avatar" id="avatar" name="avatar" type="url" minLength="22" required placeholder="Ссылка на картинку" ref={textInputAvatar} />
      <span className="popup__error avatar-error"></span> 
    </PopupWithForm>
  )
}
  
export default EditAvatarPopup
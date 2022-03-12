function Modal(props) {

  return (
    <div className='modal'>
      <p>정말 삭제하시겠어요?</p>
      <button className='btn btn--alt' onClick={props.onCancel}>
        취소
      </button>
      <button className='btn' onClick={props.onConfirm}>
        확인
      </button>
    </div>
  )
}

export default Modal;
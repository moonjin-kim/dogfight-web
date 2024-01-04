import ReactModal from "react-modal"
import styled from "styled-components"


export default function PasswordModal({isOpen}) {
  return (
    <ModalWrapper visible={isOpen}>
      <div>모달</div>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`
import style from '@emotion/styled';

export const Form = style.form`
  // width: 320px;
  `;

export const FormLabel = style.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;`;

export const FormInput = style.input`
display: block;
    margin-top: 10px;
    padding: 10px;
    width: 320px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 15px;
    cursor: pointer;
    font-size: 15px;
    
        // margin-left: 75%;
        `;

export const FormButton = style.button`
position: relative;
left: 50%;
transform: translate(-50%, 0);
padding: 10px 20px;
  background-color: #ff6b08;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  border-radius: 15px;
  outline: none;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  &:hover {
  background-color: #FF0000;
}

    // margin-left: 85%;
    `;

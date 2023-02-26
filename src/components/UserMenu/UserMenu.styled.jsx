import style from '@emotion/styled';

export const Wrapper = style.div`
display: flex;
  align-items: center;
  gap: 12px;`;

export const UserName = style.div`
font-weight: 700;`;

export const UserButton = style.button`
display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #1a2d5e;
  font-size: 22px;
   width: 135px;
  height: 54px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  margin: auto 0 auto 0;
  background-color: #ff6b08;
  border: none;
  border-radius: 15px;
  text-transform: uppercase;
  color: white;
  outline: none;
  transition: all 250ms ease-in-ou;
  &:hover {
  background-color: #FF0000;
}`;

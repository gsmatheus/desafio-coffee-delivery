import {
  CartButton,
  HeaderContainer,
  HeaderWrapper,
  LocationTag,
} from './styles'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <nav>
          <NavLink to="/">
            <img src={logo} alt="Logo" draggable="false" />
          </NavLink>
          <div>
            <LocationTag>
              <MapPin size={22} color="#8047F8" weight="fill" />
              São Paulo, SP
            </LocationTag>
            <NavLink to="/checkout">
              <CartButton>
                <ShoppingCart size={22} color="#C47F17" weight="fill" />
                {/* {cartLength > 0 && <CartLength>{cartLength}</CartLength>} */}
              </CartButton>
            </NavLink>
          </div>
        </nav>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

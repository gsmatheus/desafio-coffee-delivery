import styled from 'styled-components'

interface BenefitIconProps {
  backgroundColor: string
}

export const HeroSectionContainer = styled.div``

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1120px;
  margin: 0 auto;
  line-height: 1.3;
`

export const SplashBackground = styled.div`
  background-image: url(/splashBackground.svg);
`

export const SplashContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
  padding: 6rem 0;
  max-width: 1120px;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme['gray-800']};
`

export const SubTitle = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 2rem;
`

export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const BenefitIconWrapper = styled.div<BenefitIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`

export const Benefit = styled.span`
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-600']};
`

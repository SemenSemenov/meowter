import React from 'react'
import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'

import { H1 } from 'core/styles/typography'

import { Back } from 'common/components'
import { useResize } from 'common/helpers'

import { Container, Wrapper } from './Header.style'

export const Header = ({
  title,
  helmet,
  isBorder,
  isBack,
  isBurger,
  isNotifications,
  isMeowt
}) => {
  const isMobile = useResize()

  if (isMobile) {
    return (
      <>
        {helmet && (
          <Helmet>
            <title>{helmet.title}</title>
            <meta name='description' content={`${helmet.description}`} />
          </Helmet>
        )}
        <Container isBorder={isBorder}>
          {isBack && <Back />}
          {isBurger && <></>}
          {title && (
            <Wrapper>
              <H1>{title}</H1>
            </Wrapper>
          )}
          {isNotifications && <></>}
          {isMeowt && <></>}
        </Container>
      </>
    )
  }

  return null
}

Header.propTypes = {
  helmet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }),
  title: PropTypes.string,
  isBorder: PropTypes.bool,
  isBack: PropTypes.bool,
  isBurger: PropTypes.bool,
  isNotifications: PropTypes.bool,
  isMeowt: PropTypes.bool
}
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'docz' // useConfig

import * as styles from './styles'

export const Logo = () => {
  //const config = useConfig()
  return (
    <Flex aligmItems="center" sx={styles.logo} data-testid="logo">
      <div style={styles.circle}>
        <img style={styles.img} alt="Kerberos.io" src="data:image/png;base64,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"/>
      </div>
      <Link to="/" sx={styles.link}>
        Kerberos.io
      </Link>
    </Flex>
  )
}

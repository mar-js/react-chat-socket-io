import { IMessage } from 'interfaces'

import { Container, Title } from './styles'

export const Messages: React.FC<IMessage> = ({ from, body }) => (
  <Container>
    <Title>{ from }: { body }</Title>
  </Container>
)

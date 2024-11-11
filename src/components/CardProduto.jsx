import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProduto = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4iIkDaLudp4RpSVP_A9WkkzZ8hHt7UEMkg&s" />
      <Card.Body>
        <Card.Title>Nome Produto: {props.none}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Preço: {props.preco}</Card.Subtitle>
        <Card.Text>
          Descrição: {props.descricao}
        </Card.Text>
        <Card.Text>
          Categoria: {props.categoria}
        </Card.Text>

        <Card.link href={`/produtos/edicao/${props.id}`}>
          <Button variant="warning">Editar</Button>
        </Card.link>

        <Card.link href={`/produtos/excluir/${props.id}`}>
          <Button variant="danger">Excluir</Button>
        </Card.link>

      </Card.Body>
    </Card>
  )
}

export default CardProduto

import Pagination from 'react-bootstrap/Pagination';
import './styles.css'

function IndexPage() {
  return (
    <Pagination class="color-secondary">
      <Pagination.First/>
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default IndexPage;
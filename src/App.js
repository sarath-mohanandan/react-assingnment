import "./App.scss";
import { Container, Form, Row, Table, Button, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			setPosts(response);
		}
		fetchData();
	}, []);
	return (
		<div className="App">
			<Container>
				<h1>Posts</h1>
				<Row className="mb-1">
					<Col>
						<Form.Control type="text" placeholder="Search" />
					</Col>
					<Col>
						<Button>Search</Button>
					</Col>
				</Row>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>#</th>
							<th>Title</th>
						</tr>
					</thead>
					<tbody>
						{posts.map((item) => (
							<tr key={`${item.id}`}>
								<td>{item.id}</td>
								<td>{item.title}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</div>
	);
}

export default App;

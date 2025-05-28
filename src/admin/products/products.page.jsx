import './products.css';

export default function ProductsPage() {
	return (
		<div className="admin-main-container">
			Lista de productos
			<button type="button" onclick="redirectToCreateProduct(event)">
				Crear Producto
			</button>
			<div id="tbl-container-products" className="table-container shadow-md">
				<table>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Categoria</th>
							<th>Marca</th>
							<th>Precio</th>
							<th>Fecha de creación</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Producto 1</td>
							<td>Categoria 1</td>
							<td>Marca 1</td>
							<td>$10.00</td>
							<td>2023-01-01</td>
							<td>
								<button
									type="button"
									onclick="redirectToEditProduct(event, 1)"
								>
									Editar
								</button>
								<button
									type="button"
									onclick="deleteProduct(event, 1)"
								>
									Eliminar
								</button>
							</td>
						</tr>
						<tr>
							<td>Producto 2</td>
							<td>Categoria 2</td>
							<td>Marca 2</td>
							<td>$20.00</td>
							<td>2023-02-01</td>
							<td>
								<button
									type="button"
									onclick="redirectToEditProduct(event, 2)"
								>
									Editar
								</button>
								<button
									type="button"
									onclick="deleteProduct(event, 2)"
								>
									Eliminar
								</button>
							</td>
						</tr>
						<tr>
							<td>Producto 3</td>
							<td>Categoria 3</td>
							<td>Marca 3</td>
							<td>$20.00</td>
							<td>2023-02-01</td>
							<td>
								<button
									type="button"
									onclick="redirectToEditProduct(event, 2)"
								>
									Editar
								</button>
								<button
									type="button"
									onclick="deleteProduct(event, 2)"
								>
									Eliminar
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

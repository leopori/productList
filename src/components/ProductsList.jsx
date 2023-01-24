import Eliminar from "../assets/basura.png";
import Editar from "../assets/editar.png";
import Swal from "sweetalert2";


const ProductsList = ({ dataApi, deleteProduct, editProduct }) => {
	const eliminarProducto = (id) => {
		Swal.fire({
			title: '<h1 class="orange">¿Estás seguro?</h1>',
			html: '<b class="red">No podrás revertir esta acción.</b>',
			background: "#0A1C3E",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Eliminar",
			cancelButtonText: "Cancelar",
			imageUrl: '/fruta-pensante.png',
			imageWidth:'30%'

		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: '<h1 class="red">¡Eliminado!</h1>',
					html: '<b class="green">El producto se eliminó correctamente.</b>',
					imageUrl: '/papaya-podrida.png',
					imageWidth:'30%',
					background: "#0A1C3E",

				});
				deleteProduct(id);
			} else if (result.isDismissed) {
				Swal.fire({
					title: '<h1 class="orange">Información</h1>',
					html: '<b class="green">El producto NO fue eliminado.</b>',
					imageUrl: '/brocoli-asustado.png',
					imageWidth:'30%',
					background: "#0A1C3E",
					
				});
			}
		});
	};

	return (
		<div className="container-table">
			<table className="table">
				<tbody className="table_card">
					{dataApi.map((dataApi, index) => (
						<div className="info_table" key={index}>
							<h2>Producto</h2>
							<div>
								<h3>Nombre:</h3>
								{dataApi.name}
							</div>
							<div>
								<h3>Categoría:</h3>
								{dataApi.category}
							</div>
							<div>
								<h3>Precio:</h3>
								<p>💲 {dataApi.price}</p>
							</div>
							<div>
								<p className="estatus">
									{" "}
									{dataApi.isAvailable
										? "✅ Disponible"
										: "❌ Agotado"}
								</p>
							</div>
							<div>
								<h3 className="bt_modify">Editar</h3>
								<button
									className="bt_edit"
									onClick={() => editProduct(dataApi)}
								>
									<img
										className="icon_2"
										src={Editar}
										alt=""
									/>
								</button>
							</div>

							<div>
								<h3 className="bt_modify">Borrar</h3>
								<button
									className="bt_trash"
									onClick={() => eliminarProducto(dataApi.id)}
								>
									<img
										// onClick={() => }
										className="icon_2"
										src={Eliminar}
										alt=""
									/>
								</button>
							</div>
						</div>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductsList;

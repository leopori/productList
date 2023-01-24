import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Tienda from "../assets/Tienda.png";
import Categoria from "../assets/categoria.png";
import Precio from "../assets/precio.png";
import Swal from "sweetalert2";

const product_Create = () => {
	Swal.fire({
		title: '<h2 class="orange">¡Creado con Éxito!</h2>',
		html: '<b class="red">¡Operacion Éxitosa!</b>',
        text:'center',
		button: "aceptar",
		timer: "2000",
		background: "#0A1C3E",
		backdrop: false,
		timerProgressBar: true,
		position: "top-start",
		imageUrl: '/naranja-feliz.png',
		imageWidth:'40%',
	});
};
const product_Edit = () => {
	Swal.fire({
		title: '<h2 class="orange">¡.Editado con Éxito.!</h2>',
		html: '<b class="green">¡Operacion Éxitosa!</b>',
        text:'center',
		button: "aceptar",
		timer: "2000",
		background: "#0A1C3E",
		backdrop: false,
		timerProgressBar: true,
		position: "top-end",
        imageUrl: '/mango-molesto.png',
	    imageWidth:'30%',
	});
};

const ProductsForm = ({
	createProduct,
	productSelectToEdit,
	modifiedProduct,
}) => {
	const { register, handleSubmit, reset } = useForm();
	const submit = (data) => {
		productSelectToEdit
			? modifiedProduct(data)
			: (createProduct(data), reset(resetForm()), product_Create());
	};
	useEffect(() => {
		productSelectToEdit ? reset(productSelectToEdit) : reset(resetForm());
	}, [productSelectToEdit]);
	const resetForm = () => {
		return { name: null, category: null, price: null, isAvailable: false };
	};
	return (
		<div className="PrincipalContainer">
			<form className="Form" onSubmit={handleSubmit(submit)}>
				<div className="contentForm">
					<div className="textStockLetters">
						<h2 className="textStockLetter">A</h2>
						<h2 className="textStock">dministrar Inventario</h2>
					</div>
					<br />
					<label htmlFor="product_name" className="category_text">
						Producto
					</label>
					<div className="containerInpBtn">
						<button className="btInp">
							<img className="icons" src={Tienda} alt="" />
						</button>

						<input
							className="inp"
							type="text"
							id="product_name"
							{...register("name", { required: true })}
						/>
					</div>
				</div>
				<div className="contentForm">
					<label htmlFor="product_category" className="category_text">
						Categoria
					</label>
					<div className="containerInpBtn">
						<button className="btInp">
							<img className="icons" src={Categoria} alt="" />
						</button>
						<input
							className="inp"
							type="text"
							id="product_category"
							{...register("category", { required: true })}
						/>
					</div>
				</div>
				<div className="contentForm">
					<label htmlFor="product_price" className="category_text">
						Precio
					</label>
					<div className="containerInpBtn">
						<button className="btInp">
							<img className="icons" src={Precio} alt="" />
						</button>
						<input
							className="inp"
							type="number"
							id="product_price"
							{...register("price", { required: true })}
						/>
					</div>
				</div>
				<div className="checkB">
					<label htmlFor="isAvailable">Disponible</label>
					<label class="switch">
						<input
							type="checkbox"
							id="isAvailable"
							placeholder="is Available"
							{...register("isAvailable")}
						/>
						<span class="slider round"></span>
					</label>
				</div>
				{productSelectToEdit ? (
					<button
						className="btnForm"
						type="submit"
						onClick={() => product_Edit()}
					>
						Modificar
					</button>
				) : (
					<button className="btnForm" type="submit">
						Enviar
					</button>
				)}
			</form>
		</div>
	);
};

export default ProductsForm;

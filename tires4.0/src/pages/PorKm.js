import React, { useState } from "react";
import Input from "../components/Inputs";

export default function PorKm() {
	const [form, setform] = useState([
		{
			marca: "",
			km: "",
			price: "",
			key: Date.now(),
		},
	]);

	const [result, setResult] = useState([]);

	const addForm = () => {
		setform(prev => [
			...prev,
			{
				marca: "",
				km: "",
				price: "",
				key: Date.now(),
			},
		]);
	};

	const onHandleChange = (key, { target }) => {
		const { name, value } = target;
		setform(prev => {
			const newState = prev.map(product => {
				if (product.key === key) {
					return {
						...product,
						[name]: value,
					};
				}
				return product;
			});
			return newState;
		});
	};

	const onClick = () => {
		form.forEach(({ marca, price, km }) => {

			const finalResult = {
				result: ((price / km) * 1000).toFixed(2),
				marca,
				km,
				price,
			};
			setResult(prev => [...prev, finalResult]);
		});

		setform([
			{
				marca: "",
				km: "",
				price: "",
				key: Date.now(),
			},
		]);
	};

	const prevent = e => {
		e.preventDefault();
	};

	return (
		<>
			<div className='form-master'>
				{form.map(({ key, price, marca, km }, index) => (
					<form key={key} onSubmit={prevent} className='form-dados'>
						{index}
						<Input
							phText='KM'
							ph='Digite a kilometragem'
							kmValue={km}
							priceValue={price}
							marcaValue={marca}
							func={event => onHandleChange(key, event)}
						/>
						<button onClick={addForm}>+</button>
					</form>
				))}
				<button onClick={onClick}>enviar</button>
			</div>
			{result
				.sort((a, b) => a.result - b.result)
				.map(
					({ result, marca, km, price }, index) =>
						price &&
						marca &&
						km && (
							<div key={index} className='result-div'>
								<h3>Marca:{marca}</h3>
								<h3>Km:{km}</h3>
								<h3>Preço:{price}</h3>
								<h3 id={`l${index}`}>Valor Por Km:{result}</h3>
							</div>
						),
				)}
		</>
	);
}

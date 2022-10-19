import React, { useState } from "react";

export default function Teste() {
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
		const retorno = form.map(({ marca, price, km }) => {
			const count = [];
			count.push((( price / km ) * 1000 ).toFixed(2));
			const finalResult = {
				result: count,
				marca,
				km,
				price,
			};
			return finalResult;
		});
		setResult(retorno);

		setform([
			{
				marca: "",
				km: "",
				price: "",
				key: Date.now(),
			},
		]);
	};

	return (
		<>
			{form.map(({ key, price, marca, km }) => (
				<form key={key}>
                    <input
                        placeholder="digite a marca"
						type='text'
						name='marca'
						value={marca}
						onChange={event => onHandleChange(key, event)}
					/>
                    <input
                        placeholder="digite o preço"
						type='number'
						name='price'
						value={price}
						onChange={event => onHandleChange(key, event)}
					/>
                    <input
                        placeholder="digite a kilometragem"
						type='number'
						name='km'
						value={km}
						onChange={event => onHandleChange(key, event)}
					/>
				</form>
			))}
			<button onClick={onClick}>enviar</button>
			<button onClick={addForm}>+</button>
            {result
                .sort((a,b) => a.result - b.result)
                .map(
				({ result, marca, km, price }, index) =>
					(price && marca && km)? (
						<div key={index} className="result-div">
							<h3>Marca:{marca}</h3>
							<h3>Km:{km}</h3>
							<h3>Preço:{price}</h3>
							<h3>Valor Por Km:{result}</h3>
						</div>
					) : <p></p>,
			)}
		</>
	);
}

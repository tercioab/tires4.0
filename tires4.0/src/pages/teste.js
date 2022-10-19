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
    
const [teste, setTeste] = useState([])

    const add = () => {
        
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

    const on = (key, { target }) => {
        const {name, value } = target
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
        setTeste(form)
        setform([
            {
                marca: "",
                km: "",
                price: "",
                key: Date.now(),
            },
        ])
    }
 
    
	return (
		<>
			{form.map(({ key, price, marca, km }) => (
				<form key={key}>
					<input
						type='text'
						name='marca'
						value={marca}
						onChange={event => on(key, event)}
					/>
					<input
						type='number'
						name='price'
						value={price}
						onChange={event => on(key, event)}
					/>
					<input type='number' name='km' value={km} onChange={event => on(key, event)} />
				</form>
            ))}
            {teste.map(({ price, km }) => <div>
                <p>{price * km }</p>
            </div>)}
            <button onClick={onClick}>enviar</button>
			<button onClick={add}> add </button>
		</>
	);
}

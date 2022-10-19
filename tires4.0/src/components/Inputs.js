export default function Input({ marcaValue, priceValue, kmValue, func }) {
	return (
		<>
			<label htmlFor='MARCA'>
				MARCA
				<input
					id='MARCA'
					placeholder='digite a marca'
					type='text'
					name='marca'
					value={marcaValue}
					onChange={func}
				/>
			</label>
			<label htmlFor='PREÇO'>
				PREÇO
				<input
					id='PREÇO'
					placeholder='digite o preço'
					type='number'
					name='price'
					value={priceValue}
					onChange={func}
				/>
			</label>
			<label htmlFor='KM'>
				KM
				<input
					id='KM'
					placeholder='digite a kilometragem'
					type='number'
					name='km'
					value={kmValue}
					onChange={func}
				/>
			</label>
		</>
	);
}

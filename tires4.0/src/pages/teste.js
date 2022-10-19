import React, { useState } from "react"

export default function Teste() {


    const [form, setform] = useState([
        {
            marca: '',
            km: '',
            price: '',
            key: 1,
        }
    ])
    
    const add = () => {

        setform((prev) => [
            ...prev,
            { 
                marca: '',
                km: '',
                price: '',
                key: Date.now(),
            }
        ])
    }


    const on = (key,  event ) => {
        setform((prev) => {
            const newState = prev.map((product) => {
                if (product.key === key) {
                    return {
                        ...product,
                        [event.target.name]: event.target.value,
                    };
                }
                return product;
            })
            return newState;
        }) 
    }



    return (
        <>
            {form.map(({ key, price, marca, km  }) =>
                <form key={key}>
                    <input  type="text" name="marca" value={marca} onChange={(event) => on(key, event)} />
                    <input  type="text" name="price" value={price} onChange={(event) => on(key, event)} />
                    <input  type="text" name="km" value={km}       onChange={(event) => on(key, event)} />
                </form>

            )}
            <button onClick={add}> add </button>
        </>
        
    )
}
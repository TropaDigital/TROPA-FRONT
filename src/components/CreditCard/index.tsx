import type { NextPage } from 'next';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useState } from 'react';
import { UserData } from './styles';
import { IconSimpleCheck } from '../Svg';
import InputMask from "react-input-mask";

const CreditCard: NextPage = () => {
    const [values, setValues] = useState({
        name: '',
        number: '',
        expiration: '',
        cvc: '',
        focus: '',
    })
    
    const handleChange = (e:any) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFocus = (e:any) => {

        console.log(e.target.name)
        setValues({
            ...values,
            focus: e.target.name
        })
    }
    const handleSubmit = (e:any) => {
        e.preventDefault()
        // setErrors(validateInfo(values))
    }
    return (
        <UserData>
            <div className="user-card">
                <form onSubmit={handleSubmit}>
                    
                    <div className="number">
                        <label>Número do cartão</label>
                        <InputMask
                            mask="9999999999999999"
                            id="number"
                            name="number"
                            placeholder="Número do cartão"
                            value={values.number}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            // isValid={errors.cnumber}
                            
                        />
                    </div>

                    <div className="name">
                        <label>Nome do titular</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nome do titular"
                            value={values.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            // isValid={errors.cname}
                        />
                    </div>

                    <div className="expiration">
                        <label>Data de expiração</label>
                        <InputMask
                            mask="99/99"
                            id="expiration"
                            name="expiration"
                            placeholder="Data expiração"
                            value={values.expiration}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            // isValid={errors.cexp}
                        />
                    </div>
                    
                </form>

                <div>
                    <Cards
                        cvc={values.cvc}
                        expiry={values.expiration}
                        focused={values.focus}
                        name={values.name}
                        number={values.number}
                    />

                    <div className="date-code">
                        <span>Código de segurança</span>
                        <InputMask
                            mask="999"
                            id="cvc"
                            name="cvc"
                            placeholder="CVC/CVV"
                            value={values.cvc}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            // isValid={errors.ccvc}
                        />
                    </div>
                </div>
                
            </div>

            <button type="submit" className="pay-now">
                Pagar agora <IconSimpleCheck />
            </button>

        </UserData>
    )
}

export default CreditCard;
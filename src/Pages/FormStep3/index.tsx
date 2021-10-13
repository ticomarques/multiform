import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../Contexts/FormContext';
import { Theme } from '../../Components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {

    const history = useHistory();
    const {state, dispatch } = useForm();
    
    useEffect(()=>{
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
            alert('Cadastro realizado com sucesso.');
            console.log(state);
        } else {
            alert('Preencha os dados');
        }
    };

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleChangeGithub = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3 </p>
                <h1>Legal {state.name}, onde the achamos ?</h1>
                <p>Preencha os campos abaixo para que possamos ver o que você anda fazendo...</p>

                <hr />

                <label>
                    Qual é o seu email ?
                    <input 
                        type="text"
                        value={state.email}
                        onChange={handleChangeEmail}
                    />
                </label>

                <label>
                    Qual é o seu github ?
                    <input 
                        type="text"
                        value={state.github}
                        onChange={handleChangeGithub}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar</button>                
            </C.Container>
        </Theme>
    );
};

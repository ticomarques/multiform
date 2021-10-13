import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../Contexts/FormContext';
import { Theme } from '../../Components/Theme'
import { useEffect } from 'react';
import { SelectOption } from '../../Components/SelectOption';

export const FormStep2 = () => {

    const history = useHistory();
    const {state, dispatch } = useForm();
    
    useEffect(()=>{
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            history.push('/step3');
        } else {
            alert('Preencha os dados');
        }
    };

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    };

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3 </p>
                <h1>{state.name}, o que melhor descreve você ?</h1>
                <p>Selecione abaixo a opção que condiz com seu estado atual:</p>

                <hr />

                <SelectOption 
                    title="Sou iniciante"
                    description="< 2 anos de dev"
                    icon="emoji"
                    selected={state.level === 0}
                    onClick={()=>{setLevel(0)}}
                />

                <SelectOption 
                    title="Intermediario"
                    description=" 3 anos de dev"
                    icon="not nnob"
                    selected={state.level === 1}
                    onClick={()=>{setLevel(1)}}
                />

                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Proximo</button>                
            </C.Container>
        </Theme>
    );
};

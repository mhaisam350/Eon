import styles from '../styles/OptionsForm.module.scss';

export default function OptionsForm ({ name, values, selectedOptions, optionsSet, quantitySet } ) {

    // console.log(name);

    return (

        <fieldset>

            <legend>{ name }</legend>

            {

                values.map(value => {

                    const id = `${name}/${value}`;
                    const checked = selectedOptions[name] === value;

                    return (

                        <label key={id}>

                            <input
                                type='radio'
                                name={name}
                                value={value}
                                checked={checked}
                                onChange={() => {
                                    optionsSet(name, value);
                                    quantitySet(1);
                                }}
                            />

                        </label>

                    )

                })

            }

        </fieldset>

    )

}
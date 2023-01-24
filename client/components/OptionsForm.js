import styles from '../styles/OptionsForm.module.scss';

export default function OptionsForm ({ name, values, selectedOptions, optionsSet, quantitySet } ) {

    // console.log(name);

    return (

        <fieldset>

            <legend className={styles.legend}>{ name }</legend>

            {

                values.map(value => {

                    const id = `${name}/${value}`;
                    const checked = selectedOptions[name] === value;

                    return (

                        <label key={id} className={styles['radio-label']}>

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

                            <span 
                                className= {styles['radio-btn'] + " " + (name === 'Color' ? styles['height'] : "") }
                                style={ name === 'Color' ? {backgroundColor: value} : {} }>
                                
                                { name === 'Color' ? "" : value }

                            </span>
                            
                        </label>

                    )

                })

            }

        </fieldset>

    )

}
import css from './Filter.module.css'

const Filter = ({value, onChange}) => (
<label className={css.labelFilter}> Find contacts by name
    <input type="text" value={value} onChange={onChange} className={css.inputFilter}/>
</label>
)

export default Filter;
import { CountryType } from "./Interface";

export interface Props { 
    country:CountryType|null
}

const Country=(props: Props)=>{
    const {country}=props;
return(<div className='detail'>
  <p><label>country name:</label>{country?.name}</p>
  <p><img src={country?.flag}/></p>
  <p><label>Population:</label>{country?.population}</p>
  <p><label>Captal:</label>{country?.capital}</p>
</div>)
}
export default Country;
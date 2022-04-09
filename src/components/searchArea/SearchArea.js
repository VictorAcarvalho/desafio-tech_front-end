import React,{useState} from "react";
import Swal from "sweetalert2";
import handleProductSearch from "../../services/api"
import Title from "../title/Title";

function SearchBar(){
    const [search,setSearch] = useState('');
    const [list,setList] = useState([]);

    const searchProducts = async (queryParam) => {
      try{
        const data= await handleProductSearch(queryParam);

        setList(data.products);
      } catch(error){
         await Swal.fire({
            title:'Ops!!',
            text:'Erro na listagem de produtos.',
            icon:'error'
          });
      }
    }

    const  handleInputSearch = (event)=>{
        event.preventDefault();
         let inputSearch = event.target.value;
         setSearch(inputSearch);
       }


    return(
        <>
          <input type="text" placeholder="busque por um produto" onChange={handleInputSearch} value={search} />
          <button onClick={()=>searchProducts(search)} type="submit" >Buscar</button>
          <ul>
            {list.map((item)=>
              <>
              <p>{item.name}</p>
              <p>{item._meta.visitsClickCount}</p>
              </>
              
              )}
          </ul>
        </>
    )

}

export default SearchBar;
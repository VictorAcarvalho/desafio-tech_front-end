import React,{useState} from "react";
import Swal from "sweetalert2";
import handleProductSearch from "../../services/api";
import style from './SearchArea.module.css';
import box from '../../assets/box.svg';
function SearchArea(){
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
        <div className={style.container}>
          <div className={style.rowWrapper}>
          <input type="text" placeholder="busque por um produto" onChange={handleInputSearch} value={search} />
          <button onClick={()=>searchProducts(search)} type="submit" >Buscar</button>
          </div>  
          <ul className={style.listContainer}>
            {list.map((item)=>
              <div className={style.itemCard}>
                <img src={box} alt="imagem do produto" className={style.itemImage}/>
                <p className={style.itemTitle}>
                  {item.name}
                </p>
                <p>Visto: {item._meta.visitsClickCount} vezes</p>
              </div>
              )}
          </ul>

        </div>
      
    );

};

export default SearchArea;
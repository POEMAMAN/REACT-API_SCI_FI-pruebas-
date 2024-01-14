import { registerUser } from "../redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";

const Register = () => {
  //register va a guardar las proiedades en un objeto, la vamos ejecutando en cada imput, y usamos spread por el tema del objeto, e indicamos el nombre de la propiedad donde quiero guardarlo
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //encargada de ejectucar register user, y lo tengo que hacer con un dispatch porque esta en redux, es asimncronica porque regiter user es asincrona. Handle Summit recoge los datos de los input y sustituye a los eventos
  const registrar = async(formData) => {
    dispatch(registerUser(formData,navigate))
  }

  return (
    <div>

        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit(registrar)}>
          <label>
            Email
            <input type="email" placeholder="Introduce tu email" {...register("email")} />       
          </label>
          <label>
            Password
          <input type="password" placeholder="Introduce tu password" {...register("password")}/>
          </label>
          <label>
            Nombre
          <input type="text" {...register("name")}/>
          </label>
          <input type="submit" value="registrate"/>

        </form>
    </div>
  );
}

export default Register;

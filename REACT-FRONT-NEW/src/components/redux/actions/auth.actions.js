//El nombre AUTH solo es para identificar que van asociados a las acciones de authentificacion, si hay mas de un store se suele meter todos sus componenetes en una carpeta
//Son funciones asincronas porque se va a hacer peticiones al servidor
import { API } from "../../axios/api"



//El parametro es la informacion del formulario, y donde quiero que se vaya, usaremos asyncronamente el dispàrador de la funcion(el boton)
export const registerUser = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "register_user" });
    //comprobacion si llegan los datos del formulario
    console.log(formData)
    try {
        const result = await API.post("user/register", formData);
        console.log(result)
        //consulta result
        dispatch({ type: "register_user_ok", payload: result.data });
        navigate("/login");
    } catch (error) {
        dispatch({ type: "register_user_ko", payload: error.message });
        console.log(error)
    }

};
export const loginUser = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "login_user" });
    //comprobacion si llegan los datos del formulario
    console.log(formData)
    try {
        const result = await API.post("user/login", formData);
        console.log(result)
        //consulta result
        dispatch({ type: "login_user_ok", payload: result.data });
        // navigate("/login");
    } catch (error) {
        dispatch({ type: "login_user_ko", payload: error.message });
        console.log(error)
    }

};
export const logoutUser = () => {


};

import '../button/button.styles.scss'
const Button_Type_Classes={

    google:'google-sign-in',
    inverted:'inverted',


}


const Button=({children,button_Type,...otherProps})=>{


    return (
        <div>
            <button className={`button-container ${Button_Type_Classes[button_Type]} `} {...otherProps} >
              {children}
            </button>
        </div>
    )
}
export default Button;
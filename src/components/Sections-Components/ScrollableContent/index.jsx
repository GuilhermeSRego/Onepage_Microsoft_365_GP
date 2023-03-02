import './styles.css'

import image from '../../../assets/images/scrollableContent/image.png'

const ScrollableContent = () => {
    return (
        <div className="scrollable-wrapper">
            <img src={ image } alt="homem mexendo no computador" />
            <div className="content">
                <h3>Conteúdo do Slide</h3>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                    Latin literature from 45BC, making it over 2000 years old. Richard McClintock, a Latin professor 
                    at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                </p>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                    Latin literature from 45BC, making it over 2000 years old. Richard McClintock, a Latin professor 
                    at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                </p>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                    Latin literature from 45BC, making it over 2000 years old. Richard McClintock, a Latin professor 
                    at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                </p>
            </div>
        </div>
    )
}

export default ScrollableContent
import { MdCall } from 'react-icons/md'
import "./contact.css"

const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>e always ready to help by providing the best services for you <br/>
                    we beleiving a good blace to live can make your life better</span>

                <div className="flexColStart contactModes">
                    <div className="flexColStart row">
                        {/** First mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'>021 123 456 78</span>
                            </div>
                         </div>
                            <div className="flexCenter button">Call</div>                
                        </div>
                        {/** Second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'>021 123 456 78</span>
                            </div>
                         </div>
                            <div className="flexCenter button">Call</div>                
                        </div>
                        {/** Third mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'>021 123 456 78</span>
                            </div>
                         </div>
                            <div className="flexCenter button">Call</div>                
                        </div>
                        {/** Fourth mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'>021 123 456 78</span>
                            </div>
                         </div>
                            <div className="flexCenter button">Call</div>                
                        </div>
                    </div> 
                </div>
            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact